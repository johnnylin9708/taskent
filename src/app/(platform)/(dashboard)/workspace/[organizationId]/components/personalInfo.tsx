"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import Image from "next/image";

interface InfoProps {
  isPro: boolean | undefined;
}

export const PersonalInfo = ({ isPro }: InfoProps) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <PersonalInfo.Skeleton />;
  }
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Image
          fill
          src={user?.imageUrl!}
          alt="Organozatopn"
          className="rounded-md object-cover"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-xl">{user?.fullName}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <CreditCard className="h-4 w-4 mr-1" />
          {isPro ? "Pro" : "Free"}
        </div>
      </div>
    </div>
  );
};

PersonalInfo.Skeleton = function InfoSkeleton() {
  return (
    <div className="flex item-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Skeleton className="w-full h-full absolute" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-4 mr-2" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  );
};
