import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
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
  const [note, setNote] = useState(
    initialDataState.notes ?? {
      title: "",
      body: "",
    }
  );
  const [id, setId] = useState();

  const postNewNotes = async (note) => {
    if (!isAuthorized) {
      showToast("Please login to add notes.", "success");
    } else {
      try {
        const {
          data: { notes },
        } = await axios.post(
          "/api/notes",
          { note },
          {
            headers: { authorization: authToken },
          }
        );
        dispatch({ type: "SET_NOTES", payload: notes });
        setNote({ title: "", body: "" });
        showToast("Notes added successfully", "success");
      } catch (error) {
        console.log("Error in adding notes.", error);
      }
    }
  };

  const getNewNotes = async () => {
    try {
      const {
        data: { notes },
      } = await axios.get("/api/notes", {
        headers: { authorization: authToken },
      });
      dispatch({ type: "SET_NOTES", payload: [...notes] });
    } catch (error) {
      console.log("Error in getting notes.", error);
    }
  };

  const deleteNote = async (noteId) => {
    if (!isAuthorized) {
      showToast("Please login to delete notes.", "success");
    } else {
      try {
        const {
          data: { notes },
        } = await axios.delete(`/api/notes/${noteId}`, {
          headers: { authorization: authToken },
        });
        dispatch({ type: "SET_NOTES", payload: notes });
        showToast("Note deleted successfully", "success");
      } catch (error) {
        console.log("Error in deleting notes.", error);
      }
    }
  };

  const updateNote = async (editNote) => {
    const currentNote = editNote.find((element) => element._id === id);

    if (!isAuthorized) {
      showToast("Please login to edit notes.", "success");
    } else {
      try {
        const {
          data: { notes },
        } = await axios.post(
          `/api/notes/${currentNote._id}`,
          { note },
          {
            headers: { authorization: authToken },
          }
        );
        dispatch({ type: "SET_NOTES", payload: notes });
        setNote({ title: "", body: "" });
        showToast("Notes updated successfully", "success");
      } catch (error) {
        console.log("Error in updating notes.", error);
      }
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      getNewNotes();
    }
  }, [isAuthorized]);

  return (
    <ServiceContext.Provider
      value={{
        state,
        dispatch,
        postNewNotes,
        note,
        setNote,
        deleteNote,
        updateNote,
        setId,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

const useServices = () => useContext(ServiceContext);

export { useServices, ServiceProvider };
