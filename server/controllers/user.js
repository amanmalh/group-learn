import { createUser, fetchUsers, loginUser } from "../services/user.service.js";
const register = async (req, res) => {
  try {
    const data = await createUser(req);
    res.status(200).json(data);
  } catch (err) {
    const errorCode = err.code || 500;
    res.status(errorCode).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await loginUser(req);
    res.status(200).json(user);
  } catch (err) {
    const errorCode = err.code || 500;
    res.status(errorCode).json({ message: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await fetchUsers(req);
    res.status(200).json(users);
  } catch (err) {
    const errorCode = err.code || 500;
    res.status(errorCode).json({ message: err.message });
  }
};

const getUserById = (req, res) => {};

const update = async (req, res) => {};

const remove = async (req, res) => {};

export { register, login, update, remove, getUser, getUserById };
