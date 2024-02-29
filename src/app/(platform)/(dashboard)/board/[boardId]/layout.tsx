import { getBoard } from "@/graphql/queries";
import { auth } from "@clerk/nextjs";
import { generateClient } from "aws-amplify/api";
import { notFound, redirect } from "next/navigation";
import { BoardNavbar } from "./components/boardNavbar";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";

Amplify.configure(config);
const client = generateClient();

export async function generateMetadata({
  params,
}: {
  params: { boardId: string };
}) {
  const { orgId } = auth();
  const { boardId } = params;

  if (!orgId) {
    return { title: "Board" };
  }
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

  return { title: board.data.getBoard?.name || "Board" };
}

const BoardIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) => {
  const { orgId } = auth();
  const { boardId } = params;
  if (!orgId) {
    redirect("/select-org");
  }

  const variables = {
    id: boardId,
    filter: {
      orgId: {
        eq: orgId,
      },
    },
  };

  const getBoardResponse = await client.graphql({
    query: getBoard,
    variables,
  });

  const board = getBoardResponse.data.getBoard;

  if (!board) {
    notFound();
  }

  return (
    <div
      className="relative h-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      <BoardNavbar data={board} />
      <div className="absolute inset-0 bg-black/10" />
      <main className="relative pt-28 h-full">{children}</main>
    </div>
  );
};

export default BoardIdLayout;
