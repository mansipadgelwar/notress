import { useFilter } from "../../../context";
import styles from "./Filtermodal.module.css";
import { useState } from "react";

const priorityDB = ["High", "Medium", "Low"];

const FilterModal = ({ showFilterModal, onClosingFilterModal }) => {
  const { filterState, filterDispatch } = useFilter();
  // const { state, dispatch } = useServices();
  const [checkedPriority, setCheckedPriority] = useState([]);
  if (!showFilterModal) {
    return null;
  }

  const handleFilterAndSort = () => {
    // console.log();
    // const sortedNotes = [...state.notes].sort(
    //   (a, b) => b.createdTime - a.createdTime
    // );
    // option.sortBy === "newest-first" && option.filterBy === "date"
    //   ? dispatch({ type: "SET_NOTES", payload: sortedNotes })
    //   : dispatch({ type: "SET_NOTES", payload: sortedNotes.reverse() });
    // const filteredNoteByPriority = sortedNotes.filter((item) =>
    //   checkedPriority.find((element) => element === item.priority)
    // );
    // option.sortBy === "newest-first" && option.filterBy === "priority"
    //   ? dispatch({ type: "SET_NOTES", payload: filteredNoteByPriority })
    //   : dispatch({
    //       type: "SET_NOTES",
    //       payload: filteredNoteByPriority.reverse(),
    //     });
    // setCheckedPriority("");
    // onClosingFilterModal();
    console.log(filterState);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedPriority([...checkedPriority, value]);
    } else {
      setCheckedPriority(checkedPriority.filter((e) => e !== value));
    }
    filterDispatch({
      type: "SORT_BY_PRIORITY",
      payload: checkedPriority,
    });
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
                  filterDispatch({
                    type: "SORT_BY_DATE",
                    payload: e.target.value,
                  })
                }
              >
                <option value="newest-first">select option</option>
                <option value="newest-first">Newest First</option>
                <option value="oldest-first">Oldest First</option>
              </select>
            </li>
            <li className={styles.unordered_list}>
              <label className="text-bold">Filter By</label>
              <select name="filter-by" className={styles.dropdown}>
                <option value="date">Date</option>
                <option value="priority">Priority</option>
                <option value="labels">Labels</option>
              </select>
            </li>
            <li className={styles.unordered_list}>
              <label className="text-bold">Select Labels</label>
            </li>
            {priorityDB.map((item) => {
              return (
                <li className={styles.notes_label} key={item}>
                  <input
                    type="checkbox"
                    name={item}
                    value={item}
                    onChange={handleCheckboxChange}
                  />
                  <label>{item}</label>
                </li>
              );
            })}
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
