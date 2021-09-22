import React, { useState, useContext } from "react";
const ContextState = React.createContext(["", () => {}]);
export const useSimple = () => useContext(ContextState)
const ContextProvider = ({ initialState, children }) => <ContextState.Provider value={useState(initialState)}>{children}</ContextState.Provider>
export default ContextProvider;
