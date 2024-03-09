import React from "react";
import dayjs from "dayjs";
import { Day } from "./day";

interface SchedulerMonthProps {
  month: dayjs.Dayjs[][];
}

export const SchedulerMonth = ({ month }: SchedulerMonthProps) => {
  return (
    <div className="font-sans flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, rowIdx) => (
        <React.Fragment key={rowIdx}>
          {row.map((day, dayIdx) => (
            <Day day={day} key={dayIdx} rowIdx={rowIdx} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
