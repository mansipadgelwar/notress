import styles from "./LabelModal.module.css";
import { v4 as uuid } from "uuid";
import { useLabel } from "../../../context";

const LabelModal = ({ showLabelModal, onCloseLabelModal }) => {
  const { displayLabel, setDisplayLabel, data, setData, label, setLabels } =
    useLabel();
  if (!showLabelModal) {
    return null;
  }

  const handleLabels = () => {
    const newObj = data.concat({ id: uuid(), labelName: label });
    setData(newObj);
    setLabels("");
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setDisplayLabel([...displayLabel, value]);
    } else {
      setDisplayLabel(displayLabel.filter((e) => e !== value));
    }
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        <button className={styles.modal_close_icon} onClick={onCloseLabelModal}>
          <span className="material-icons">close</span>
        </button>
        <div className={styles.modal_contents}>
          <ul className={styles.modal_content_list}>
            {data.map((item) => {
              return (
                <li className={styles.unordered_list} key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.labelName}
                    value={item.labelName}
                    onChange={handleCheckboxChange}
                  />
                  <label>{item.labelName}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setLabels(e.target.value)}
          value={label}
        />
        <div>
          <button className={styles.btn_label_tab} onClick={handleLabels}>
            + New
          </button>
        </div>
      </div>
    </div>
  );
};

export { LabelModal };
