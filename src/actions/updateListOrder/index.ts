"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { updateList as updateListMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { UpdateListOrderSchema } from "./schema";
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

  const { items, boardId } = data;
  let lists;

  try {
    const listsPromises = await items.map(async (list) => {
      const listsUpdated = await client.graphql({
        query: updateListMutation,
        variables: {
          input: {
            id: list.id,
            _version: list._version,
            order: list.order,
          },
        },
      });
      return listsUpdated.data.updateList;
    });

    lists = await Promise.all(listsPromises);

    /* card = await client.graphql({
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
    }); */
  } catch (error) {
    return {
      error: "Failed to update.",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: lists };
};

export const updateListOrder = createSafeAction(UpdateListOrderSchema, handler);
