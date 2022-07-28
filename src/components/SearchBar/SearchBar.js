import "../SearchBar/SearchBar.css";
import { useFilter, useSearch } from "../../context";

const SearchBar = () => {
  const { setShowFilterModal } = useFilter();
  const { search, setSearch } = useSearch();

  return (
    <div className="search-bar-container">
      <span className="material-icons icons-left">search</span>
      <input
        className="search-bar-input"
        type="text"
        id="search-bar"
        name="search-bar"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
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
