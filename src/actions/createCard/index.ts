"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { createCard as createCardMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateCardSchema } from "./schema";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { getBoard, getList } from "@/graphql/queries";

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

    /* const lastList = await client.graphql({ query: getList }); */
    card = await client.graphql({
      query: createCardMutation,
      variables: {
        input: {
          name,
          listID: listId,
          order: 1,
        },
      },
    });
  } catch (error) {
    return {
      error: "Failed to create.",
    };
  }
  revalidatePath(`/board/${boardId}`);
  return { data: card.data.createCard };
};

export const createCard = createSafeAction(CreateCardSchema, handler);
