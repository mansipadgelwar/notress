import { useEffect } from "react";
import { useFilter } from "../../../context";
import styles from "./Filtermodal.module.css";

const priorityDB = ["High", "Medium", "Low"];

const FilterModal = ({ showFilterModal, onClosingFilterModal }) => {
  const { filterDispatch } = useFilter();
  const { checkedPriority, setCheckedPriority, setShowFilterData } =
    useFilter();

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    checked
      ? setCheckedPriority([...checkedPriority, value])
      : setCheckedPriority(checkedPriority.filter((e) => e !== value));
  };

  useEffect(() => {
    let cleanUpFunction = true;
    if (checkedPriority !== "" && cleanUpFunction)
      filterDispatch({
        type: "SORT_BY_PRIORITY",
        payload: checkedPriority,
      });
    return () => {
      cleanUpFunction = false;
    };
  }, [checkedPriority, filterDispatch]);

  const clearAllFilters = () => {
    filterDispatch({
      type: "SORT_BY_DATE",
      payload: "oldest-first",
    });
    setCheckedPriority("");
    setShowFilterData(false);
    onClosingFilterModal();
  };

  if (!showFilterModal) {
    return null;
  }

  const handleFilterAndSort = () => {
    // setCheckedPriority("");
    setShowFilterData(true);
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
          <button className="btn " onClick={clearAllFilters}>
            clear
          </button>
          <button className="btn styles.btn-cta" onClick={handleFilterAndSort}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export { FilterModal };
