"use client";
import { useContext, useEffect, useState } from "react";
import { SchedulerHeader } from "./components/schedulerHeader";
import { SchedulerMonth } from "./components/schedulerMonth";
import { SchedulerSideBar } from "./components/schedulerSideBar";
import { getMonths } from "@/lib/utils";
import React from "react";
import GlobalContext from "../../../../../context/globalContext";
import { ContextWrapper } from "../../../../../context/contextWrapper";

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonths());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonths(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
      <div className="h-screen w-full flex flex-col">
        <SchedulerHeader />
        <div className="flex flex-1">
          <SchedulerSideBar />
          <SchedulerMonth month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalendarPage;
