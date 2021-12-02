import axios from "axios";
const baseUrl = "http://localhost:8000/api/";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default { getAll };
