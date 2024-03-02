"use client";
import { Board } from "@/API";
import { BoardTitleForm } from "./boardTitleForm";
import { BoardOptions } from "./boardOptions";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface BoardNavbarProps {
  data: Board;
}

export const BoardNavbar = ({ data }: BoardNavbarProps) => {
  const router = useRouter();
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white">
      <Button
        className="h-auto w-auto p-2"
        variant="transparent"
        onClick={() => {
          router.back();
        }}
      >
        <ChevronLeft />
      </Button>
      <BoardTitleForm data={data} />
      <div className="ml-auto">
        <BoardOptions id={data.id} _version={data._version} />
      </div>
    </div>
  );
};
