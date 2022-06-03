import "../ColorPalleteModal//ColorPallete.css";
import { useTheme } from "../../../context/noteThemeContext/noteThemeContext";

const palleteDatabase = [
  {
    id: 1,
    bgColor: "#fee2e2",
  },
  {
    id: 2,
    bgColor: "#fed7aa",
  },
  {
    id: 3,
    bgColor: "#d9f99d",
  },
  {
    id: 4,
    bgColor: "#d1fae5",
  },
  {
    id: 5,
    bgColor: "#cffafe",
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
                      setBackgroundColor({
                        ...backColor,
                        color:
                          pallete.bgColor === backColor.color
                            ? "white"
                            : pallete.bgColor,
                        id: backColor.id,
                      })
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
