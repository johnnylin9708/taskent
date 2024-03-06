"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import {
  deleteBoard as deleteBoardMutation,
  deleteList as deleteListMutation,
  deleteCard as deleteCardMutation,
} from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { DeleteBoardSchema } from "./schema";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { redirect } from "next/navigation";
import { createAuditLog } from "@/lib/createAuditLog";
import { Action, EntityType } from "@/API";
import { decreaseAvailableCount } from "@/lib/limit";
import { checkSubscription } from "@/lib/subscription";

Amplify.configure(config);
const handler = async (data: InputType): Promise<ReturnType> => {
  const client = generateClient();
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return { error: "Unauthorized" };
  }

  const isPro = await checkSubscription();
  const { id, _version } = data;
  let board;

  try {
    board = await client.graphql({
      query: deleteBoardMutation,
      variables: {
        input: {
          id,
          _version,
        },
      },
    });

    if (!isPro) {
      await decreaseAvailableCount();
    }

    await createAuditLog({
      entityId: board.data.deleteBoard.id,
      entityName: board.data.deleteBoard.name,
      entityType: EntityType.BOARD,
      action: Action.DELETE,
    });
  } catch (error) {
    return {
      error: "Failed to delete.",
    };
  }

  revalidatePath(`/organization/${orgId}`);
  redirect(`/organization/${orgId}`);
};

export const deleteBoard = createSafeAction(DeleteBoardSchema, handler);
