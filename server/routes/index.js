import express from "express";
const router = express.Router();
import {
  register,
  login,
  update,
  remove,
  getUserById,
  getUser,
} from "../controllers/user.js";
import {
  createGroup,
  getGroups,
  patchGroupMembers,
  updateGroup,
} from "../controllers/group.js";
import { auth } from "../middlewares/auth.js";
// import { createGoal, updateGoal, removeGoal } from '../controllers/goal'

// auth routes
router.post("/user", register);
router.post("/login", login);
router.get("/user/:id", auth, getUserById);
router.get("/user", auth, getUser);
router.patch("/user/{id}", update);
router.delete("/user/{id}", remove);

// group routes
router.post("/group", auth, createGroup);
router.patch("/group/:id", auth, updateGroup);
router.patch("/group/:id/members", auth, patchGroupMembers);
router.get("/groups", auth, getGroups);
// goal routes
// router.post('/goal', createGoal)
// router.patch('/goal/{id}', updateGoal)
// router.delete('/goal/{id}', removeGoal)

export default router;
