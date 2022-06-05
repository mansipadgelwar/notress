import { createContext, useContext, useState } from "react";

const label = "";

const LabelContext = createContext(label);

const LabelProvider = ({ children }) => {
  const [displayLabel, setDisplayLabel] = useState([]);
  return (
    <LabelContext.Provider value={{ displayLabel, setDisplayLabel }}>
      {children}
    </LabelContext.Provider>
  );
};

const useLabel = () => useContext(LabelContext);

export { useLabel, LabelProvider };
