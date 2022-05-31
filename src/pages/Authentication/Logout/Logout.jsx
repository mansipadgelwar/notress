import "../../Athentication/authentication.css";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="authentication-page">
      <div className="logout-content">
        <h2 className="h2">Logged Out</h2>
        <Link to="/login" className="btn btn-cta btn-link">
          Sign in Again
        </Link>
      </div>
    </div>
  );
};

export { Logout };
