"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { generateClient } from "aws-amplify/api";
import { createBoard as CreateBoardMutation } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoardSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const client = generateClient();
  const { userId } = auth();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  const { name } = data;
  let board;

  try {
    board = await client.graphql({
      query: CreateBoardMutation,
      variables: {
        input: {
          name,
          description: "Lorem ipsum dolor sit amet",
        },
      },
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
