"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { deleteCard as deleteCardMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { DeleteCardSchema } from "./schema";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { createAuditLog } from "@/lib/createAuditLog";
import { Action, EntityType } from "@/API";

Amplify.configure(config);
const handler = async (data: InputType): Promise<ReturnType> => {
  const client = generateClient();
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return { error: "Unauthorized" };
  }

  const { id, _version, boardId } = data;
  let card;

  try {
    card = await client.graphql({
      query: deleteCardMutation,
      variables: {
        input: {
          id,
          _version,
        },
      },
    });
    await createAuditLog({
      entityId: card.data.deleteCard.id,
      entityName: card.data.deleteCard.name,
      entityType: EntityType.CARD,
      action: Action.DELETE,
    });
  } catch (error) {
    return {
      error: "Failed to delete.",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: card.data.deleteCard };
};

export const deleteCard = createSafeAction(DeleteCardSchema, handler);
