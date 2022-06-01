import "../NotesMenuBar/NotesMenuBar.css";

const NotesMenuBar = () => {
  return (
    <div className="notes-sub-menu">
      <ul className="notes-list">
        <li>
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
