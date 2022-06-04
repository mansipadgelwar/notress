import axios from "axios";

const postNewNoteService = (authToken, note) => {
  return axios.post(
    "/api/notes",
    { note },
    {
      headers: { authorization: authToken },
    }
  );
};

const getNewNoteService = (authToken) => {
  return axios.get("/api/notes", {
    headers: { authorization: authToken },
  });
};

const deleteNoteService = (authToken, noteId) => {
  return axios.delete(`/api/notes/${noteId}`, {
    headers: { authorization: authToken },
  });
};

const updateNewNoteService = (authToken, note, noteId) => {
  return axios.post(
    `/api/notes/${noteId}`,
    { note },
    {
      headers: { authorization: authToken },
    }
  );
};
export {
  postNewNoteService,
  getNewNoteService,
  deleteNoteService,
  updateNewNoteService,
};
