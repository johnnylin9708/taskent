"use client";
import { ReactNode, useState } from "react";
import GlobalContext from "./globalContext";
import dayjs from "dayjs";

interface ContextWrapperProps {
  children: ReactNode;
}

export const ContextWrapper = (props: ContextWrapperProps) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());

  return (
    <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
