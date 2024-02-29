/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCardInput = {
  id?: string | null,
  name: string,
  order?: number | null,
  description?: string | null,
  listID: string,
  _version?: number | null,
};

export type ModelCardConditionInput = {
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  description?: ModelStringInput | null,
  listID?: ModelIDInput | null,
  and?: Array< ModelCardConditionInput | null > | null,
  or?: Array< ModelCardConditionInput | null > | null,
  not?: ModelCardConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Card = {
  __typename: "Card",
  id: string,
  name: string,
  order?: number | null,
  description?: string | null,
  listID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCardInput = {
  id: string,
  name?: string | null,
  order?: number | null,
  description?: string | null,
  listID?: string | null,
  _version?: number | null,
};

export type DeleteCardInput = {
  id: string,
  _version?: number | null,
};

export type CreateListInput = {
  id?: string | null,
  name: string,
  order?: number | null,
  boardID: string,
  _version?: number | null,
};

export type ModelListConditionInput = {
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  boardID?: ModelIDInput | null,
  and?: Array< ModelListConditionInput | null > | null,
  or?: Array< ModelListConditionInput | null > | null,
  not?: ModelListConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type List = {
  __typename: "List",
  id: string,
  name: string,
  order?: number | null,
  boardID: string,
  Cards?: ModelCardConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCardConnection = {
  __typename: "ModelCardConnection",
  items:  Array<Card | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateListInput = {
  id: string,
  name?: string | null,
  order?: number | null,
  boardID?: string | null,
  _version?: number | null,
};

export type DeleteListInput = {
  id: string,
  _version?: number | null,
};

export type CreateBoardInput = {
  id?: string | null,
  orgId?: string | null,
  name: string,
  imageId?: string | null,
  imageThumbUrl?: string | null,
  imageFullUrl?: string | null,
  imageUserName?: string | null,
  imageLinkHTML?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type ModelBoardConditionInput = {
  orgId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  imageId?: ModelStringInput | null,
  imageThumbUrl?: ModelStringInput | null,
  imageFullUrl?: ModelStringInput | null,
  imageUserName?: ModelStringInput | null,
  imageLinkHTML?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBoardConditionInput | null > | null,
  or?: Array< ModelBoardConditionInput | null > | null,
  not?: ModelBoardConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Board = {
  __typename: "Board",
  id: string,
  orgId?: string | null,
  name: string,
  imageId?: string | null,
  imageThumbUrl?: string | null,
  imageFullUrl?: string | null,
  imageUserName?: string | null,
  imageLinkHTML?: string | null,
  description?: string | null,
  Lists?: ModelListConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelListConnection = {
  __typename: "ModelListConnection",
  items:  Array<List | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateBoardInput = {
  id: string,
  orgId?: string | null,
  name?: string | null,
  imageId?: string | null,
  imageThumbUrl?: string | null,
  imageFullUrl?: string | null,
  imageUserName?: string | null,
  imageLinkHTML?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteBoardInput = {
  id: string,
  _version?: number | null,
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  description?: ModelStringInput | null,
  listID?: ModelIDInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelListFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  boardID?: ModelIDInput | null,
  and?: Array< ModelListFilterInput | null > | null,
  or?: Array< ModelListFilterInput | null > | null,
  not?: ModelListFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelBoardFilterInput = {
  id?: ModelIDInput | null,
  orgId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  imageId?: ModelStringInput | null,
  imageThumbUrl?: ModelStringInput | null,
  imageFullUrl?: ModelStringInput | null,
  imageUserName?: ModelStringInput | null,
  imageLinkHTML?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBoardFilterInput | null > | null,
  or?: Array< ModelBoardFilterInput | null > | null,
  not?: ModelBoardFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelBoardConnection = {
  __typename: "ModelBoardConnection",
  items:  Array<Board | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionCardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  order?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  listID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCardFilterInput | null > | null,
  or?: Array< ModelSubscriptionCardFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionListFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  order?: ModelSubscriptionIntInput | null,
  boardID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionListFilterInput | null > | null,
  or?: Array< ModelSubscriptionListFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBoardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  orgId?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  imageId?: ModelSubscriptionStringInput | null,
  imageThumbUrl?: ModelSubscriptionStringInput | null,
  imageFullUrl?: ModelSubscriptionStringInput | null,
  imageUserName?: ModelSubscriptionStringInput | null,
  imageLinkHTML?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBoardFilterInput | null > | null,
  or?: Array< ModelSubscriptionBoardFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type CreateCardMutation = {
  createCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    order?: number | null,
    description?: string | null,
    listID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type UpdateCardMutation = {
  updateCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    order?: number | null,
    description?: string | null,
    listID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
  condition?: ModelCardConditionInput | null,
};

export type DeleteCardMutation = {
  deleteCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    order?: number | null,
    description?: string | null,
    listID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateListMutationVariables = {
  input: CreateListInput,
  condition?: ModelListConditionInput | null,
};

export type CreateListMutation = {
  createList?:  {
    __typename: "List",
    id: string,
    name: string,
    order?: number | null,
    boardID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateListMutationVariables = {
  input: UpdateListInput,
  condition?: ModelListConditionInput | null,
};

export type UpdateListMutation = {
  updateList?:  {
    __typename: "List",
    id: string,
    name: string,
    order?: number | null,
    boardID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteListMutationVariables = {
  input: DeleteListInput,
  condition?: ModelListConditionInput | null,
};

export type DeleteListMutation = {
  deleteList?:  {
    __typename: "List",
    id: string,
    name: string,
    order?: number | null,
    boardID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBoardMutationVariables = {
  input: CreateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type CreateBoardMutation = {
  createBoard?:  {
    __typename: "Board",
    id: string,
    orgId?: string | null,
    name: string,
    imageId?: string | null,
    imageThumbUrl?: string | null,
    imageFullUrl?: string | null,
    imageUserName?: string | null,
    imageLinkHTML?: string | null,
    description?: string | null,
    Lists?:  {
      __typename: "ModelListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBoardMutationVariables = {
  input: UpdateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type UpdateBoardMutation = {
  updateBoard?:  {
    __typename: "Board",
    id: string,
    orgId?: string | null,
    name: string,
    imageId?: string | null,
    imageThumbUrl?: string | null,
    imageFullUrl?: string | null,
    imageUserName?: string | null,
    imageLinkHTML?: string | null,
    description?: string | null,
    Lists?:  {
      __typename: "ModelListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBoardMutationVariables = {
  input: DeleteBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type DeleteBoardMutation = {
  deleteBoard?:  {
    __typename: "Board",
    id: string,
    orgId?: string | null,
    name: string,
    imageId?: string | null,
    imageThumbUrl?: string | null,
    imageFullUrl?: string | null,
    imageUserName?: string | null,
    imageLinkHTML?: string | null,
    description?: string | null,
    Lists?:  {
      __typename: "ModelListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    order?: number | null,
    description?: string | null,
    listID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards?:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      name: string,
      order?: number | null,
      description?: string | null,
      listID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCardsQuery = {
  syncCards?:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      name: string,
      order?: number | null,
      description?: string | null,
      listID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CardsByListIDQueryVariables = {
  listID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CardsByListIDQuery = {
  cardsByListID?:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      name: string,
      order?: number | null,
      description?: string | null,
      listID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetListQueryVariables = {
  id: string,
};

export type GetListQuery = {
  getList?:  {
    __typename: "List",
    id: string,
    name: string,
    order?: number | null,
    boardID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListListsQueryVariables = {
  filter?: ModelListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListsQuery = {
  listLists?:  {
    __typename: "ModelListConnection",
    items:  Array< {
      __typename: "List",
      id: string,
      name: string,
      order?: number | null,
      boardID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncListsQueryVariables = {
  filter?: ModelListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncListsQuery = {
  syncLists?:  {
    __typename: "ModelListConnection",
    items:  Array< {
      __typename: "List",
      id: string,
      name: string,
      order?: number | null,
      boardID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListsByBoardIDQueryVariables = {
  boardID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListsByBoardIDQuery = {
  listsByBoardID?:  {
    __typename: "ModelListConnection",
    items:  Array< {
      __typename: "List",
      id: string,
      name: string,
      order?: number | null,
      boardID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBoardQueryVariables = {
  id: string,
};

export type GetBoardQuery = {
  getBoard?:  {
    __typename: "Board",
    id: string,
    orgId?: string | null,
    name: string,
    imageId?: string | null,
    imageThumbUrl?: string | null,
    imageFullUrl?: string | null,
    imageUserName?: string | null,
    imageLinkHTML?: string | null,
    description?: string | null,
    Lists?:  {
      __typename: "ModelListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBoardsQueryVariables = {
  filter?: ModelBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardsQuery = {
  listBoards?:  {
    __typename: "ModelBoardConnection",
    items:  Array< {
      __typename: "Board",
      id: string,
      orgId?: string | null,
      name: string,
      imageId?: string | null,
      imageThumbUrl?: string | null,
      imageFullUrl?: string | null,
      imageUserName?: string | null,
      imageLinkHTML?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBoardsQueryVariables = {
  filter?: ModelBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBoardsQuery = {
  syncBoards?:  {
    __typename: "ModelBoardConnection",
    items:  Array< {
      __typename: "Board",
      id: string,
      orgId?: string | null,
      name: string,
      imageId?: string | null,
      imageThumbUrl?: string | null,
      imageFullUrl?: string | null,
      imageUserName?: string | null,
      imageLinkHTML?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnCreateCardSubscription = {
  onCreateCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    order?: number | null,
    description?: string | null,
    listID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    order?: number | null,
    description?: string | null,
    listID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    order?: number | null,
    description?: string | null,
    listID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateListSubscriptionVariables = {
  filter?: ModelSubscriptionListFilterInput | null,
};

export type OnCreateListSubscription = {
  onCreateList?:  {
    __typename: "List",
    id: string,
    name: string,
    order?: number | null,
    boardID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateListSubscriptionVariables = {
  filter?: ModelSubscriptionListFilterInput | null,
};

export type OnUpdateListSubscription = {
  onUpdateList?:  {
    __typename: "List",
    id: string,
    name: string,
    order?: number | null,
    boardID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteListSubscriptionVariables = {
  filter?: ModelSubscriptionListFilterInput | null,
};

export type OnDeleteListSubscription = {
  onDeleteList?:  {
    __typename: "List",
    id: string,
    name: string,
    order?: number | null,
    boardID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBoardSubscriptionVariables = {
  filter?: ModelSubscriptionBoardFilterInput | null,
};

export type OnCreateBoardSubscription = {
  onCreateBoard?:  {
    __typename: "Board",
    id: string,
    orgId?: string | null,
    name: string,
    imageId?: string | null,
    imageThumbUrl?: string | null,
    imageFullUrl?: string | null,
    imageUserName?: string | null,
    imageLinkHTML?: string | null,
    description?: string | null,
    Lists?:  {
      __typename: "ModelListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBoardSubscriptionVariables = {
  filter?: ModelSubscriptionBoardFilterInput | null,
};

export type OnUpdateBoardSubscription = {
  onUpdateBoard?:  {
    __typename: "Board",
    id: string,
    orgId?: string | null,
    name: string,
    imageId?: string | null,
    imageThumbUrl?: string | null,
    imageFullUrl?: string | null,
    imageUserName?: string | null,
    imageLinkHTML?: string | null,
    description?: string | null,
    Lists?:  {
      __typename: "ModelListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBoardSubscriptionVariables = {
  filter?: ModelSubscriptionBoardFilterInput | null,
};

export type OnDeleteBoardSubscription = {
  onDeleteBoard?:  {
    __typename: "Board",
    id: string,
    orgId?: string | null,
    name: string,
    imageId?: string | null,
    imageThumbUrl?: string | null,
    imageFullUrl?: string | null,
    imageUserName?: string | null,
    imageLinkHTML?: string | null,
    description?: string | null,
    Lists?:  {
      __typename: "ModelListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
