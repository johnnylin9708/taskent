import { Action, EntityType } from "@/API";
import { auth, currentUser } from "@clerk/nextjs";
import { generateClient } from "aws-amplify/api";
import { createAuditLog as createAuditLogMutation } from "@/graphql/mutations";

interface Props {
  entityId: string;
  entityType: EntityType;
  entityName: string;
  action: Action;
}

export const createAuditLog = async (props: Props) => {
  try {
    const client = generateClient();
    const { orgId } = auth();
    const user = await currentUser();

    if (!user || !orgId) {
      throw new Error("User not found!");
    }

    const { entityId, entityType, entityName, action } = props;
    await client.graphql({
      query: createAuditLogMutation,
      variables: {
        input: {
          orgId,
          entityId,
          entityType,
          entityName,
          action,
          userId: user.id,
          userImage: user?.imageUrl,
          userName: user.firstName || "" + " " + user.lastName || "",
        },
      },
    });
  } catch (error) {
    console.log("[AUDIT_LOG_ERROR", error);
  }
};
