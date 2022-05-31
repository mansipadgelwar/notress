import "../FilterModal//Filtermodal.css";

const FilterModal = () => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-heading">
          <div className="h3 text-bold">Sort & Filter Notes</div>
          <div>
            <button className="modal-close-icon">
              <span className="material-icons">close</span>
            </button>
          </div>
        </div>
        <div className="modal-contents">
          <ul className="modal-content-list">
            <li className="unordered-list">
              <label className="text-bold">Sort By</label>
              <select name="sort-by" className="dropdown">
                <option value="newest-first">Newest First</option>
                <option value="oldest-first">Oldest First</option>
              </select>
            </li>
            <li className="unordered-list">
              <label className="text-bold">Filter By</label>
              <select name="filter-by" className="dropdown">
                <option value="date">Date</option>
                <option value="priority">Priority</option>
                <option value="labels">Labels</option>
              </select>
            </li>
            <li className="unordered-list">
              <label className="text-bold">Select Labels</label>
            </li>
            <li className="notes-label">
              <input type="checkbox" />
              <label>Label 1</label>
            </li>
            <li className="notes-label">
              <input type="checkbox" />
              <label>Label 2</label>
            </li>
            <li className="notes-label">
              <input type="checkbox" />
              <label>Label 3</label>
            </li>
          </ul>
        </div>
        <div className="filter-modal-cta">
          <button className="btn btn-cta">Done</button>
        </div>
      </div>
    </div>
  );
};

export { FilterModal };
