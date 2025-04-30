"use client";

import { useUser } from "@clerk/nextjs";
import { createContext, useContext } from "react";

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const { user } = useUser();

  const value = {
    user,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
