import axios from "axios";

const userLoginService = (email, password) => {
  return axios.post("api/auth/login", {
    email: email,
    password: password,
  });
};

export { userLoginService };
