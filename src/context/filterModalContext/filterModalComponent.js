import { createContext, useContext, useState, useReducer } from "react";
// import { FilterReducer } from "../../reducers";
import { useServices } from "../../context";

const filter = "";

const filteredDataInitialState = {
  filteredData: [],
};
const FilterModalContext = createContext(filter);

const FilterModalProvider = ({ children }) => {
  const { state } = useServices();
  const [showFilterModal, setShowFilterModal] = useState(false);
  const filterReducer = (filterstate, { type, payload }) => {
    switch (type) {
      case "SORT_BY_PRIORITY":
        console.log("case2", filterstate.filteredData);
        return {
          ...filterstate,
          filteredData: state.notes.filter((item) =>
            payload.find((element) => element === item.priority)
          ),
        };
      case "SORT_BY_DATE":
        return {
          ...filterstate,
          filteredData:
            payload === "newest-first"
              ? state.notes.sort((a, b) => b.createdTime - a.createdTime)
              : state.notes.sort((a, b) => a.createdTime - b.createdTime),
        };
      default:
        throw new Error("Invalid case");
    }
  };
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filteredDataInitialState
  );

  const [option, setOption] = useState({
    sortBy: "newest-first",
    filterBy: "date",
  });

  console.log(filterState);

  return (
    <FilterModalContext.Provider
      value={{
        showFilterModal,
        setShowFilterModal,
        option,
        setOption,
        filterState,
        filterDispatch,
      }}
    >
      {children}
    </FilterModalContext.Provider>
  );
};

const useFilter = () => useContext(FilterModalContext);

export { useFilter, FilterModalProvider };
