import { generateClient } from "aws-amplify/api";
import { listBoards, getBoard } from "@/graphql/queries";
import { createBoard } from "@/graphql/mutations";
import { updateBoard } from "@/graphql/mutations";
import { deleteBoard } from "@/graphql/mutations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const client = generateClient();

export const createBoardAction = async (formData: FormData) => {
  "use server";
  const name = formData.get("name") as string;

  await client.graphql({
    query: createBoard,
    variables: {
      input: {
        name,
        description: "Lorem ipsum dolor sit amet",
      },
    },
  });

  revalidatePath("/organization/org_2cqeAYCNtGCK7GI9jh0lL9WKfrG");
  redirect("/organization/org_2cqeAYCNtGCK7GI9jh0lL9WKfrG");
};

// export const queryBoardsAction = async () => {
//   "use server";
//   // List all items

//   const allBoards = await client.graphql({
//     query: listBoards,
//   });

//   return allBoards.data.listBoards.items;
// };

// export const queryBoardByIdAction = async (id: string) => {
//   "use server";
//   // Get a specific item
//   const oneBoard = await client.graphql({
//     query: getBoard,
//     variables: { id },
//   });

//   return oneBoard;
// };

// export const deleteBoardByIdAction = async (id: string) => {
//   "use server";
//   await client.graphql({
//     query: deleteBoard,
//     variables: {
//       input: {
//         id,
//       },
//     },
//   });

//   revalidatePath("/organization/org_2cqeAYCNtGCK7GI9jh0lL9WKfrG");
//   redirect("/organization/org_2cqeAYCNtGCK7GI9jh0lL9WKfrG");
// };
