import { useFilter, useServices } from "../../../context";
import styles from "./Filtermodal.module.css";

const FilterModal = ({ showFilterModal, onClosingFilterModal }) => {
  const { option, setOption } = useFilter();
  const { state, dispatch } = useServices();
  if (!showFilterModal) {
    return null;
  }

  const handleFilterAndSort = () => {
    const sortTedNotes = [...state.notes].sort(
      (a, b) => b.createdTime - a.createdTime
    );
    option.sortBy === "newest-first"
      ? dispatch({ type: "SET_NOTES", payload: sortTedNotes })
      : dispatch({ type: "SET_NOTES", payload: sortTedNotes.reverse() });
    onClosingFilterModal();
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        <div className={styles.modal_heading}>
          <div className="h3 text-bold">Sort & Filter Notes</div>
          <div>
            <button
              className={styles.modal_close_icon}
              onClick={onClosingFilterModal}
            >
              <span className="material-icons">close</span>
            </button>
          </div>
        </div>
        <div className={styles.modal_contents}>
          <ul className={styles.modal_content_list}>
            <li className={styles.unordered_list}>
              <label className="text-bold">Sort By</label>
              <select
                name="sort-by"
                className={styles.dropdown}
                onChange={(e) =>
                  setOption({ ...option, sortBy: e.target.value })
                }
              >
                <option value="newest-first">Newest First</option>
                <option value="oldest-first">Oldest First</option>
              </select>
            </li>
            <li className={styles.unordered_list}>
              <label className="text-bold">Filter By</label>
              <select
                name="filter-by"
                className={styles.dropdown}
                onChange={(e) =>
                  setOption({ ...option, filterBy: e.target.value })
                }
              >
                <option value="date">Date</option>
                <option value="priority">Priority</option>
                <option value="labels">Labels</option>
              </select>
            </li>
            <li className={styles.unordered_list}>
              <label className="text-bold">Select Labels</label>
            </li>
            <li className={styles.notes_label}>
              <input type="checkbox" />
              <label>Label 1</label>
            </li>
            <li className={styles.notes_label}>
              <input type="checkbox" />
              <label>Label 2</label>
            </li>
            <li className={styles.notes_label}>
              <input type="checkbox" />
              <label>Label 3</label>
            </li>
          </ul>
        </div>
        <div className={styles.filter_modal_cta}>
          <button className="btn styles.btn-cta" onClick={handleFilterAndSort}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export { FilterModal };
