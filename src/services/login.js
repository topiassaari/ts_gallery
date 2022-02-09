import axios from "axios";
const baseUrl = "/api/login";

const login = async (cred) => {
  const response = await axios.post(baseUrl, cred);
  return response.data;
};

const logout = async () => {
  await window.sessionStorage.removeItem("loggedUser");
};

export default { login, logout };
