import "../ColorPalleteModal//ColorPallete.css";
import { useTheme } from "../../../context/noteThemeContext/noteThemeContext";

const palleteDatabase = [
  {
    id: 1,
    bgColor: "#fecdd3",
  },
  {
    id: 2,
    bgColor: "#f0abfc",
  },
  {
    id: 3,
    bgColor: "#d8b4fe",
  },
  {
    id: 4,
    bgColor: "#a7f3d0",
  },
  {
    id: 5,
    bgColor: "#fde68a",
  },
];

const ColorPallete = ({ show, onClose }) => {
  const { backColor, setBackgroundColor } = useTheme();
  if (!show) {
    return null;
  }

  return (
    <div className="pallete-modal-wrapper">
      <div className="pallete-modal">
        <div className="pallete-modal-contents">
          <ul className="pallete-modal-content-list">
            {palleteDatabase.map((pallete) => {
              return (
                <li className="notes-label" key={pallete.id}>
                  <button
                    className="avatar avatar-xs"
                    style={{ backgroundColor: pallete.bgColor }}
                    onClick={() =>
                      setBackgroundColor(
                        pallete.bgColor === backColor
                          ? "white"
                          : pallete.bgColor
                      )
                    }
                  />
                </li>
              );
            })}

            <li className="notes-label" onClick={onClose}>
              <span className="material-icons pallete-modal-close-icon">
                close
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { ColorPallete };
