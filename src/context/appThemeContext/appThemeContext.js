import { createContext, useContext, useState } from "react";

const appTheme = { theme: "light" };

const AppThemeContext = createContext(appTheme);

const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <AppThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};

const useAppTheme = () => useContext(AppThemeContext);

export { useAppTheme, AppThemeProvider };
