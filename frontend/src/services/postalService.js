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
  const req = axios.post(baseUrl, newImg, config);

  return req.then((res) => res.data).catch((error) => error.response.data);
};

const update = async (id, updated) => {
  const config = { headers: { Authorization: token } };
  const req = axios.put(`${baseUrl}/${id}`, updated, config);
  return req.then((res) => res.data).catch((error) => error.response.data);
};

const deleteImage = async (id) => {
  const config = { headers: { Authorization: token } };
  const req = axios.delete(`${baseUrl}/${id}`, config);
  return req.then((res) => res.data).catch((error) => error.response.data);
};

export default { getAll, setToken, create, update, deleteImage };
