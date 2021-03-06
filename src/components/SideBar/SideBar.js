import "../SideBar/SideBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useServices } from "../../context";
import { useToast } from "../../custom-hooks/useToast";

const SideBar = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { showEditorModal, setShowEditorModal } = useServices();

  const logoutUser = () => {
    showToast("Logout Successful", "success");
    authDispatch({ type: "RESET_AUTH" });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("app-theme");
    navigate("/logout");
  };

  return (
    <div className="library-home-sidebar">
      <aside className="notes-side-bar">
        <div className="notes-sidebar-menu">
          <div className="menu-options">
            <ul className="notes-sidebar-list">
              <Link to="/home">
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
              <Link to="/profile">
                <li className="notes-side-links">
                  <span className="material-icons">account_circle</span>
                  <div>Profile</div>
                </li>
              </Link>
              <li className="notes-side-links">
                <button
                  className="btn btn-cta mobile-hide"
                  onClick={() => setShowEditorModal(!showEditorModal)}
                >
                  <span>
                    {showEditorModal ? "Close Editor" : "Create New Note"}
                  </span>
                </button>
                <button
                  className="btn btn-cta desktop-hide"
                  onClick={() => setShowEditorModal(!showEditorModal)}
                >
                  <span className="material-icons add-notes">add</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="profile-details">
            <ul className="notes-sidebar-list">
              <li className="notes-side-links">
                <Link to="/profile">
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
