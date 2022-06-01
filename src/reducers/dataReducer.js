const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NOTES":
      return { ...state, notes: [...payload] };
    default:
      throw new Error("Invalid case");
  }
};

export { dataReducer };
