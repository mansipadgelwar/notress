import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import {
  useAuth,
  useTheme,
  useLabel,
  usePriority,
  usePin,
} from "../../context";
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
  labels: [],
};

const ServiceContext = createContext(initialDataState);

const ServiceProvider = ({ children }) => {
  const { isAuthorized, authToken } = useAuth();
  const { showToast } = useToast();
  const [state, dispatch] = useReducer(dataReducer, initialDataState);
  const [note, setNote] = useState(initialDataState.noteData);
  const [id, setId] = useState();
  const { backColor, setBackgroundColor } = useTheme();
  const { displayLabel, setDisplayLabel } = useLabel();
  const { priority } = usePriority();
  const { pinnedNote, setPinnedNote } = usePin();
  const [showEditorModal, setShowEditorModal] = useState(false);
  const [isInEditMode, setEditMode] = useState(false);

  const postNewNotes = async (note) => {
    note.tags = displayLabel;
    const newNote = {
      ...note,
      createdTime: new Date().getTime(),
      bgColor: backColor,
      priority: priority,
      pinnedNote: pinnedNote,
    };
    if (!isAuthorized) {
      showToast("Please login to add notes.", "info");
    } else if (note.title === "") {
      showToast("Title cannot be blank.", "info");
    } else {
      try {
        const {
          data: { notes },
        } = await postNewNoteService(authToken, newNote);
        dispatch({ type: "SET_NOTES", payload: notes });
        setNote({ title: "", body: "" });
        setBackgroundColor("");
        setDisplayLabel([]);
        setPinnedNote(false);
        setShowEditorModal(false);
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
      console.error("Error in getting notes", error);
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
      }
    }
  };

  const updateNote = async (editNote) => {
    note.tags = displayLabel;
    const currentNote = editNote.find((element) => element._id === id);
    const newNote = {
      ...note,
      createdTime: new Date().getTime(),
      bgColor: backColor,
      priority: priority,
      pinnedNote: pinnedNote,
    };
    if (!isAuthorized) {
      showToast("Please login to edit notes.", "info");
    } else if (note.title === "") {
      showToast("Title cannot be blank.", "info");
    } else {
      try {
        const {
          data: { notes },
        } = await updateNewNoteService(authToken, newNote, currentNote._id);
        dispatch({ type: "SET_NOTES", payload: notes });
        setNote({ title: "", body: "" });
        setBackgroundColor("");
        setDisplayLabel([]);
        setPinnedNote(false);
        setEditMode(false);
        setShowEditorModal(false);
        showToast("Notes updated successfully", "success");
      } catch (error) {
        showToast("Error while updating notes", "error");
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
      console.error("Error in getting archived notes.", error);
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
        showToast("Error in unarchiving notes", "error");
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
        showToast("Error in deleting archived notes", "error");
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
        showToast("Error in adding notes to trash", "error");
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
      console.error("Error in getting notes from trashed.", error);
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
        showToast("Error in deleting notes from trash.", "error");
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
        showToast("Error in restoring notes from trashed.", "error");
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
        showEditorModal,
        setShowEditorModal,
        setEditMode,
        isInEditMode,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

const useServices = () => useContext(ServiceContext);

export { useServices, ServiceProvider };
