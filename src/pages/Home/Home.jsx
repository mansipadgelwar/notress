import { Editor, NotesMenuBar, SearchBar, SideBar } from "../../components";
import {
  useServices,
  useFilter,
  useAppTheme,
  useSearch,
  useAuth,
} from "../../context";
import { FilterModal } from "../../components";
import { useEffect } from "react";

const Home = () => {
  const { state, setShowEditorModal, showEditorModal, getNewNotes } =
    useServices();
  const { showFilterModal, setShowFilterModal, filterState, showFilterData } =
    useFilter();
  const { theme } = useAppTheme();
  const { search } = useSearch();
  const { isAuthorized } = useAuth();

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "")
      : (document.body.style.backgroundColor = "var(--grey)");
  }, [theme]);

  useEffect(() => {
    if (isAuthorized) {
      getNewNotes();
    }
  }, []);

  return (
    <div className="library-home-page">
      <FilterModal
        showFilterModal={showFilterModal}
        onClosingFilterModal={() => setShowFilterModal(false)}
      />
      <Editor
        showEditorModal={showEditorModal}
        onClosingEditorModal={() => setShowEditorModal(false)}
      />
      <div className="library-home-sidebar">
        <SideBar />
      </div>

      <div
        className={
          showFilterModal || showEditorModal
            ? "modal-background-page main-content-page"
            : "main-content-page"
        }
      >
        <div className="hero-img">
          <div>
            <SearchBar />
          </div>

          {showFilterData ? (
            filterState.filteredData &&
            filterState.filteredData
              ?.filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
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
                      {item.tags.map((label) => {
                        return (
                          <div className="notes-label-type text-bold h5">
                            {label}
                          </div>
                        );
                      })}
                    </div>
                    <div className="notes-menu">
                      <div className="notes-creation-date">
                        {`${new Date(item.createdTime).toLocaleString()}`}
                      </div>
                      <div className="priority-tab">{item.priority}</div>
                      <NotesMenuBar notes={item} menutype={false} />
                    </div>
                  </div>
                );
              })
          ) : state.notes.length > 0 ? (
            state.notes
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
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
                      {item.tags.map((label) => {
                        return (
                          <div className="notes-label-type text-bold h5">
                            {label}
                          </div>
                        );
                      })}
                    </div>
                    <div className="notes-menu">
                      <div className="notes-creation-date">
                        {`${new Date(item.createdTime).toLocaleString()}`}
                      </div>
                      <div className="priority-tab">{item.priority}</div>
                      <NotesMenuBar notes={item} menutype={false} />
                    </div>
                  </div>
                );
              })
          ) : (
            <div className="logout-content">
              <h2 className="h2">Your notes appear here</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Home };
