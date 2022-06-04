import { useServices } from "../../context/serviceContext/serviceContext";
import "../NotesMenuBar/NotesMenuBar.css";
import { useState } from "react";
import { ColorPallete } from "../Modals/ColorPalleteModal/ColorPallete";
import { useTheme } from "../../context/noteThemeContext/noteThemeContext";

const NotesMenuBar = ({ notes, menutype, location }) => {
  const [show, setShow] = useState(false);
  const {
    postNewNotes,
    note,
    setNote,
    deleteNote,
    updateNote,
    setId,
    addNotesToArchive,
    restoreNoteFromArchive,
    deleteNoteFromArchive,
    addNotesToTrashed,
    deleteNoteFromTrash,
    restoreNoteFromTrash,
  } = useServices();
  const { setBackgroundColor } = useTheme();

  const handleUpdate = (notes) => {
    setNote({ title: notes.title, body: notes.body });
    setId(notes._id);
  };

  const handleToggleNoteBackground = () => {
    setShow(true);
    setBackgroundColor({ color: "", id: notes._id });
  };
  return (
    <div className="notes-sub-menu">
      {menutype ? (
        <ul className="notes-list">
          <li onClick={() => postNewNotes(note)}>
            <span className="material-icons">check_circle</span>
          </li>
          <li onClick={() => updateNote(notes)}>
            <span className="material-icons">update</span>
          </li>
        </ul>
      ) : location === "archive" ? (
        <ul className="notes-list">
          <li onClick={() => restoreNoteFromArchive(notes._id)}>
            <span className="material-icons">unarchive</span>
          </li>
          <li onClick={() => deleteNoteFromArchive(notes._id)}>
            <span className="material-icons">delete</span>
          </li>
        </ul>
      ) : location === "trash" ? (
        <ul className="notes-list">
          <li onClick={() => restoreNoteFromTrash(notes._id)}>
            <span className="material-icons">restore_from_trash</span>
          </li>
          <li onClick={() => deleteNoteFromTrash(notes._id)}>
            <span className="material-icons">delete</span>
          </li>
        </ul>
      ) : (
        <ul className="notes-list">
          <ColorPallete show={show} onClose={() => setShow(false)} />
          <li onClick={() => handleUpdate(notes)}>
            <span className="material-icons">edit_note</span>
          </li>
          <li onClick={handleToggleNoteBackground}>
            <span className="material-icons">palette</span>
          </li>
          <li>
            <span className="material-icons">label</span>
          </li>
          <li onClick={() => addNotesToArchive(notes._id)}>
            <span className="material-icons">archive</span>
          </li>
          <li onClick={() => addNotesToTrashed(notes._id)}>
            <span className="material-icons">delete</span>
          </li>
          <li onClick={() => deleteNote(notes._id)}>
            <span className="material-icons">delete_forever</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export { NotesMenuBar };
