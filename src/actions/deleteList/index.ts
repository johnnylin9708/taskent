"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { deleteList as deleteListMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { DeleteListSchema } from "./schema";
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
  let list;

  try {
    list = await client.graphql({
      query: deleteListMutation,
      variables: {
        input: {
          id,
          _version,
        },
      },
    });
    await createAuditLog({
      entityId: list.data.deleteList.id,
      entityName: list.data.deleteList.name,
      entityType: EntityType.LIST,
      action: Action.DELETE,
    });
  } catch (error) {
    return {
      error: "Failed to delete.",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: list.data.deleteList };
};

export const deleteList = createSafeAction(DeleteListSchema, handler);
