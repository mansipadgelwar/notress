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
  const [checkedPriority, setCheckedPriority] = useState([]);
  const [showFilterData, setShowFilterData] = useState(false);
  const filterReducer = (filterstate, { type, payload }) => {
    switch (type) {
      case "SORT_BY_PRIORITY":
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

  return (
    <FilterModalContext.Provider
      value={{
        showFilterModal,
        setShowFilterModal,
        option,
        setOption,
        filterState,
        filterDispatch,
        checkedPriority,
        setCheckedPriority,
        showFilterData,
        setShowFilterData,
      }}
    >
      {children}
    </FilterModalContext.Provider>
  );
};

const useFilter = () => useContext(FilterModalContext);

export { useFilter, FilterModalProvider };
