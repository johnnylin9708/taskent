import { Board } from "@/API";
import { auth } from "@clerk/nextjs";
import { BoardTitleForm } from "./boardTitleForm";
import { BoardOptions } from "./boardOptions";

interface BoardNavbarProps {
  data: Board;
}

export const BoardNavbar = ({ data }: BoardNavbarProps) => {
  const { orgId } = auth();
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white">
      <BoardTitleForm data={data} />
      <div className="ml-auto">
        <BoardOptions id={data.id} _version={data._version} />
      </div>
    </div>
  );
};