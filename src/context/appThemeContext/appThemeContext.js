import { createContext, useContext, useState } from "react";

const appTheme = { theme: "light" };

const AppThemeContext = createContext(appTheme);

const AppThemeProvider = ({ children }) => {
  const foundTheme = localStorage.getItem("app-theme");
  const [theme, setTheme] = useState(foundTheme || "light");
  return (
    <AppThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};

const useAppTheme = () => useContext(AppThemeContext);

export { useAppTheme, AppThemeProvider };
