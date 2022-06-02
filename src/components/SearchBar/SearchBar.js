import "../SearchBar/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <span className="material-icons icons-left">search</span>
      <input
        className="search-bar-input"
        type="text"
        id="search-bar"
        name="search-bar"
      />
      <span className="material-icons icon-right">tune</span>
    </div>
  );
};

export { SearchBar };
