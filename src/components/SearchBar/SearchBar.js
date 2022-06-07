import "../SearchBar/SearchBar.css";
import { useFilter } from "../../context";

const SearchBar = () => {
  const { setShowFilterModal } = useFilter();
  return (
    <div className="search-bar-container">
      <span className="material-icons icons-left">search</span>
      <input
        className="search-bar-input"
        type="text"
        id="search-bar"
        name="search-bar"
      />
      <span
        className="material-icons icon-right"
        onClick={() => setShowFilterModal(true)}
      >
        tune
      </span>
    </div>
  );
};

export { SearchBar };
