import { useServices } from "../../context/serviceContext/serviceContext";
import "../NotesMenuBar/NotesMenuBar.css";

const NotesMenuBar = ({ notes, menutype, location }) => {
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
  } = useServices();

  const handleUpdate = (notes) => {
    setNote({ title: notes.title, body: notes.body });
    setId(notes._id);
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
      ) : (
        <ul className="notes-list">
          <li onClick={() => handleUpdate(notes)}>
            <span className="material-icons">edit_note</span>
          </li>
          <li>
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
