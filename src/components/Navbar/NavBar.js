import { useEffect } from "react";
import { useAppTheme } from "../../context/appThemeContext/appThemeContext";
import "../Navbar/NavBar.css";

const NavBar = () => {
  const { theme, setTheme } = useAppTheme();

  const toggleAppTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return (
    <div className="simple-header">
      <header className="header">
        <div className="header-items">
          <a href="/home" className="nav-brand">
            No<span className="inverted-text">Tress</span>
          </a>
          <button onClick={toggleAppTheme} className="btn btn-theme">
            <span className="material-icons">
              {theme === "light" ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </div>
      </header>
    </div>
  );
};

export { NavBar };
