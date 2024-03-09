import { ActivityItem } from "@/components/activityItem";
import { Skeleton } from "@/components/ui/skeleton";
import { listAuditLogs } from "@/graphql/queries";
import { auth } from "@clerk/nextjs";
import { generateClient } from "aws-amplify/api";
import { redirect } from "next/navigation";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";

Amplify.configure(config);
export const ActivityList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const client = generateClient();
  const auditLogsData = await client.graphql({
    query: listAuditLogs,
    variables: {
      filter: {
        orgId: { eq: orgId },
      },
    },
  });
  const auditLogs = auditLogsData.data.listAuditLogs.items;
  return (
    <ol className="space-y-4 mt-4">
      <p className="hidden last:block text-xs text-center text-muted-foreground">
        No activity found inside this organization
      </p>

      {auditLogs.map((log) => (
        <ActivityItem key={log.id} data={log} />
      ))}
    </ol>
  );
};

ActivityList.Skeleton = function ActivityListSkeleton() {
  return (
    <ol className="space-y-4 mt-4">
      <Skeleton className="w-[80%] h-14" />
      <Skeleton className="w-[50%] h-14" />
      <Skeleton className="w-[70%] h-14" />
      <Skeleton className="w-[80%] h-14" />
      <Skeleton className="w-[75%] h-14" />
    </ol>
  );
};
