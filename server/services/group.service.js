import Group from "../models/group.js";
import { Types } from "mongoose";
const create = async (req) => {
  const admin = Types.ObjectId(req.user);
  let { name, description, members } = req.body;
  if (!description) description = "";
  if (!members) members = [];
  const group = new Group({
    name,
    description,
    members,
    admin,
  });
  const createdGroup = await group.save();
  return createdGroup;
};

const update = async (req) => {
  const { name, description } = req.body;
  const id = req.params.id;
  const admin = Types.ObjectId(req.user);
  const group = await Group.findById(id);

  if (!group || !group.active) {
    //TODO: throw error
    return;
  }

  if (!group.admin === admin) {
    //TODO: throw error
    return;
  }

  if (name) group.name = name;
  if (description) group.description = description;

  await group.save();
};

const remove = async (id) => {
  const admin = req.user;
  const group = Group.findOne({ _id: id });
  if (!group.active) {
    //TODO: throw error
    return;
  }
  if (!group.admin === admin) {
    //TODO: throw error
    return;
  }
  group.active = false;

  await group.save();
};

const addMembers = async (req) => {
  let { members } = req.body;
  const { id } = req.params;

  const admin = req.user;
  const group = await Group.findById(id);

  if (!group || !group.active) {
    //TODO: throw error
    return;
  }
  if (!group.admin === admin) {
    //TODO: throw error
    return;
  }

  const memberIds = group.members.map((member) => member.toString());
  for (const member of members) {
    if (!memberIds.includes(member)) group.members.push(Types.ObjectId(member));
  }

  return await group.save();
};

const removeMembers = async (req) => {
  const { members } = req.body;
  const { id } = req.params;
  const admin = req.user;
  const group = await Group.findById(id);

  if (!group || !group.active) {
    //TODO: throw error
    return;
  }

  if (!group.admin === admin) {
    //TODO: throw error
    return;
  }

  group.members = group.members.filter(
    (member) => !members.includes(member.toString())
  );

  return await group.save();
};

export { create, update, remove, addMembers, removeMembers };
