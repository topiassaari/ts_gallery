import axios from "axios";
const baseUrl = "http://localhost:8000/api/login";

const login = async (cred) => {
  const response = await axios.post(baseUrl, cred);
  return response.data;
};

const logout = async () => {
  await window.localStorage.removeItem("loggedUser");
};

export default { login, logout };
