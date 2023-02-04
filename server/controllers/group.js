import {
  create,
  update,
  remove,
  addMembers,
  removeMembers,
} from "../services/group.js";

const createGroup = async (req, res) => {
  try {
    const group = await create(req);
    res.status(200).json(group);
  } catch (err) {
    const errorCode = err.code || 500;
    res.status(errorCode).json({ message: err.message });
  }
};

const updateGroup = async (req, res) => {
  try {
    const group = await update(req);
    res.status(200).json(group);
  } catch (err) {
    const errorCode = err.code || 500;
    res.status(errorCode).json({ message: err.message });
  }
};

const removeGroup = async (req, res) => {};

const addMembersToGroup = async (req, res) => {
  try {
    const group = await addMembers(req);
    res.status(200).json(group);
  } catch (err) {
    const errorCode = err.code || 500;
    res.status(errorCode).json({ message: err.message });
  }
};

export { createGroup, updateGroup, removeGroup, addMembersToGroup };
