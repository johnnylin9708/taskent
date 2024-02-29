import { Card, List } from "@/API";

export type ListWithCards = List;

export type CardWithList = Card & { list: List };
