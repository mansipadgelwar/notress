import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { useAuth } from "../authContext/authenticationContext";
import { useToast } from "../../custom-hooks/useToast";
import { dataReducer } from "../../reducers";
import {
  deleteNoteService,
  getNewNoteService,
  postArchivedNoteService,
  postNewNoteService,
  updateNewNoteService,
} from "../../services";

const initialDataState = {
  notes: [],
  archives: [],
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
        } = await postNewNoteService(authToken, note);
        dispatch({ type: "SET_NOTES", payload: notes });
        setNote({ title: "", body: "" });
        showToast("Notes added successfully", "success");
      } catch (error) {
        showToast("Error in adding notes", "error");
        console.error("Error in adding notes.", error);
      }
    }
  };

  const getNewNotes = async () => {
    try {
      const {
        data: { notes },
      } = await getNewNoteService(authToken);
      dispatch({ type: "SET_NOTES", payload: [...notes] });
    } catch (error) {
      showToast("Error in getting notes", "error");
      console.error("Error in getting notes.", error);
    }
  };

  const deleteNote = async (noteId) => {
    if (!isAuthorized) {
      showToast("Please login to delete notes.", "success");
    } else {
      try {
        const {
          data: { notes },
        } = await deleteNoteService(authToken, noteId);
        dispatch({ type: "SET_NOTES", payload: notes });
        showToast("Note deleted successfully", "success");
      } catch (error) {
        showToast("Error in deleting notes", "error");
        console.error("Error in deleting notes.", error);
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
        } = await updateNewNoteService(authToken, note, currentNote._id);
        dispatch({ type: "SET_NOTES", payload: notes });
        setNote({ title: "", body: "" });
        showToast("Notes updated successfully", "success");
      } catch (error) {
        showToast("Error while updating notes", "error");
        console.error("Error in updating notes.", error);
      }
    }
  };

  const addNotesToArchive = async (noteId) => {
    if (!isAuthorized) {
      showToast("Please login to add notes to archive.", "success");
    } else {
      try {
        const {
          data: { notes, archives },
        } = await postArchivedNoteService(authToken, note, noteId);
        dispatch({
          type: "ARCHIVE_NOTES",
          payload: { notes: notes, archives: archives },
        });
        showToast("Notes added to archive successfully", "success");
      } catch (error) {
        console.log("Error in adding notes to archive.", error);
      }
    }
  };

  const getArchivedNotes = async () => {
    try {
      const {
        data: { notes, archives },
      } = await getArchivedNotes(authToken);
      dispatch({
        type: "ARCHIVE_NOTES",
        payload: { notes: [...notes], archives: [...archives] },
      });
    } catch (error) {
      console.log("Error in getting notes.", error);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      getNewNotes();
      getArchivedNotes();
    }
    //eslint-disable-next-line
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
        addNotesToArchive,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

const useServices = () => useContext(ServiceContext);

export { useServices, ServiceProvider };
