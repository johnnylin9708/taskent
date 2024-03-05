import { Action, AuditLog } from "@/API";

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityName, entityType } = log;
  switch (action) {
    case Action.CREATE:
      return ` created ${entityType?.toLocaleLowerCase()} "${entityName}"`;
    case Action.UPDATE:
      return ` updated ${entityType?.toLocaleLowerCase()} "${entityName}"`;
    case Action.DELETE:
      return ` deleted ${entityType?.toLocaleLowerCase()} "${entityName}"`;
    default:
      return ` unknown action ${entityType?.toLocaleLowerCase()} "${entityName}"`;
  }
};
