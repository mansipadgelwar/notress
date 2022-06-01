import { ACTION_TYPE } from "../utils";

const initialAuthState = { authToken: "", authUser: {}, isAuthorized: false };

const authReducer = (authState, action) => {
  switch (action.type) {
    case ACTION_TYPE.INIT_AUTH:
      return {
        ...authState,
        authToken: action.payload.authToken,
        authUser: action.payload.authUser,
        isAuthorized: true,
      };
    case ACTION_TYPE.RESET_AUTH:
      return initialAuthState;
    default:
      console.error("Invalid auth ACTION_TYPE");
  }
};

export { authReducer, initialAuthState };
