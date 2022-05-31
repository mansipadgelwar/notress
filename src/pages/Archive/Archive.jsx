import { NotesMenuBar, SideBar } from "../../components";
import WysiwygEditor from "../../components/editor/WysiwygEditor";

const Archive = () => {
  return (
    <div className="library-home-page">
      <div className="library-home-sidebar">
        <SideBar />
      </div>

      <div className="main-content-page">
        <div className="hero-img">
          <div className="hero-img-overlay">
            <div className="input-icon icons-left icons-right">
              <span className="material-icons">search</span>
              <input
                className="input"
                type="text"
                id="search-bar"
                name="search-bar"
              />
              <span class="material-icons">tune</span>
            </div>
            <div className="notes-container">
              <div className="notes-title-container">
                <div className="h4 text-bold">Title of the note</div>
                <div>
                  <span className="material-icons">push_pin</span>
                </div>
              </div>
              <div className="notes-body">
                <WysiwygEditor />
                If body of the note is longer than the size of the card then the
                card will increase its height
              </div>
              <div className="notes-label-type text-bold h5">LABEL 1</div>
              <div className="notes-menu">
                <div className="notes-creation-date">Created on 26/10/2021</div>
                <NotesMenuBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Archive };
