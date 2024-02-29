import { Card, List } from "@/API";

export type ListWithCards = List & { cards: Card[] };

export type CardWithList = Card & { list: List };
