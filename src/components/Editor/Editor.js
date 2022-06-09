import "./Editor.css";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import {
  useServices,
  useTheme,
  useLabel,
  usePriority,
  usePin,
} from "../../context";
import { NotesMenuBar } from "../../components";

const Editor = ({ onClosingEditorModal }) => {
  const { note, setNote, showEditorModal, state } = useServices();
  const reference = useRef(null);
  const { backColor } = useTheme();
  const { displayLabel } = useLabel();
  const { priority, setPriority } = usePriority();
  const { pinnedNote, setPinnedNote } = usePin();
  const config = {
    readonly: false,
  };

  if (!showEditorModal) {
    return null;
  }

  return (
    <div
      className="notes-container modal-wrapper"
      style={{ backgroundColor: backColor }}
    >
      <div className="notes-editor-conatiner editor-modal">
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
            <span
              className={
                pinnedNote ? "material-icons" : "material-icons-outlined"
              }
              onClick={() => setPinnedNote(!pinnedNote)}
            >
              push_pin
            </span>
          </div>
        </div>
        <div className="notes-body">
          <JoditEditor
            ref={reference}
            value={note.body}
            config={config}
            tabIndex={1}
            onBlur={(value) => setNote((prev) => ({ ...prev, body: value }))}
          />
        </div>
        <div className="notes-label-container">
          {displayLabel.map((label) => {
            return <div className="notes-label-type text-bold h5">{label}</div>;
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
  );
};

export { Editor };
