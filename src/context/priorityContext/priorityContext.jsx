import { createContext, useContext, useState } from "react";

const priority = "";

const PriorityContext = createContext(priority);

const PriorityProvider = ({ children }) => {
  const [priority, setPriority] = useState("High");
  return (
    <PriorityContext.Provider value={{ priority, setPriority }}>
      {children}
    </PriorityContext.Provider>
  );
};

const usePriority = () => useContext(PriorityContext);

export { usePriority, PriorityProvider };
