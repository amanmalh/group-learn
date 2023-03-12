import {
  create,
  update,
  remove,
  updateMembers,
  fetchGroups,
  fetchGroup,
} from "../services/group.service.js";

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

const patchGroupMembers = async (req, res) => {
  try {
    const group = await updateMembers(req);
    res.status(200).json(group);
  } catch (err) {
    const errorCode = err.code || 500;
    res.status(errorCode).json({ message: err.message });
  }
};

const getGroups = async (req, res) => {
  try {
    const group = await fetchGroups(req);
    res.status(200).json(group);
  } catch (err) {
    const errorCode = err.code || 500;
    res.status(errorCode).json({ message: err.message });
  }
};

const getGroup = async (req, res) => {
  try {
    const group = await fetchGroup(req);
    res.status(200).json(group);
  } catch (err) {
    const errorCode = err.code || 500;
    res.status(errorCode).json({ message: err.message });
  }
};

export { createGroup, updateGroup, patchGroupMembers, getGroups, getGroup };
