import React, { useState, useContext } from "react";
export const ContextState = React.createContext(["", () => {}]);
export const useSimple = () => {
  return useContext(ContextState);
};
const ContextProvider = ({ initialState, children }) => {
  const [state, setState] = useState(initialState);
  return (
    <ContextState.Provider value={[state, setState]}>
      {children}
    </ContextState.Provider>
  );
};
export default ContextProvider;
