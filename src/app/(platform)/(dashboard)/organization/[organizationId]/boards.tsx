import { deleteBoardByIdAction } from "@/app/actions/boardAction";
import { Button } from "@/components/ui/button";

interface BoardProps {
  name: string;
  id: string;
}

export const Board = ({ name, id }: BoardProps) => {
  const deleteBoardById = deleteBoardByIdAction.bind(null, id);
  return (
    <form action={deleteBoardById} className="flex items-center gap-x-2">
      <p>Board name: {name}</p>
      <Button type="submit" variant="destructive" size="sm">
        Delete
      </Button>
    </form>
  );
};
