"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList, useUser } from "@clerk/nextjs";
import { ChevronLeft, Plus } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";
import { Organization, WorkspaceNavItem } from "./workspaceNavItem";
import { User, UserNavItem } from "./userNavItem";
import { useParams } from "next/navigation";

interface SidebarProps {
  storageKey?: string;
  handleHideSideBar?: () => void;
}

export const Sidebar = ({
  storageKey = "t-sidebar-state",
  handleHideSideBar,
}: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );
  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();

  const { user } = useUser();
  const { organizationId } = useParams();

  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpanded((curr) => ({ ...curr, [id]: !expanded[id] }));
  };

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <>
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-10 w-[50%]" />
          <Skeleton className="h-10 w-10" />
        </div>
        <div className="space-y-2">
          <WorkspaceNavItem.Skeleton />
          <WorkspaceNavItem.Skeleton />
          <WorkspaceNavItem.Skeleton />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="text-right mb-3">
        <Button className="p-2" variant="ghost" onClick={handleHideSideBar}>
          <ChevronLeft />
        </Button>
      </div>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspaces</span>
        <Button
          asChild
          type="button"
          size="icon"
          variant="ghost"
          className="ml-auto"
        >
          <Link href={"/select-org"}>
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <WorkspaceNavItem
            key={organization.id}
            isActive={activeOrganization?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}

        {user && (
          <UserNavItem
            key={user.id}
            isActive={organizationId === user.id}
            isExpanded={expanded[user.id]}
            user={
              {
                name: user.fullName,
                id: user.id,
                imageUrl: user.imageUrl,
              } as User
            }
            onExpand={onExpand}
          />
        )}
      </Accordion>
    </>
  );
};
