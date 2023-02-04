import express from "express";
const router = express.Router();
import { register, login, update, remove } from "../controllers/auth.js";
import {
  addMembersToGroup,
  createGroup,
  updateGroup,
} from "../controllers/group.js";
import { auth } from "../middlewares/auth.js";
// import { createGoal, updateGoal, removeGoal } from '../controllers/goal'

// auth routes
router.post("/user", register);
router.post("/login", login);
router.patch("/user/{id}", update);
router.delete("/user/{id}", remove);

// group routes
router.post("/group", auth, createGroup);
router.patch("/group/:id", auth, updateGroup);
router.patch("/group/:id/members", auth, addMembersToGroup);

// goal routes
// router.post('/goal', createGoal)
// router.patch('/goal/{id}', updateGoal)
// router.delete('/goal/{id}', removeGoal)

export default router;
