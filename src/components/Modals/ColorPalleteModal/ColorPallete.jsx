import "./ColorPallete.css";
import { useState } from "react";

const palleteDatabase = [
  {
    id: 1,
    bgColor: "red",
  },
  {
    id: 2,
    bgColor: "yellow",
  },
  {
    id: 3,
    bgColor: "green",
  },
  {
    id: 4,
    bgColor: "blue",
  },
  {
    id: 5,
    bgColor: "orange",
  },
];

const ColorPallete = () => {
  const [backColor, setBackgroundColor] = useState("white");
  return (
    <div className="modal-wrapper" style={{ backgroundColor: backColor }}>
      <div className="modal">
        <div className="modal-contents">
          <ul className="modal-content-list">
            {palleteDatabase.map((pallete) => {
              return (
                <li className="notes-label" key={pallete.id}>
                  <button
                    className="avatar avatar-xs"
                    style={{ backgroundColor: pallete.bgColor }}
                    onClick={() => setBackgroundColor(pallete.bgColor)}
                  />
                </li>
              );
            })}

            <li className="notes-label">
              <button className="modal-close-icon">
                <span className="material-icons">close</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { ColorPallete };
