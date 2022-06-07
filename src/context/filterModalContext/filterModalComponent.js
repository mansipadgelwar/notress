import { createContext, useContext, useState, useReducer } from "react";
import { useServices } from "../../context";

const filter = "";

const filteredDataInitialState = {
  filteredData: [],
};
const FilterModalContext = createContext(filter);

const FilterModalProvider = ({ children }) => {
  const { state } = useServices();
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [checkedCheckbox, setCheckedCheckbox] = useState([]);
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
      case "SORT_BY_LABELS":
        return {
          ...filterstate,
          filteredData: state.notes.filter((item) =>
            item.tags.find((element) => {
              return payload.find((label) => label === element);
            })
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

  const [option, setOption] = useState("priority");

  return (
    <FilterModalContext.Provider
      value={{
        showFilterModal,
        setShowFilterModal,
        option,
        setOption,
        filterState,
        filterDispatch,
        checkedCheckbox,
        setCheckedCheckbox,
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
