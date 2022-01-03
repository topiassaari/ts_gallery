import axios from "axios";
const baseUrl = "http://localhost:8000/api/images";
let token = null;

const setToken = (newToken) => {
  if (newToken) {
    token = `bearer ${newToken}`;
    return token;
  }
  return null;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newImg) => {
  const config = { headers: { Authorization: token } };
  const req = await axios.post(baseUrl, newImg, config);
  return req.data;
};

export default { getAll, setToken, create };
