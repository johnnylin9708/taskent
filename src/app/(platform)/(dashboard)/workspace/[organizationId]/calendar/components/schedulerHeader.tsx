import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import GlobalContext from "../../../../../../context/globalContext";
import dayjs from "dayjs";

export const SchedulerHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleReset = () => {
    setMonthIndex(dayjs().month());
  };
  return (
    <header className="py-2 flex items-center">
      {/* <Image
        width="50"
        height="50"
        src={"/logo.png"}
        alt="calendar"
        className="mr-2 w-12 h-12"
      /> */}
      <p className="mr-5 text-xl text-gray-500 font-bold">Task Calendar</p>
      <Button
        variant="white"
        className="border rounded py-2 px-4 mr-5"
        onClick={handleReset}
      >
        Today
      </Button>
      <button
        type="button"
        className="material-icons-outlined cursor-pointer text-gray-600"
        onClick={handlePrevMonth}
      >
        <span>
          <ChevronLeft />
        </span>
      </button>
      <Button
        variant="white"
        className="material-icons-outlined cursor-pointer text-gray-600"
        onClick={handleNextMonth}
      >
        <span>
          <ChevronRight />
        </span>
      </Button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};
