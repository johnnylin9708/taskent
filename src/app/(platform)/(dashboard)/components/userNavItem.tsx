"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Activity, Calendar, CreditCard, Layout, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export type User = {
  id: string;
  imageUrl: string;
  name: string;
};

interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  user: User;
  onExpand: (id: string) => void;
}

export const UserNavItem = ({
  isExpanded,
  isActive,
  user,
  onExpand,
}: NavItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      label: "Cards",
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/workspace/${user.id}/personalCards`,
    },
    {
      label: "Your Tasks",
      icon: <Calendar className="h-4 w-4 mr-2" />,
      href: `/workspace/${user.id}/personalCalendar`,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <>
      <AccordionItem value={user.id} className="border-none">
        <AccordionTrigger
          onClick={() => onExpand(user.id)}
          className={cn(
            "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
            isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
          )}
        >
          <div className="flex items-center gap-x-2">
            <div className="w-7 h-7 relative">
              <Image
                fill
                src={user.imageUrl}
                alt="Organization"
                className="rounded-sm object-cover"
              />
            </div>
            <span className="font-medium text-sm">{user.name}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-1 text-neutral-700">
          {routes.map((route) => (
            <Button
              key={route.href}
              size="sm"
              onClick={() => onClick(route.href)}
              className={cn(
                "w-full font-normal justify-start pl-10 mb-1",
                pathname === route.href && "bg-sky-500/10 text-sky-700"
              )}
              variant="ghost"
            >
              {route.icon} {route.label}
            </Button>
          ))}
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

UserNavItem.Skeleton = function SkeletonNavItem() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
};
