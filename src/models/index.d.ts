import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Card, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly order?: number | null;
  readonly description?: string | null;
  readonly listID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Card, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly order?: number | null;
  readonly description?: string | null;
  readonly listID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Card = LazyLoading extends LazyLoadingDisabled ? EagerCard : LazyCard

export declare const Card: (new (init: ModelInit<Card>) => Card) & {
  copyOf(source: Card, mutator: (draft: MutableModel<Card>) => MutableModel<Card> | void): Card;
}

type EagerList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<List, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly order?: number | null;
  readonly boardID: string;
  readonly Cards?: (Card | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<List, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly order?: number | null;
  readonly boardID: string;
  readonly Cards: AsyncCollection<Card>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type List = LazyLoading extends LazyLoadingDisabled ? EagerList : LazyList

export declare const List: (new (init: ModelInit<List>) => List) & {
  copyOf(source: List, mutator: (draft: MutableModel<List>) => MutableModel<List> | void): List;
}

type EagerBoard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Board, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orgId?: string | null;
  readonly name: string;
  readonly imageId?: string | null;
  readonly imageThumbUrl?: string | null;
  readonly imageFullUrl?: string | null;
  readonly imageUserName?: string | null;
  readonly imageLinkHTML?: string | null;
  readonly description?: string | null;
  readonly Lists?: (List | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBoard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Board, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orgId?: string | null;
  readonly name: string;
  readonly imageId?: string | null;
  readonly imageThumbUrl?: string | null;
  readonly imageFullUrl?: string | null;
  readonly imageUserName?: string | null;
  readonly imageLinkHTML?: string | null;
  readonly description?: string | null;
  readonly Lists: AsyncCollection<List>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Board = LazyLoading extends LazyLoadingDisabled ? EagerBoard : LazyBoard

export declare const Board: (new (init: ModelInit<Board>) => Board) & {
  copyOf(source: Board, mutator: (draft: MutableModel<Board>) => MutableModel<Board> | void): Board;
}