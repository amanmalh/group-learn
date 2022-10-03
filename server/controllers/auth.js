import User from "../models/user.js";
const register = (req, res) => {
  const newUser = new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: "####",
    active: false,
  });
  try {
    const dataToSave = newUser.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = (req, res) => {};

const logout = (req, res) => {};

export { register, login, logout };
