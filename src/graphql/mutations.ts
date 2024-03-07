/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMemberSubscription = /* GraphQL */ `mutation CreateMemberSubscription(
  $input: CreateMemberSubscriptionInput!
  $condition: ModelMemberSubscriptionConditionInput
) {
  createMemberSubscription(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMemberSubscriptionMutationVariables,
  APITypes.CreateMemberSubscriptionMutation
>;
export const updateMemberSubscription = /* GraphQL */ `mutation UpdateMemberSubscription(
  $input: UpdateMemberSubscriptionInput!
  $condition: ModelMemberSubscriptionConditionInput
) {
  updateMemberSubscription(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMemberSubscriptionMutationVariables,
  APITypes.UpdateMemberSubscriptionMutation
>;
export const deleteMemberSubscription = /* GraphQL */ `mutation DeleteMemberSubscription(
  $input: DeleteMemberSubscriptionInput!
  $condition: ModelMemberSubscriptionConditionInput
) {
  deleteMemberSubscription(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMemberSubscriptionMutationVariables,
  APITypes.DeleteMemberSubscriptionMutation
>;
export const createLimit = /* GraphQL */ `mutation CreateLimit(
  $input: CreateLimitInput!
  $condition: ModelLimitConditionInput
) {
  createLimit(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLimitMutationVariables,
  APITypes.CreateLimitMutation
>;
export const updateLimit = /* GraphQL */ `mutation UpdateLimit(
  $input: UpdateLimitInput!
  $condition: ModelLimitConditionInput
) {
  updateLimit(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLimitMutationVariables,
  APITypes.UpdateLimitMutation
>;
export const deleteLimit = /* GraphQL */ `mutation DeleteLimit(
  $input: DeleteLimitInput!
  $condition: ModelLimitConditionInput
) {
  deleteLimit(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLimitMutationVariables,
  APITypes.DeleteLimitMutation
>;
export const createAuditLog = /* GraphQL */ `mutation CreateAuditLog(
  $input: CreateAuditLogInput!
  $condition: ModelAuditLogConditionInput
) {
  createAuditLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAuditLogMutationVariables,
  APITypes.CreateAuditLogMutation
>;
export const updateAuditLog = /* GraphQL */ `mutation UpdateAuditLog(
  $input: UpdateAuditLogInput!
  $condition: ModelAuditLogConditionInput
) {
  updateAuditLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAuditLogMutationVariables,
  APITypes.UpdateAuditLogMutation
>;
export const deleteAuditLog = /* GraphQL */ `mutation DeleteAuditLog(
  $input: DeleteAuditLogInput!
  $condition: ModelAuditLogConditionInput
) {
  deleteAuditLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAuditLogMutationVariables,
  APITypes.DeleteAuditLogMutation
>;
export const createCard = /* GraphQL */ `mutation CreateCard(
  $input: CreateCardInput!
  $condition: ModelCardConditionInput
) {
  createCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCardMutationVariables,
  APITypes.CreateCardMutation
>;
export const updateCard = /* GraphQL */ `mutation UpdateCard(
  $input: UpdateCardInput!
  $condition: ModelCardConditionInput
) {
  updateCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCardMutationVariables,
  APITypes.UpdateCardMutation
>;
export const deleteCard = /* GraphQL */ `mutation DeleteCard(
  $input: DeleteCardInput!
  $condition: ModelCardConditionInput
) {
  deleteCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCardMutationVariables,
  APITypes.DeleteCardMutation
>;
export const createList = /* GraphQL */ `mutation CreateList(
  $input: CreateListInput!
  $condition: ModelListConditionInput
) {
  createList(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateListMutationVariables,
  APITypes.CreateListMutation
>;
export const updateList = /* GraphQL */ `mutation UpdateList(
  $input: UpdateListInput!
  $condition: ModelListConditionInput
) {
  updateList(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateListMutationVariables,
  APITypes.UpdateListMutation
>;
export const deleteList = /* GraphQL */ `mutation DeleteList(
  $input: DeleteListInput!
  $condition: ModelListConditionInput
) {
  deleteList(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteListMutationVariables,
  APITypes.DeleteListMutation
>;
export const createBoard = /* GraphQL */ `mutation CreateBoard(
  $input: CreateBoardInput!
  $condition: ModelBoardConditionInput
) {
  createBoard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBoardMutationVariables,
  APITypes.CreateBoardMutation
>;
export const updateBoard = /* GraphQL */ `mutation UpdateBoard(
  $input: UpdateBoardInput!
  $condition: ModelBoardConditionInput
) {
  updateBoard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBoardMutationVariables,
  APITypes.UpdateBoardMutation
>;
export const deleteBoard = /* GraphQL */ `mutation DeleteBoard(
  $input: DeleteBoardInput!
  $condition: ModelBoardConditionInput
) {
  deleteBoard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBoardMutationVariables,
  APITypes.DeleteBoardMutation
>;
