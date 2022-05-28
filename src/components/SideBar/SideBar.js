import "../SideBar/SideBar.css";

const SideBar = () => {
  return (
    <div className="library-home-sidebar">
      <aside className="notes-side-bar">
        <div className="notes-sidebar-menu">
          <div className="menu-options">
            <ul className="notes-sidebar-list">
              <li className="notes-side-links">
                <a href="/">
                  <span className="material-icons">home</span>
                </a>
                <div>Home</div>
              </li>
              <li className="notes-side-links">
                <a href="/allplaylists">
                  <span className="material-icons">label</span>
                </a>
                <div>Labels</div>
              </li>
              <li className="notes-side-links">
                <a href="/videolist">
                  <span className="material-icons">archive</span>
                </a>
                <div>Archive</div>
              </li>
              <li className="notes-side-links">
                <a href="/watchlater">
                  <span className="material-icons">delete</span>
                </a>
                <div>Trash</div>
              </li>

              <li className="notes-side-links">
                <a href="/history">
                  <span className="material-icons">account_circle</span>
                </a>
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
                <a href="/history">
                  <img
                    src="https://picsum.photos/200"
                    alt="avatar"
                    className="avatar avatar-sm"
                  />
                </a>
                <div>Mansi Padgelwar</div>
                <a href="/history">
                  <span className="material-icons">logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export { SideBar };
