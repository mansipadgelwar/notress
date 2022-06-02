import { useServices } from "../../context/serviceContext/serviceContext";
import "../NotesMenuBar/NotesMenuBar.css";

const NotesMenuBar = () => {
  const { postNewNotes, note } = useServices();

  return (
    <div className="notes-sub-menu">
      <ul className="notes-list">
        <li onClick={() => postNewNotes(note)}>
          <span class="material-icons">edit_note</span>
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
        <li>
          <span className="material-icons">delete</span>
        </li>
      </ul>
    </div>
  );
};

export { NotesMenuBar };
