import { MAX_FREE_BOARDS } from "@/constants/board";
import { createLimit, updateLimit } from "@/graphql/mutations";
import { listLimits } from "@/graphql/queries";
import { auth } from "@clerk/nextjs";
import { generateClient } from "aws-amplify/api";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";

Amplify.configure(config);
const client = generateClient();
export const incrementAvailableCount = async () => {
  const { orgId } = auth();

  if (!orgId) {
    return;
  }

  const limit = await client.graphql({
    query: listLimits,
    variables: { filter: { orgId: { eq: orgId } } },
  });
  if (limit.data.listLimits?.items[0]?.count) {
    const count = limit.data.listLimits?.items[0]?.count;
    const data = await client.graphql({
      query: updateLimit,
      variables: {
        input: {
          id: limit.data.listLimits?.items[0]?.id,
          count: count + 1,
          _version: limit.data.listLimits?.items[0]?._version,
        },
      },
    });
  } else {
    await client.graphql({
      query: createLimit,
      variables: {
        input: {
          orgId,
          count: 1,
        },
      },
    });
  }
};

export const decreaseAvailableCount = async () => {
  const { orgId } = auth();

  if (!orgId) {
    throw new Error("Unauthorized");
  }

  const limit = await client.graphql({
    query: listLimits,
    variables: { filter: { orgId: { eq: orgId } } },
  });

  if (limit.data.listLimits?.items[0]?.count) {
    const count = limit.data.listLimits?.items[0]?.count;
    const data = await client.graphql({
      query: updateLimit,
      variables: {
        input: {
          id: limit.data.listLimits?.items[0]?.id,
          count: count > 0 ? count - 1 : 0,
          _version: limit.data.listLimits?.items[0]?._version,
        },
      },
    });
  } else {
    await client.graphql({
      query: createLimit,
      variables: {
        input: {
          orgId,
          count: 1,
        },
      },
    });
  }
};

export const hasAvailableCount = async () => {
  const { orgId } = auth();

  if (!orgId) {
    throw new Error("Unauthorized");
  }

  const limit = await client.graphql({
    query: listLimits,
    variables: { filter: { orgId: { eq: orgId } } },
  });
  if (
    !limit.data.listLimits.items ||
    (limit.data.listLimits?.items[0]?.count || 0) < MAX_FREE_BOARDS
  ) {
    return true;
  } else {
    return false;
  }
};

export const getAvailableCount = async () => {
  const { orgId } = auth();

  if (!orgId) {
    return 0;
  }

  const limit = await client.graphql({
    query: listLimits,
    variables: { filter: { orgId: { eq: orgId } } },
  });

  if (!limit.data.listLimits?.items[0]) {
    return 0;
  }

  return limit.data.listLimits.items[0]?.count;
};
