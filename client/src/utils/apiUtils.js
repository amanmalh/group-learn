import axios from "axios";
const BASE_URL = "http://localhost:3001/api";
const login = async ({ id, password }) => {
  const headers = { "Content-Type": "application/json" };
  const response = await axios.post(
    BASE_URL + "/login",
    { id, password },
    { headers }
  );
  console.log(response);
  return response;
};

export { login };
