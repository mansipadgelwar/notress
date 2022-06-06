import { NotesMenuBar, SearchBar, SideBar } from "../../components";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { useServices } from "../../context/serviceContext/serviceContext";
import { useTheme } from "../../context/noteThemeContext/noteThemeContext";
import { useLabel } from "../../context/labelContext/LabelContext";
import { usePriority } from "../../context/priorityContext/priorityContext";

const Home = () => {
  const { note, setNote, state } = useServices();
  const reference = useRef(null);
  const { backColor } = useTheme();
  const { displayLabel } = useLabel();
  const { priority, setPriority } = usePriority();

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
          <div
            className="notes-container"
            style={{ backgroundColor: backColor }}
          >
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
              <div class="notes-label-container">
                {displayLabel.map((label) => {
                  return (
                    <div className="notes-label-type text-bold h5">{label}</div>
                  );
                })}
              </div>
            </div>
            <div className="notes-menu">
              <div className="notes-creation-date">{`${new Date(
                new Date().getTime()
              ).toLocaleString()}`}</div>
              <div className="priority-tab">
                <select
                  name="sort-by"
                  className="dropdown"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="High">High Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="Low">Low Priority</option>
                </select>
              </div>
              <NotesMenuBar notes={state.notes} menutype={true} />
            </div>
          </div>

          {state.notes.map((item) => {
            return (
              <div
                className="notes-container"
                key={item._id}
                style={{ ...item, backgroundColor: item.bgColor }}
              >
                <div className="notes-title-container">
                  <div className="h4 text-bold">{item.title}</div>
                  <div>
                    <span className="material-icons">push_pin</span>
                  </div>
                </div>
                <div
                  className="notes-body"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
                <div class="notes-label-container">
                  {item.tags.map((label) => {
                    return (
                      <div className="notes-label-type text-bold h5">
                        {label}
                      </div>
                    );
                  })}
                </div>
                <div className="notes-menu">
                  <div className="notes-creation-date">
                    {`${new Date(item.createdTime).toLocaleString()}`}
                  </div>
                  <div className="priority-tab">{item.priority}</div>
                  <NotesMenuBar notes={item} menutype={false} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Home };
