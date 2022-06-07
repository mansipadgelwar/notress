import { createContext, useContext, useState } from "react";

const pin = "";

const PinContext = createContext(pin);

const PinProvider = ({ children }) => {
  const [pinnedNote, setPinnedNote] = useState(false);
  return (
    <PinContext.Provider value={{ pinnedNote, setPinnedNote }}>
      {children}
    </PinContext.Provider>
  );
};

const usePin = () => useContext(PinContext);

export { usePin, PinProvider };
