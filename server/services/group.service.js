import Group from "../models/group.js";
import { Types } from "mongoose";
const create = async (req) => {
  const admin = Types.ObjectId(req.user);
  let { name, description, members } = req.body;
  if (!description) description = "";
  if (!members) members = [admin];
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

const updateMembers = async (req) => {
  const memberOperation = req.body;
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

  for (const member of memberOperation) {
    if (member.id === admin) continue;
    if (member.operation === "add") {
      if (!memberIds.includes(member.id))
        group.members.push(Types.ObjectId(member.id));
    }
    if (member.operation === "remove") {
      const removeIndex = memberIds.indexOf(member.id);
      if (removeIndex !== -1) group.members.splice(removeIndex, 1);
    }
  }

  const updatedGroup = await group.save();

  return await updatedGroup.populate({
    path: "members",
    select: "firstname lastname username email",
  });
};

const fetchGroups = async (req) => {
  const userId = req.user;

  const group = await Group.find({ members: Types.ObjectId(userId) })
    .populate("members")
    .select("_id name description members admin goals");

  return group;
};

const fetchGroup = async (req) => {
  const { id } = req.params;

  const group = await Group.findById(id)
    .populate("members")
    .select("_id name description members admin goals");

  if (!group) return null;

  return group;
};

export { create, update, remove, updateMembers, fetchGroups, fetchGroup };
