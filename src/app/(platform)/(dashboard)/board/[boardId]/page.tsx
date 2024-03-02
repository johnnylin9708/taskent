import { listCards, listLists } from "@/graphql/queries";
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

  const listsdata = await client.graphql({
    query: listLists,
    variables: {
      filter: { boardID: { eq: params.boardId } },
    },
  });

  const listsPromises = listsdata.data.listLists.items.map(async (listItem) => {
    const cardsData = await client.graphql({
      query: listCards,
      variables: {
        filter: { listID: { eq: listItem.id } },
      },
    });
    return { ...listItem, Cards: cardsData.data.listCards };
  });

  const ListWithCardsData = await Promise.all(listsPromises);

  return (
    <div className="p-4 h-full overflow-x-auto">
      <ListContainer
        boardId={params.boardId}
        /* data={listsdata.data.listLists.items} */
        data={ListWithCardsData}
      />
    </div>
  );
};

export default BoardIdPage;
