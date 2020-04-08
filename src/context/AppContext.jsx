import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
