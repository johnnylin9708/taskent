"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { updateList as updateListMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { UpdateListSchema } from "./schema";
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

  const { name, id, _version, boardId } = data;
  let list;

  try {
    list = await client.graphql({
      query: updateListMutation,
      variables: {
        input: {
          name,
          id,
          boardID: boardId,
          _version,
        },
      },
    });
    await createAuditLog({
      entityId: list.data.updateList.id,
      entityName: list.data.updateList.name,
      entityType: EntityType.LIST,
      action: Action.UPDATE,
    });
  } catch (error) {
    return {
      error: "Failed to update.",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: list.data.updateList };
};

export const updateList = createSafeAction(UpdateListSchema, handler);
