import axios from "axios";
const BASE_URL = "http://localhost:3001/api";

axios.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");
  const token = user ? JSON.parse(user).data.token : null;
  const excludeUrls = ["/login", "/register"];

  if (excludeUrls.includes(config.url)) {
    return config;
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const login = async (data) => {
  const headers = { "Content-Type": "application/json" };
  const response = await axios.post(BASE_URL + "/login", data, { headers });
  return response;
};

const fetchGroups = async () => {
  const headers = { "Content-Type": "application/json" };
  // axios get groups - pass user as query p
  const response = await axios.get(BASE_URL + "/groups", { headers });
  return response.data;
};

const fetchGroupById = async (id) => {
  const headers = { "Content-Type": "application/json" };
  // axios get groups - pass user as query p
  const response = await axios.get(BASE_URL + `/group/${id}`, { headers });
  return response.data;
};

const postGroup = async (group) => {
  const headers = { "Content-Type": "application/json" };
  // axios get groups - pass user as query p
  const response = await axios.post(BASE_URL + "/group/", group, { headers });
  return response.data;
};

const patchGroup = async (group) => {
  const { id, ...body } = group;
  const headers = { "Content-Type": "application/json" };
  // axios get groups - pass user as query p
  const response = await axios.patch(
    BASE_URL + "/group/" + id,
    { ...body },
    { headers }
  );
  return response.data;
};

/*
    memberOperation = [
      { id: "123", operation: "add" },
      { id: "123", operation: "remove" },
    ] 
  */
const patchGroupMembers = async ({ groupId, memberOperation }) => {
  const headers = { "Content-Type": "application/json" };
  const response = await axios.patch(
    BASE_URL + "/group/" + groupId + "/members",
    memberOperation,
    headers
  );
  return response.data;
};

const getUsersByUsername = async (username, prefixed = true) => {
  if (!username || username === "" || username.length < 3) return;
  const headers = { "Content-Type": "application/json" };
  const params = { prefix: prefixed, username };

  const response = await axios.get(BASE_URL + "/user", { params }, { headers });
  return response.data.map((user) => ({
    value: user.id,
    label: user.username,
  }));
};

export {
  login,
  fetchGroups,
  fetchGroupById,
  postGroup,
  patchGroup,
  patchGroupMembers,
  getUsersByUsername,
};
