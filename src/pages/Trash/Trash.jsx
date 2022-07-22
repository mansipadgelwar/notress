import { NotesMenuBar, SearchBar, SideBar } from "../../components";
import { useServices, useLabel, useAppTheme } from "../../context";
import "../../pages/pages.css";
import { useEffect } from "react";

const Trash = () => {
  const { state } = useServices();
  const { displayLabel } = useLabel();
  const { theme } = useAppTheme();

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "")
      : (document.body.style.backgroundColor = "var(--grey)");
  });

  return (
    <div className="library-home-page">
      <div className="library-home-sidebar">
        <SideBar />
      </div>

      <div className="main-content-page">
        <div className="hero-img">
          <div>
            <SearchBar />
          </div>

          <div className="section-breaker h4 text-bold">TRASH</div>
          {state.trash.map((item) => {
            return (
              <div
                className="notes-container"
                key={item._id}
                style={{ ...item, backgroundColor: item.bgColor }}
              >
                <div className="notes-title-container">
                  <div className="h4 text-bold">{item.title}</div>
                  <div>
                    <span
                      className={
                        item.pinnedNote
                          ? "material-icons"
                          : "material-icons-outlined"
                      }
                    >
                      push_pin
                    </span>
                  </div>
                </div>
                <div
                  className="notes-body"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
                <div class="notes-label-container">
                  {displayLabel.map((label) => {
                    return (
                      <div className="notes-label-type text-bold h5">
                        {label}
                      </div>
                    );
                  })}
                </div>
                <div className="notes-menu">
                  <div className="notes-creation-date">
                    Created on 26/10/2021
                  </div>
                  <NotesMenuBar
                    notes={item}
                    menutype={false}
                    location={"trash"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Trash };
