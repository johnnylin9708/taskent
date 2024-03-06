import { listMemberSubscriptions } from "@/graphql/queries";
import { auth } from "@clerk/nextjs";
import { generateClient } from "aws-amplify/api";

const DAY_IN_MS = 84_400_000;

export const checkSubscription = async () => {
  const { orgId, userId } = auth();

  if (!orgId) {
    return false;
  }
  const client = generateClient();
  const memberSubscription = await client.graphql({
    query: listMemberSubscriptions,
    variables: {
      filter: {
        or: [{ orgId: { eq: orgId } }, { userId: { eq: userId } }],
      },
    },
  });
  if (!memberSubscription.data.listMemberSubscriptions.items[0]) {
    return false;
  }

  if (
    memberSubscription.data.listMemberSubscriptions.items[0]
      .stripeCurrentPeriodEnd
  ) {
    const periodEnd = new Date(
      memberSubscription.data.listMemberSubscriptions.items[0].stripeCurrentPeriodEnd
    );
    const isValid =
      memberSubscription.data.listMemberSubscriptions.items[0].stripePriceId &&
      periodEnd.getTime() + DAY_IN_MS > Date.now();

    return !!isValid;
  }
};
