import { Link } from "react-router-dom";
import "./NotFound.css";
import { useEffect } from "react";
import { useAppTheme } from "../../context";

const NotFound = () => {
  const { theme } = useAppTheme();

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "")
      : (document.body.style.backgroundColor = "var(--grey)");
  }, [theme]);

  return (
    <div className="page-container">
      <h1 className="page-heading">404</h1>
      <h5 className="page-subheading">This page is missing</h5>
      <Link to="/home" className="btn btn-link btn-secondary-outline">
        Go back to home
      </Link>
    </div>
  );
};

export { NotFound };
