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
import { getCard, listCards } from "@/graphql/queries";
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

    let cardsData = await client.graphql({
      query: listCards,
      variables: {
        filter: { listID: { eq: cardToCopy.data.getCard?.listID } },
      },
    });

    cardsData.data.listCards.items.sort((a, b) => a.order - b.order);
    const cardLength = cardsData.data.listCards.items.length;

    const oldCard = cardToCopy.data.getCard as Card;
    card = await client.graphql({
      query: createCardMutation,
      variables: {
        input: {
          name: `${oldCard.name} - copy`,
          description: oldCard.description,
          listID: oldCard.listID,
          order: cardsData.data.listCards.items[cardLength - 1].order + 1,
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
