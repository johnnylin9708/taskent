"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { createCard as createCardMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { CreateCardSchema } from "./schema";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { getBoard, getList, listCards } from "@/graphql/queries";
import { createAuditLog } from "@/lib/createAuditLog";
import { Action, EntityType } from "@/API";

Amplify.configure(config);
const handler = async (data: InputType): Promise<ReturnType> => {
  const client = generateClient();
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return { error: "Unauthorized" };
  }

  const { name, boardId, listId } = data;

  let card;
  try {
    const variables = {
      id: listId,
      filter: {
        boardId: {
          eq: boardId,
        },
      },
    };
    const list = await client.graphql({
      query: getList,
      variables,
    });

    if (!list) {
      return { error: "Board not found" };
    }

    let cardsData = await client.graphql({
      query: listCards,
      variables: {
        filter: { listID: { eq: listId } },
      },
    });

    if (cardsData.data.listCards?.items.length) {
      cardsData.data.listCards.items.sort((a, b) => a.order - b.order);
      const cardLength = cardsData.data.listCards.items.length;
      card = await client.graphql({
        query: createCardMutation,
        variables: {
          input: {
            name,
            listID: listId,
            order: cardsData.data.listCards?.items.length
              ? cardsData.data.listCards?.items[cardLength - 1]?.order + 1
              : 0,
          },
        },
      });
    } else {
      card = await client.graphql({
        query: createCardMutation,
        variables: {
          input: {
            name,
            listID: listId,
            order: 0,
          },
        },
      });
    }

    await createAuditLog({
      entityId: card.data.createCard.id,
      entityName: card.data.createCard.name,
      entityType: EntityType.CARD,
      action: Action.CREATE,
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to create.",
    };
  }
  revalidatePath(`/board/${boardId}`);
  return { data: card.data.createCard };
};

export const createCard = createSafeAction(CreateCardSchema, handler);
