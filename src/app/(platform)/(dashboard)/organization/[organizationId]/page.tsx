import {
  createBoardAction,
  queryBoardsAction,
} from "@/app/actions/boardAction";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Board } from "./boards";

const OrganizationIdPage = async () => {
  const boards = await queryBoardsAction();

  return (
    <div>
      <form action={createBoardAction}>
        <input
          id="name"
          name="name"
          required
          placeholder="enter"
          className="border-black border p-1"
        />
        <Button type="submit">Submit</Button>
      </form>
      <div className="space-y-2">
        {boards.map((board) => (
          <Board key={board.id} name={board.name} id={board.id} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
