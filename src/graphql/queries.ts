/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMemberSubscription = /* GraphQL */ `query GetMemberSubscription($id: ID!) {
  getMemberSubscription(id: $id) {
    id
    orgId
    userId
    stripeCustomerId
    stripeSubscriptionId
    stripePriceId
    stripeCurrentPeriodEnd
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMemberSubscriptionQueryVariables,
  APITypes.GetMemberSubscriptionQuery
>;
export const listMemberSubscriptions = /* GraphQL */ `query ListMemberSubscriptions(
  $filter: ModelMemberSubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listMemberSubscriptions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orgId
      userId
      stripeCustomerId
      stripeSubscriptionId
      stripePriceId
      stripeCurrentPeriodEnd
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMemberSubscriptionsQueryVariables,
  APITypes.ListMemberSubscriptionsQuery
>;
export const syncMemberSubscriptions = /* GraphQL */ `query SyncMemberSubscriptions(
  $filter: ModelMemberSubscriptionFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMemberSubscriptions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      orgId
      userId
      stripeCustomerId
      stripeSubscriptionId
      stripePriceId
      stripeCurrentPeriodEnd
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncMemberSubscriptionsQueryVariables,
  APITypes.SyncMemberSubscriptionsQuery
>;
export const getLimit = /* GraphQL */ `query GetLimit($id: ID!) {
  getLimit(id: $id) {
    id
    orgId
    count
    userId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLimitQueryVariables, APITypes.GetLimitQuery>;
export const listLimits = /* GraphQL */ `query ListLimits(
  $filter: ModelLimitFilterInput
  $limit: Int
  $nextToken: String
) {
  listLimits(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      orgId
      count
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLimitsQueryVariables,
  APITypes.ListLimitsQuery
>;
export const syncLimits = /* GraphQL */ `query SyncLimits(
  $filter: ModelLimitFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncLimits(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      orgId
      count
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncLimitsQueryVariables,
  APITypes.SyncLimitsQuery
>;
export const getAuditLog = /* GraphQL */ `query GetAuditLog($id: ID!) {
  getAuditLog(id: $id) {
    id
    orgId
    action
    entityId
    entityType
    entityName
    userImage
    userName
    userId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAuditLogQueryVariables,
  APITypes.GetAuditLogQuery
>;
export const listAuditLogs = /* GraphQL */ `query ListAuditLogs(
  $filter: ModelAuditLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuditLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      orgId
      action
      entityId
      entityType
      entityName
      userImage
      userName
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuditLogsQueryVariables,
  APITypes.ListAuditLogsQuery
>;
export const syncAuditLogs = /* GraphQL */ `query SyncAuditLogs(
  $filter: ModelAuditLogFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAuditLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      orgId
      action
      entityId
      entityType
      entityName
      userImage
      userName
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAuditLogsQueryVariables,
  APITypes.SyncAuditLogsQuery
>;
export const getCard = /* GraphQL */ `query GetCard($id: ID!) {
  getCard(id: $id) {
    id
    name
    order
    description
    listID
    initiator
    assignee
    startDate
    endDate
    listName
    userId
    userName
    userImage
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCardQueryVariables, APITypes.GetCardQuery>;
export const listCards = /* GraphQL */ `query ListCards(
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
) {
  listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      order
      description
      listID
      initiator
      assignee
      startDate
      endDate
      listName
      userId
      userName
      userImage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCardsQueryVariables, APITypes.ListCardsQuery>;
export const syncCards = /* GraphQL */ `query SyncCards(
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCards(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      order
      description
      listID
      initiator
      assignee
      startDate
      endDate
      listName
      userId
      userName
      userImage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncCardsQueryVariables, APITypes.SyncCardsQuery>;
export const cardsByListID = /* GraphQL */ `query CardsByListID(
  $listID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
) {
  cardsByListID(
    listID: $listID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      order
      description
      listID
      initiator
      assignee
      startDate
      endDate
      listName
      userId
      userName
      userImage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CardsByListIDQueryVariables,
  APITypes.CardsByListIDQuery
>;
export const getList = /* GraphQL */ `query GetList($id: ID!) {
  getList(id: $id) {
    id
    name
    order
    boardID
    Cards {
      nextToken
      startedAt
      __typename
    }
    boardName
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetListQueryVariables, APITypes.GetListQuery>;
export const listLists = /* GraphQL */ `query ListLists(
  $filter: ModelListFilterInput
  $limit: Int
  $nextToken: String
) {
  listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      order
      boardID
      boardName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListListsQueryVariables, APITypes.ListListsQuery>;
export const syncLists = /* GraphQL */ `query SyncLists(
  $filter: ModelListFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncLists(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      order
      boardID
      boardName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncListsQueryVariables, APITypes.SyncListsQuery>;
export const listsByBoardID = /* GraphQL */ `query ListsByBoardID(
  $boardID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelListFilterInput
  $limit: Int
  $nextToken: String
) {
  listsByBoardID(
    boardID: $boardID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      order
      boardID
      boardName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListsByBoardIDQueryVariables,
  APITypes.ListsByBoardIDQuery
>;
export const getBoard = /* GraphQL */ `query GetBoard($id: ID!) {
  getBoard(id: $id) {
    id
    orgId
    name
    imageId
    imageThumbUrl
    imageFullUrl
    imageUserName
    imageLinkHTML
    description
    Lists {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBoardQueryVariables, APITypes.GetBoardQuery>;
export const listBoards = /* GraphQL */ `query ListBoards(
  $filter: ModelBoardFilterInput
  $limit: Int
  $nextToken: String
) {
  listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      orgId
      name
      imageId
      imageThumbUrl
      imageFullUrl
      imageUserName
      imageLinkHTML
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBoardsQueryVariables,
  APITypes.ListBoardsQuery
>;
export const syncBoards = /* GraphQL */ `query SyncBoards(
  $filter: ModelBoardFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncBoards(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      orgId
      name
      imageId
      imageThumbUrl
      imageFullUrl
      imageUserName
      imageLinkHTML
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncBoardsQueryVariables,
  APITypes.SyncBoardsQuery
>;
