import { NotesMenuBar, SearchBar, SideBar } from "../../components";
import { useServices } from "../../context/serviceContext/serviceContext";
import "../../pages/pages.css";
import { useLabel } from "../../context/labelContext/LabelContext";

const Archive = () => {
  const { state } = useServices();
  const { displayLabel } = useLabel();

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

          <div className="section-breaker h4 text-bold">
            <div>ARCHIVED</div>
          </div>

          {state.archives.map((item) => {
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
                ></div>
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
                    location={"archive"}
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

export { Archive };
