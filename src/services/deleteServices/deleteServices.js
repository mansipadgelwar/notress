import axios from "axios";

const postNoteToTrashService = (authToken, note, noteId) => {
  return axios.post(
    `/api/notes/trash/${noteId}`,
    { note },
    {
      headers: { authorization: authToken },
    }
  );
};

const getTrashedNoteService = (authToken) => {
  return axios.get("/api/trash", {
    headers: { authorization: authToken },
  });
};

const deleteNotefromTrashService = (authToken, noteId) => {
  return axios.delete(`/api/trash/delete/${noteId}`, {
    headers: { authorization: authToken },
  });
};

const restoreTrashedNoteService = (authToken, noteId) => {
  return axios.post(
    `/api/trash/restore/${noteId}`,
    {},
    {
      headers: { authorization: authToken },
    }
  );
};
export {
  postNoteToTrashService,
  getTrashedNoteService,
  deleteNotefromTrashService,
  restoreTrashedNoteService,
};
