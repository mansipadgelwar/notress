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
  getArchivedNoteService,
  restoreArchivedNoteService,
  deleteArchivedNoteService,
  postNoteToTrashService,
  getTrashedNoteService,
  deleteNotefromTrashService,
  restoreTrashedNoteService,
} from "../../services";

const initialDataState = {
  notes: [],
  noteData: { title: "", body: "", bgColor: "", id: 0 },
  archives: [],
  trash: [],
};

const ServiceContext = createContext(initialDataState);

const ServiceProvider = ({ children }) => {
  const { isAuthorized, authToken } = useAuth();
  const { showToast } = useToast();
  const [state, dispatch] = useReducer(dataReducer, initialDataState);
  const [note, setNote] = useState(initialDataState.noteData);
  const [id, setId] = useState();

  const postNewNotes = async (note) => {
    const newNote = { ...note, createdTime: new Date().getTime() };
    if (!isAuthorized) {
      showToast("Please login to add notes.", "success");
    } else {
      try {
        const {
          data: { notes },
        } = await postNewNoteService(authToken, newNote);
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
      showToast("Please login to archuve notes.", "success");
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
        showToast("Error in adding notes to archive.", "error");
        console.log("Error in adding notes to archive.", error);
      }
    }
  };

  const getArchivedNotes = async () => {
    try {
      const {
        data: { notes, archives },
      } = await getArchivedNoteService(authToken);
      dispatch({
        type: "ARCHIVE_NOTES",
        payload: { notes: [...notes], archives: [...archives] },
      });
    } catch (error) {
      console.log("Error in getting archived notes.", error);
    }
  };

  const restoreNoteFromArchive = async (noteId) => {
    if (!isAuthorized) {
      showToast("Please login to restore archived notes", "success");
    } else {
      try {
        const {
          data: { notes, archives },
        } = await restoreArchivedNoteService(authToken, noteId);
        dispatch({
          type: "ARCHIVE_NOTES",
          payload: { notes: notes, archives: archives },
        });
        showToast("Notes unarchived  successfully", "success");
      } catch (error) {
        console.log("Error in unarchiving notes.", error);
      }
    }
  };

  const deleteNoteFromArchive = async (noteId) => {
    if (!isAuthorized) {
      showToast("Please login to delete notes from archive.", "success");
    } else {
      try {
        const {
          data: { notes, archives },
        } = await deleteArchivedNoteService(authToken, noteId);
        dispatch({
          type: "ARCHIVE_NOTES",
          payload: { notes: notes, archives: archives },
        });
        showToast("Note deleted successfully from archive", "success");
      } catch (error) {
        console.log("Error in deleting notes from archive.", error);
      }
    }
  };

  const addNotesToTrashed = async (noteId) => {
    if (!isAuthorized) {
      showToast("Please login to add notes to trash.", "success");
    } else {
      try {
        const {
          data: { notes, trash },
        } = await postNoteToTrashService(authToken, note, noteId);
        dispatch({
          type: "TRASH_NOTES",
          payload: { notes: notes, trash: trash },
        });
        showToast("Notes added to trash successfully", "success");
      } catch (error) {
        console.log("Error in adding notes to trash.", error);
      }
    }
  };

  const getTrashedNotes = async () => {
    try {
      const {
        data: { notes, trash },
      } = await getTrashedNoteService(authToken);
      dispatch({
        type: "TRASH_NOTES",
        payload: { notes: [...notes], trash: [...trash] },
      });
    } catch (error) {
      console.log("Error in getting notes from trashed.", error);
    }
  };

  const deleteNoteFromTrash = async (noteId) => {
    if (!isAuthorized) {
      showToast("Please login to delete notes.", "success");
    } else {
      try {
        const {
          data: { notes, trash },
        } = await deleteNotefromTrashService(authToken, noteId);
        dispatch({
          type: "TRASH_NOTES",
          payload: { notes: notes, trash: trash },
        });
        showToast("Note deleted successfully from trashed", "success");
      } catch (error) {
        console.log("Error in deleting notes.", error);
      }
    }
  };

  const restoreNoteFromTrash = async (noteId) => {
    if (!isAuthorized) {
      showToast("Please login restore trashed notes", "success");
    } else {
      try {
        const {
          data: { notes, trash },
        } = await restoreTrashedNoteService(authToken, noteId);
        dispatch({
          type: "TRASH_NOTES",
          payload: { notes: notes, trash: trash },
        });
        showToast("Notes restored successfully", "success");
      } catch (error) {
        console.log("Error in restoring notes from trashed.", error);
      }
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      getNewNotes();
      getArchivedNotes();
      getTrashedNotes();
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
        restoreNoteFromArchive,
        deleteNoteFromArchive,
        addNotesToTrashed,
        deleteNoteFromTrash,
        restoreNoteFromTrash,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

const useServices = () => useContext(ServiceContext);

export { useServices, ServiceProvider };
