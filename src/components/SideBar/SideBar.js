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
              <Link to="/">
                <li className="notes-side-links">
                  <span className="material-icons">home</span>
                  <div>Home</div>
                </li>
              </Link>
              <Link to="/label">
                <li className="notes-side-links">
                  <span className="material-icons">label</span>
                  <div>Labels</div>
                </li>
              </Link>
              <Link to="/archive">
                <li className="notes-side-links">
                  <span className="material-icons">archive</span>
                  <div>Archive</div>
                </li>
              </Link>
              <Link to="/trash">
                <li className="notes-side-links">
                  <span className="material-icons">delete</span>
                  <div>Trash</div>
                </li>
              </Link>
              <Link to="/">
                <li className="notes-side-links">
                  <span className="material-icons">account_circle</span>
                  <div>Profile</div>
                </li>
              </Link>
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
