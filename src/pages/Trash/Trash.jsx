import { NotesMenuBar, SearchBar, SideBar } from "../../components";
import "../../pages/pages.css";

const Trash = () => {
  return (
    <div className="library-home-page">
      <div className="library-home-sidebar">
        <SideBar />
      </div>

      <div className="main-content-page">
        <div className="hero-img">
          <div>
            <SearchBar />
          </div>

          <div className="section-breaker h4 text-bold">
            <div>TRASH</div>
            <button className="btn-icon">
              <span className="material-icons">delete</span>
            </button>
          </div>

          <div className="notes-container">
            <div className="notes-title-container">
              <div className="h4 text-bold">Title of the note</div>
              <div>
                <span className="material-icons">push_pin</span>
              </div>
            </div>
            <div className="notes-body"></div>
            <div className="notes-label-type text-bold h5">LABEL 1</div>
            <div className="notes-menu">
              <div className="notes-creation-date">Created on 26/10/2021</div>
              <NotesMenuBar />
            </div>
          </div>

          <div className="notes-container">
            <div className="notes-title-container">
              <div className="h4 text-bold">Title of the note</div>
              <div>
                <span className="material-icons">push_pin</span>
              </div>
            </div>
            <div className="notes-body"></div>
            <div className="notes-label-type text-bold h5">LABEL 1</div>
            <div className="notes-menu">
              <div className="notes-creation-date">Created on 26/10/2021</div>
              <NotesMenuBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Trash };
