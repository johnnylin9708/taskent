import { getCard } from "@/graphql/queries";
import { auth } from "@clerk/nextjs";
import { generateClient } from "aws-amplify/api";
import { NextResponse } from "next/server";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";

Amplify.configure(config);
export async function GET(
  req: Request,
  { params }: { params: { cardId: string } }
) {
  const client = generateClient();
  try {
    const { userId, orgId } = auth();

    if (!userId || !orgId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const variables = {
      id: params.cardId,
    };
    const card = await client.graphql({
      query: getCard,
      variables,
    });

    return NextResponse.json(card.data.getCard);
  } catch (error) {
    return new NextResponse("Internet Error", { status: 500 });
  }
}
