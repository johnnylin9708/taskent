"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { createCard as createCardMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { CopyCardSchema } from "./schema";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { getCard } from "@/graphql/queries";
import { Action, Card, EntityType } from "@/API";
import { createAuditLog } from "@/lib/createAuditLog";

Amplify.configure(config);
const handler = async (data: InputType): Promise<ReturnType> => {
  const client = generateClient();
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return { error: "Unauthorized" };
  }

  const { id, boardId } = data;
  let card;

  try {
    const cardToCopy = await client.graphql({
      query: getCard,
      variables: {
        id,
      },
    });

    if (!cardToCopy) {
      return { error: "Card not found" };
    }

    const oldCard = cardToCopy.data.getCard as Card;
    card = await client.graphql({
      query: createCardMutation,
      variables: {
        input: {
          name: `${oldCard.name} - copy`,
          description: oldCard.description,
          listID: oldCard.listID,
        },
      },
    });

    await createAuditLog({
      entityId: card.data.createCard.id,
      entityName: card.data.createCard.name,
      entityType: EntityType.CARD,
      action: Action.CREATE,
    });
  } catch (error) {
    return {
      error: "Failed to copy.",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: card.data.createCard };
};

export const copyCard = createSafeAction(CopyCardSchema, handler);
