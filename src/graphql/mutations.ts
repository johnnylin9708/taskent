/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

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
