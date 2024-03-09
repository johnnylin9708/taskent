/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMemberSubscription = /* GraphQL */ `subscription OnCreateMemberSubscription(
  $filter: ModelSubscriptionMemberSubscriptionFilterInput
) {
  onCreateMemberSubscription(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMemberSubscriptionSubscriptionVariables,
  APITypes.OnCreateMemberSubscriptionSubscription
>;
export const onUpdateMemberSubscription = /* GraphQL */ `subscription OnUpdateMemberSubscription(
  $filter: ModelSubscriptionMemberSubscriptionFilterInput
) {
  onUpdateMemberSubscription(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMemberSubscriptionSubscriptionVariables,
  APITypes.OnUpdateMemberSubscriptionSubscription
>;
export const onDeleteMemberSubscription = /* GraphQL */ `subscription OnDeleteMemberSubscription(
  $filter: ModelSubscriptionMemberSubscriptionFilterInput
) {
  onDeleteMemberSubscription(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMemberSubscriptionSubscriptionVariables,
  APITypes.OnDeleteMemberSubscriptionSubscription
>;
export const onCreateLimit = /* GraphQL */ `subscription OnCreateLimit($filter: ModelSubscriptionLimitFilterInput) {
  onCreateLimit(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLimitSubscriptionVariables,
  APITypes.OnCreateLimitSubscription
>;
export const onUpdateLimit = /* GraphQL */ `subscription OnUpdateLimit($filter: ModelSubscriptionLimitFilterInput) {
  onUpdateLimit(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLimitSubscriptionVariables,
  APITypes.OnUpdateLimitSubscription
>;
export const onDeleteLimit = /* GraphQL */ `subscription OnDeleteLimit($filter: ModelSubscriptionLimitFilterInput) {
  onDeleteLimit(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLimitSubscriptionVariables,
  APITypes.OnDeleteLimitSubscription
>;
export const onCreateAuditLog = /* GraphQL */ `subscription OnCreateAuditLog($filter: ModelSubscriptionAuditLogFilterInput) {
  onCreateAuditLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAuditLogSubscriptionVariables,
  APITypes.OnCreateAuditLogSubscription
>;
export const onUpdateAuditLog = /* GraphQL */ `subscription OnUpdateAuditLog($filter: ModelSubscriptionAuditLogFilterInput) {
  onUpdateAuditLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAuditLogSubscriptionVariables,
  APITypes.OnUpdateAuditLogSubscription
>;
export const onDeleteAuditLog = /* GraphQL */ `subscription OnDeleteAuditLog($filter: ModelSubscriptionAuditLogFilterInput) {
  onDeleteAuditLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAuditLogSubscriptionVariables,
  APITypes.OnDeleteAuditLogSubscription
>;
export const onCreateCard = /* GraphQL */ `subscription OnCreateCard($filter: ModelSubscriptionCardFilterInput) {
  onCreateCard(filter: $filter) {
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
    orgId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCardSubscriptionVariables,
  APITypes.OnCreateCardSubscription
>;
export const onUpdateCard = /* GraphQL */ `subscription OnUpdateCard($filter: ModelSubscriptionCardFilterInput) {
  onUpdateCard(filter: $filter) {
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
    orgId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCardSubscriptionVariables,
  APITypes.OnUpdateCardSubscription
>;
export const onDeleteCard = /* GraphQL */ `subscription OnDeleteCard($filter: ModelSubscriptionCardFilterInput) {
  onDeleteCard(filter: $filter) {
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
    orgId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCardSubscriptionVariables,
  APITypes.OnDeleteCardSubscription
>;
export const onCreateList = /* GraphQL */ `subscription OnCreateList($filter: ModelSubscriptionListFilterInput) {
  onCreateList(filter: $filter) {
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
    orgId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateListSubscriptionVariables,
  APITypes.OnCreateListSubscription
>;
export const onUpdateList = /* GraphQL */ `subscription OnUpdateList($filter: ModelSubscriptionListFilterInput) {
  onUpdateList(filter: $filter) {
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
    orgId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateListSubscriptionVariables,
  APITypes.OnUpdateListSubscription
>;
export const onDeleteList = /* GraphQL */ `subscription OnDeleteList($filter: ModelSubscriptionListFilterInput) {
  onDeleteList(filter: $filter) {
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
    orgId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteListSubscriptionVariables,
  APITypes.OnDeleteListSubscription
>;
export const onCreateBoard = /* GraphQL */ `subscription OnCreateBoard($filter: ModelSubscriptionBoardFilterInput) {
  onCreateBoard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBoardSubscriptionVariables,
  APITypes.OnCreateBoardSubscription
>;
export const onUpdateBoard = /* GraphQL */ `subscription OnUpdateBoard($filter: ModelSubscriptionBoardFilterInput) {
  onUpdateBoard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBoardSubscriptionVariables,
  APITypes.OnUpdateBoardSubscription
>;
export const onDeleteBoard = /* GraphQL */ `subscription OnDeleteBoard($filter: ModelSubscriptionBoardFilterInput) {
  onDeleteBoard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBoardSubscriptionVariables,
  APITypes.OnDeleteBoardSubscription
>;
