"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { createCard as createCardMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CopyCardSchema } from "./schema";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { getCard } from "@/graphql/queries";
import { Card } from "@/API";

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
  } catch (error) {
    return {
      error: "Failed to copy.",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: card.data.createCard };
};

export const copyCard = createSafeAction(CopyCardSchema, handler);
