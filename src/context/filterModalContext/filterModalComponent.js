import { createContext, useContext, useState } from "react";

const filter = "";

const FilterModalContext = createContext(filter);

const FilterModalProvider = ({ children }) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [option, setOption] = useState({
    sortBy: "newest-first",
    filterBy: "",
  });

  return (
    <FilterModalContext.Provider
      value={{ showFilterModal, setShowFilterModal, option, setOption }}
    >
      {children}
    </FilterModalContext.Provider>
  );
};

const useFilter = () => useContext(FilterModalContext);

export { useFilter, FilterModalProvider };
