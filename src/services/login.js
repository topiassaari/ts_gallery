import axios from "axios";
const baseUrl = "/api/login";

const login = async (cred) => {
  const req = axios.post(baseUrl, cred);
  return req.then((res) => res.data).catch((error) => error.response.data);
};

const logout = async () => {
  await window.sessionStorage.removeItem("loggedUser");
};

export default { login, logout };
