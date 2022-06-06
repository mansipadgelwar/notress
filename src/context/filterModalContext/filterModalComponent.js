import { createContext, useContext, useState } from "react";

const filter = "";

const FilterModalContext = createContext(filter);

const FilterModalProvider = ({ children }) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  return (
    <FilterModalContext.Provider
      value={{ showFilterModal, setShowFilterModal }}
    >
      {children}
    </FilterModalContext.Provider>
  );
};

const useFilter = () => useContext(FilterModalContext);

export { useFilter, FilterModalProvider };
