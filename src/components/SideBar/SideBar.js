import "../SideBar/SideBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext/authenticationContext";
import { useToast } from "../../custom-hooks/useToast";

const SideBar = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const logoutUser = () => {
    showToast("Logout Successful", "success");
    authDispatch({ type: "RESET_AUTH" });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/logout");
  };

  return (
    <div className="library-home-sidebar">
      <aside className="notes-side-bar">
        <div className="notes-sidebar-menu">
          <div className="menu-options">
            <ul className="notes-sidebar-list">
              <li className="notes-side-links">
                <Link to="/">
                  <span className="material-icons">home</span>
                </Link>
                <div>Home</div>
              </li>
              <li className="notes-side-links">
                <Link to="/label">
                  <span className="material-icons">label</span>
                </Link>
                <div>Labels</div>
              </li>
              <li className="notes-side-links">
                <Link to="/archive">
                  <span className="material-icons">archive</span>
                </Link>
                <div>Archive</div>
              </li>
              <li className="notes-side-links">
                <Link to="/trash">
                  <span className="material-icons">delete</span>
                </Link>
                <div>Trash</div>
              </li>

              <li className="notes-side-links">
                <Link to="/">
                  <span className="material-icons">account_circle</span>
                </Link>
                <div>Profile</div>
              </li>
              <li className="notes-side-links">
                <button className="btn btn-cta">Create New Note</button>
              </li>
            </ul>
          </div>

          <div className="profile-details">
            <ul className="notes-sidebar-list">
              <li className="notes-side-links">
                <Link to="/">
                  <img
                    src="https://picsum.photos/200"
                    alt="avatar"
                    className="avatar avatar-sm"
                  />
                </Link>
                <div>Mansi Padgelwar</div>
                <button className="btn">
                  <span className="material-icons" onClick={logoutUser}>
                    logout
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export { SideBar };
