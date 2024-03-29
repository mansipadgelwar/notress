import { NotesMenuBar, SearchBar, SideBar } from "../../components";
import { useServices, useLabel, useAppTheme, useAuth } from "../../context";
import "../../pages/pages.css";
import { useEffect } from "react";

const Trash = () => {
  const { state, getTrashedNotes } = useServices();
  const { displayLabel } = useLabel();
  const { theme } = useAppTheme();
  const { isAuthorized } = useAuth();

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "")
      : (document.body.style.backgroundColor = "var(--grey)");
  }, [theme]);

  useEffect(() => {
    if (isAuthorized) {
      getTrashedNotes();
    }
  }, []);

  return (
    <div className="library-home-page">
      <div className="library-home-sidebar">
        <SideBar />
      </div>

      <div className="main-content-page">
        <div className="hero-img">
          <div className="section-breaker h4 text-bold">
            <div>TRASH</div>
          </div>
          {state.trash.length > 0 ? (
            state.trash.map((item) => {
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
                  <div className="notes-label-container">
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
            })
          ) : (
            <div className="logout-content">
              <h2 className="h2">No notes in Trash</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Trash };
