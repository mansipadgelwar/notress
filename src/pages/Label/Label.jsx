import { NotesMenuBar, SearchBar, SideBar } from "../../components";
import { useLabel } from "../../context/labelContext/LabelContext";
import "../../pages/pages.css";
import { useServices } from "../../context/serviceContext/serviceContext";

const Label = () => {
  const { data } = useLabel();
  const { state } = useServices();
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

          {data.map((label) => {
            const labeledData = state.notes.filter((item) => {
              return item.tags.find((element) => element === label.labelName);
            });
            return (
              <>
                <div className="section-breaker h4 text-bold" key={label.id}>
                  <div>{label.labelName}</div>
                </div>

                {labeledData.map((item) => {
                  return (
                    <div
                      className="notes-container"
                      key={item._id}
                      style={{ ...item, backgroundColor: item.bgColor }}
                    >
                      <div className="notes-title-container">
                        <div className="h4 text-bold">{item.title}</div>
                        <div>
                          <span className="material-icons">push_pin</span>
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
                        <NotesMenuBar notes={item} menutype={false} />
                      </div>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Label };
