import { useServices } from "../../context/serviceContext/serviceContext";
import "../NotesMenuBar/NotesMenuBar.css";

const NotesMenuBar = ({ notes, menutype }) => {
  const {
    postNewNotes,
    note,
    setNote,
    deleteNote,
    updateNote,
    setId
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
          <li>
            <span className="material-icons">archive</span>
          </li>
          <li onClick={() => deleteNote(notes._id)}>
            <span className="material-icons">delete</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export { NotesMenuBar };
