import { createContext, useContext, useState } from "react";

const NoteThemeContext = createContext(null);

const NoteThemeProvider = ({ children }) => {
  const [backColor, setBackgroundColor] = useState("white");
  return (
    <NoteThemeContext.Provider value={{ backColor, setBackgroundColor }}>
      {children}
    </NoteThemeContext.Provider>
  );
};

const useTheme = () => useContext(NoteThemeContext);

export { useTheme, NoteThemeProvider };
