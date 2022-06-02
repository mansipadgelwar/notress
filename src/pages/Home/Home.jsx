import { NotesMenuBar, SearchBar, SideBar } from "../../components";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { useServices } from "../../context/serviceContext/serviceContext";

const Home = () => {
  const { note, setNote } = useServices();

  const reference = useRef(null);

  const config = {
    readonly: false,
  };

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
          <div className="notes-container">
            <div className="notes-editor-conatiner">
              <div className="notes-title-container">
                <div className="h4 text-bold">
                  <input
                    className="search-bar-input"
                    id="note-title"
                    type="text"
                    placeholder="Title of the note"
                    autoComplete="off"
                    value={note.title}
                    onChange={(e) =>
                      setNote((prev) => ({ ...prev, title: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <span className="material-icons">push_pin</span>
                </div>
              </div>
              <div className="notes-body">
                <JoditEditor
                  ref={reference}
                  value={note.body}
                  config={config}
                  tabIndex={1}
                  onBlur={(value) =>
                    setNote((prev) => ({ ...prev, body: value }))
                  }
                />
              </div>
              <div className="notes-label-type text-bold h5">LABEL 1</div>
            </div>
            <div className="notes-menu">
              <div className="notes-creation-date">Created on 26/10/2021</div>
              <NotesMenuBar />
            </div>
          </div>

          <div className="section-breaker h4 text-bold">
            <div>PINNED</div>
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

          <div className="section-breaker h4 text-bold">
            <div>OTHERS</div>
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

export { Home };
