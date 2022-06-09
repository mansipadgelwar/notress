import { createContext, useContext, useReducer } from "react";
import { userLoginService, userSignupService } from "../../services";
import { authReducer, initialAuthState } from "../../reducers";
import { useToast } from "../../custom-hooks/useToast";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const setAuthState = () => {
    const getTokenFromLocalStorage = localStorage.getItem("token");
    const getUserFromLocalStorage = localStorage.getItem("user");
    if (getTokenFromLocalStorage) {
      return {
        ...initialAuthState,
        authToken: getTokenFromLocalStorage,
        isAuthorized: true,
        authUser: JSON.parse(getUserFromLocalStorage),
      };
    }
    return initialAuthState;
  };
  const { showToast } = useToast();
  const [authState, authDispatch] = useReducer(authReducer, setAuthState());
  const loginUser = async (email, password) => {
    try {
      const { data, status } = await userLoginService(email, password);
      if (status === 200) {
        showToast("Login Successful", "success");
        authDispatch({
          type: "INIT_AUTH",
          payload: {
            authToken: data.encodedToken,
            authUser: data.foundUser,
          },
        });
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.foundUser));
      }
    } catch (error) {
      showToast(`Error while login`, "error");
      console.error("Error in login functionality", error);
    }
  };

  const signUpUser = async (
    email,
    firstName,
    lastName,
    password,
    confirmPassword
  ) => {
    if (confirmPassword !== password) {
      showToast(`Passwords do not match`, "error");
      console.error("Password do not match");
    }
    try {
      const { data, status } = await userSignupService(
        email,
        password,
        firstName,
        lastName
      );
      if (status === 201) {
        showToast("Signup Successful", "success");
        authDispatch({
          type: "INIT_AUTH",
          payload: {
            authToken: data.encodedToken,
            authUser: data.createdUser,
          },
        });
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.createdUser));
      }
    } catch (error) {
      showToast(`Error while signing up user`, "error");
      console.error("Error in signup functionality", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ ...authState, authDispatch, loginUser, signUpUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
