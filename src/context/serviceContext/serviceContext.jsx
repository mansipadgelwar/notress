import { createContext, useContext, useReducer } from "react";
import { useAuth } from "../authContext/authenticationContext";
import { useToast } from "../../custom-hooks/useToast";
import axios from "axios";
import { dataReducer } from "../../reducers";

const initialDataState = {
  notes: [],
};

const ServiceContext = createContext(initialDataState);

const ServiceProvider = ({ children }) => {
  const { isAuthorized, authToken } = useAuth();
  const { showToast } = useToast();
  const [state, dispatch] = useReducer(dataReducer, initialDataState);

  const postNewNotes = async (notes) => {
    if (!isAuthorized) {
      showToast("Please login to add notes.", "success");
    } else {
      try {
        const {
          data: { note },
        } = await axios.post(
          "/api/notes",
          { notes },
          {
            headers: { authorization: authToken },
          }
        );
        dispatch({ type: "SET_NOTES", payload: note });
        showToast("Notes added successfully", "success");
      } catch (error) {
        console.log("Error in adding notes.", "error");
      }
    }
  };

  return (
    <ServiceContext.Provider
      value={{ state, dispatch, initialDataState, postNewNotes }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

const useServices = () => useContext(ServiceContext);

export { useServices, ServiceProvider };
