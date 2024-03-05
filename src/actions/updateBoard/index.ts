"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { updateBoard as updateBoardMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { UpdateBoardSchema } from "./schema";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { createAuditLog } from "@/lib/createAuditLog";
import { Action, EntityType } from "@/API";

Amplify.configure(config);
const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();
  const client = generateClient();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { name, id, _version } = data;
  let board;

  try {
    board = await client.graphql({
      query: updateBoardMutation,
      variables: {
        input: {
          name,
          id,
          orgId,
          _version,
        },
      },
    });
    await createAuditLog({
      entityId: board.data.updateBoard.id,
      entityName: board.data.updateBoard.name,
      entityType: EntityType.BOARD,
      action: Action.UPDATE,
    });
  } catch (error) {
    return {
      error: "Failed to update.",
    };
  }

  revalidatePath(`/board/${id}`);
  return { data: board.data.updateBoard };
};

export const updateBoard = createSafeAction(UpdateBoardSchema, handler);
