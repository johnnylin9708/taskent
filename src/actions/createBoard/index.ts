"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { createBoard as createBoardMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { CreateBoardSchema } from "./schema";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { createAuditLog } from "@/lib/createAuditLog";
import { Action, EntityType } from "@/API";
import { hasAvailableCount, incrementAvailableCount } from "@/lib/limit";

Amplify.configure(config);
const handler = async (data: InputType): Promise<ReturnType> => {
  const client = generateClient();
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return { error: "Unauthorized" };
  }

  const canCreate = await hasAvailableCount();

  if (!canCreate) {
    return {
      error:
        "You've reached your limit of free boards. Please upgrade to create more",
    };
  }

  const { name, image } = data;

  const [imageId, imageThumbUrl, imageFullUrl, imageUserName, imageLinkHTML] =
    image.split("|");

  if (
    !imageId ||
    !imageThumbUrl ||
    !imageFullUrl ||
    !imageUserName ||
    !imageLinkHTML
  ) {
    return { error: "Missing fields. Failed to create board." };
  }

  let board;

  try {
    board = await client.graphql({
      query: createBoardMutation,
      variables: {
        input: {
          name,
          orgId,
          imageId,
          imageThumbUrl,
          imageFullUrl,
          imageUserName,
          imageLinkHTML,
          description: "",
        },
      },
    });

    await incrementAvailableCount();

    await createAuditLog({
      entityId: board.data.createBoard.id,
      entityName: board.data.createBoard.name,
      entityType: EntityType.BOARD,
      action: Action.CREATE,
    });
  } catch (error) {
    return {
      error: "Failed to create.",
    };
  }

  revalidatePath(`/board/${board.data.createBoard.id}`);
  return { data: board.data.createBoard };
};

export const createBoard = createSafeAction(CreateBoardSchema, handler);
