import { listAuditLogs } from "@/graphql/queries";
import { auth } from "@clerk/nextjs";
import { generateClient } from "aws-amplify/api";
import { NextResponse } from "next/server";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { EntityType } from "@/API";

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

    const auditLogs = await client.graphql({
      query: listAuditLogs,
      variables: {
        filter: {
          orgId: { eq: orgId },
          entityId: { eq: params.cardId },
          entityType: { eq: EntityType.CARD },
        },
      },
    });

    return NextResponse.json(auditLogs.data.listAuditLogs.items);
  } catch (error) {
    return new NextResponse("Internet Error", { status: 500 });
  }
}
