import "../SideBar/SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
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
                <Link to="/">
                  <span className="material-icons">label</span>
                </Link>
                <div>Labels</div>
              </li>
              <li className="notes-side-links">
                <Link to="/">
                  <span className="material-icons">archive</span>
                </Link>
                <div>Archive</div>
              </li>
              <li className="notes-side-links">
                <Link to="/">
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
                <Link to="/">
                  <span className="material-icons">logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export { SideBar };
