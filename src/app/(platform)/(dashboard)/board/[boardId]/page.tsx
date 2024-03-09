import { cardsByListID, listCards, listLists } from "@/graphql/queries";
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

  /* if (!orgId) {
    redirect("/select-org");
  } */

  let listsdata = await client.graphql({
    query: listLists,
    variables: {
      filter: { boardID: { eq: params.boardId } },
    },
  });

  listsdata.data.listLists.items.sort((a, b) => a.order - b.order);

  const listsPromises = listsdata.data.listLists.items.map(async (listItem) => {
    let cardsData = await client.graphql({
      query: cardsByListID,
      variables: {
        listID: listItem.id,
      },
    });
    cardsData.data.cardsByListID.items =
      cardsData.data.cardsByListID.items.sort((a, b) => a.order - b.order);
    return { ...listItem, Cards: cardsData.data.cardsByListID };
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
