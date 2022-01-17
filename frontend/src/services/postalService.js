import axios from "axios";
import store from "../store";
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

  return req
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.data.error === "token expired") {
        store.dispatch({ type: "LOGOUT", data: [] });
      }
      if (error.response.data.error === "token invalid") {
        store.dispatch({ type: "LOGOUT", data: [] });
      }
    });
};

const update = async (id, updated) => {
  const req = axios.put(`${baseUrl}/${id}`, updated);
  return req.then((res) => res.data);
};

const deleteImage = async (id) => {
  const config = { headers: { Authorization: token } };
  const req = axios.delete(`${baseUrl}/${id}`, config);
  return req.then((res) => res.data);
};

export default { getAll, setToken, create, update, deleteImage };
