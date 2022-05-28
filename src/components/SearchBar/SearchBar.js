import "../SearchBar/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="input-icon icons-left icons-right">
      <span className="material-icons">search</span>
      <input className="input" type="text" id="search-bar" name="search-bar" />
      <span class="material-icons">tune</span>
    </div>
  );
};

export { SearchBar };
