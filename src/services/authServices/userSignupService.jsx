import axios from "axios";

const userSignupService = (email, password, firstName, lastName) => {
  return axios.post("api/auth/signup", {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
};

export { userSignupService };
