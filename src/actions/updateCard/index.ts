"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { updateCard as updateCardMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { UpdateCardSchema } from "./schema";
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

  const { name, description, boardId, id, _version, ...values } = data;
  let card;

  try {
    card = await client.graphql({
      query: updateCardMutation,
      variables: {
        input: {
          id,
          name,
          description,
          _version,
        },
      },
    });
    await createAuditLog({
      entityId: card.data.updateCard.id,
      entityName: card.data.updateCard.name,
      entityType: EntityType.CARD,
      action: Action.UPDATE,
    });
  } catch (error) {
    return {
      error: "Failed to update.",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: card.data.updateCard };
};

export const updateCard = createSafeAction(UpdateCardSchema, handler);
