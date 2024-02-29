import { listLists } from "@/graphql/queries";
import { auth } from "@clerk/nextjs";
import { generateClient } from "aws-amplify/api";
import { redirect } from "next/navigation";
import { ListContainer } from "./components/listContainer";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}
const client = generateClient();
const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const data = await client.graphql({
    query: listLists,
    variables: {
      filter: { boardID: { eq: params.boardId } },
    },
  });

  const lists = data.data.listLists.items;

  return (
    <div className="p-4 h-full overflow-x-auto">
      <ListContainer boardId={params.boardId} data={lists} />
    </div>
  );
};

export default BoardIdPage;
