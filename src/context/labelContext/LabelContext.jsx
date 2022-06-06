import { createContext, useContext, useState } from "react";

const label = "";

const LabelContext = createContext(label);

const LabelProvider = ({ children }) => {
  const [displayLabel, setDisplayLabel] = useState([]);
  const [data, setData] = useState([]);
  const [label, setLabels] = useState("");
  return (
    <LabelContext.Provider
      value={{ displayLabel, setDisplayLabel, data, setData, label, setLabels }}
    >
      {children}
    </LabelContext.Provider>
  );
};

const useLabel = () => useContext(LabelContext);

export { useLabel, LabelProvider };
