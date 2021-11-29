import axios from "axios";
const baseUrl = "http://localhost:8000/api/";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (obj) => {
  const request = axios.post(baseUrl, { obj });
  return request.then((response) => response.data);
};
const removeObj = (obj) => {
  const request = axios.delete(baseUrl + obj.id);
  return request.then((response) => response.data);
};
const update = (id, obj) => {
  const request = axios.put(baseUrl + id, obj);
  return request.then((response) => response.data);
};

export default { getAll, create, removeObj, update };
