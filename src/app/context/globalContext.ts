import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (state: number) => {},
});

export default GlobalContext;
