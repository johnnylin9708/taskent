// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const EntityType = {
  "BOARD": "BOARD",
  "LIST": "LIST",
  "CARD": "CARD"
};

const Action = {
  "CREATE": "CREATE",
  "UPDATE": "UPDATE",
  "DELETE": "DELETE"
};

const { Limit, AuditLog, Card, List, Board } = initSchema(schema);

export {
  Limit,
  AuditLog,
  Card,
  List,
  Board,
  EntityType,
  Action
};