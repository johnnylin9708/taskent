"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { createList as createListMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { CreateListSchema } from "./schema";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { getBoard } from "@/graphql/queries";
import { createAuditLog } from "@/lib/createAuditLog";
import { Action, EntityType } from "@/API";

Amplify.configure(config);
const handler = async (data: InputType): Promise<ReturnType> => {
  const client = generateClient();
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return { error: "Unauthorized" };
  }

  const { name, boardId } = data;
  let list;

  try {
    const variables = {
      id: boardId,
      filter: {
        orgId: {
          eq: orgId,
        },
      },
    };
    const board = await client.graphql({
      query: getBoard,
      variables,
    });

    if (!board) {
      return { error: "Board not found" };
    }

    /* const lastList = await client.graphql({ query: getList }); */

    list = await client.graphql({
      query: createListMutation,
      variables: {
        input: {
          name,
          boardID: boardId,
          order: 1,
        },
      },
    });

    await createAuditLog({
      entityId: list.data.createList.id,
      entityName: list.data.createList.name,
      entityType: EntityType.LIST,
      action: Action.CREATE,
    });
  } catch (error) {
    return {
      error: "Failed to create.",
    };
  }
  revalidatePath(`/board/${boardId}`);
  return { data: list.data.createList };
};

export const createList = createSafeAction(CreateListSchema, handler);
