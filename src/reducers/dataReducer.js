const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NOTES":
      return { ...state, notes: [...payload] };
    case "ARCHIVE_NOTES":
      return { ...state, archives: payload.archives, notes: payload.notes };
    case "TRASH_NOTES":
      return { ...state, trash: payload.trash, notes: payload.notes };
    case "SET_PINNED_NOTES":
      return { ...state, pinned: payload };
    default:
      throw new Error("Invalid case");
  }
};

export { dataReducer };
