"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { createList as createListMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { CopyListSchema } from "./schema";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { getList } from "@/graphql/queries";
import { Action, EntityType, List } from "@/API";
import { createAuditLog } from "@/lib/createAuditLog";

Amplify.configure(config);
const handler = async (data: InputType): Promise<ReturnType> => {
  const client = generateClient();
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return { error: "Unauthorized" };
  }

  const { id, boardId } = data;
  let list;

  try {
    const oldListData = await client.graphql({
      query: getList,
      variables: {
        id,
      },
    });

    const oldList = oldListData.data.getList as List;
    list = await client.graphql({
      query: createListMutation,
      variables: {
        input: {
          ...oldList,
          boardID: oldList.boardID,
          name: `${oldList.name} - copy`,
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
      error: "Failed to copy.",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: list.data.createList };
};

export const copyList = createSafeAction(CopyListSchema, handler);
