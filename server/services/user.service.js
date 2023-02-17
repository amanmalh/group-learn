import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { ERROR_CODE } from "../utils/error.js";

const signJwt = (id, email) => {
  const token = jwt.sign({ id, email }, process.env.TOKEN_KEY, {
    expiresIn: "5h",
  });

  return token;
};

const createUser = async (req) => {
  const { username, email } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);
  const existingUser = await User.findOne({
    $or: [{ username, email }],
  });
  if (existingUser) throw { message: "User already exists." };

  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    const user = newUser.save();
    user.token = signJwt(user._id, user.email);
    return user;
  } catch (error) {
    // TODO: check for bad request here
    throw {
      code: ERROR_CODE.INTERNAL_SERVER_ERROR,
      message: "Unable to save user to database.",
      err: error,
    };
  }
};

const loginUser = async (req) => {
  const { id, password } = req.body;
  let user = await User.findOne({
    $or: [{ username: id }, { email: id }],
  });
  if (!user) throw { code: ERROR_CODE.NOT_FOUND, message: "No user found" };
  const encryptedPassword = user.password;
  const passwordValid = await bcrypt.compare(password, encryptedPassword);
  if (!passwordValid)
    throw { code: ERROR_CODE.UNATHORIZED, message: "Invalid password" };
  const { _id, username, email, firstname, lastname } = user;
  const userInfo = { _id, username, email, firstname, lastname };
  userInfo.token = signJwt(user._id, user.email);
  return userInfo;
};

const fetchUserById = async (req) => {
  const id = req.params.id;
  const fetchedUser = await User.findById(id);

  if (!fetchedUser) {
    //throw error
  }
  const user = getThinUser(fetchedUser);
  return user;
};

const fetchUsers = async (req) => {
  const isPrefixed = req.query.prefix;
  let filters = Object.keys(req.query);
  filters = filters.filter((key) => key !== "prefix");
  console.log(req.query);
  if (filters.length === 0) {
    return;
  }
  const searchFilter = filters[0];
  const searchFilterValue = req.query[searchFilter];

  let fetchedUsers = [];

  if (isPrefixed) {
    fetchedUsers = await User.find({
      username: { $regex: new RegExp(`^${searchFilterValue}`) },
    });
  } else {
    fetchedUsers = await User.find({ username: searchFilterValue });
  }
  console.log("here");
  console.log(fetchedUsers);
  return fetchedUsers.map((user) => getThinUser(user));
};

const getThinUser = (user) => {
  const { _id, firstname, lastname, email, username } = user;
  return { id: _id, firstname, lastname, email, username };
};

export { createUser, loginUser, fetchUsers, fetchUserById };
