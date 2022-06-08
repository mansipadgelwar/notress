import { Editor, NotesMenuBar, SearchBar, SideBar } from "../../components";
import { useServices, useFilter } from "../../context";
import { FilterModal } from "../../components";

const Home = () => {
  const { state, setShowEditorModal, showEditorModal } = useServices();
  const { showFilterModal, setShowFilterModal, filterState, showFilterData } =
    useFilter();

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

          {showFilterData
            ? filterState.filteredData.map((item) => {
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
            : state.notes.map((item) => {
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
              })}
        </div>
      </div>
    </div>
  );
};

export { Home };
