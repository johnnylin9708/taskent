import { FormBoardPopover } from "@/components/form/formBoardPopover";
import { Hint } from "@/components/hint";
import { Skeleton } from "@/components/ui/skeleton";
import { MAX_FREE_BOARDS } from "@/constants/board";
import { listBoards } from "@/graphql/queries";
import { getAvailableCount } from "@/lib/limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { generateClient } from "aws-amplify/api";
import { HelpCircle, User2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const BoardList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    return redirect("/select-org");
  }
  const client = generateClient();
  const boards = await client.graphql({
    query: listBoards,
    variables: { filter: { orgId: { eq: orgId } } },
  });

  const availableCount = (await getAvailableCount()) || 0;
  const isPro = await checkSubscription();
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards.data.listBoards.items.map((board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden"
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="relative font-semibold text-white">{board.name}</p>
          </Link>
        ))}
        <FormBoardPopover sideOffset={10} side="right">
          <div
            role="button"
            className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <p className="text-sm">Create new board</p>
            <span className="text-xs">
              {isPro
                ? "Unlimited"
                : `${MAX_FREE_BOARDS - availableCount} remaining`}
            </span>
            <Hint
              sideOffset={40}
              description={
                "Free Worksapces can have up to 5 open boards. For unlimited boards upgrad this workspace."
              }
            >
              <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
            </Hint>
          </div>
        </FormBoardPopover>
      </div>
    </div>
  );
};

BoardList.Skeleton = function SkeletomBoardList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
    </div>
  );
};
