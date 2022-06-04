import axios from "axios";

const postArchivedNoteService = (authToken, note, noteId) => {
  return axios.post(
    `/api/notes/archives/${noteId}`,
    { note },
    {
      headers: { authorization: authToken },
    }
  );
};

const getArchivedNoteService = (authToken) => {
  return axios.get("/api/notes", {
    headers: { authorization: authToken },
  });
};

const deleteArchivedNoteService = (authToken, noteId) => {
  return axios.delete(`/api/archives/delete/${noteId}`, {
    headers: { authorization: authToken },
  });
};

const restoreArchivedNoteService = (authToken, noteId) => {
  return axios.post(
    `/api/archives/restore/${noteId}`,
    {},
    {
      headers: { authorization: authToken },
    }
  );
};
export {
  postArchivedNoteService,
  restoreArchivedNoteService,
  deleteArchivedNoteService,
  getArchivedNoteService,
};
