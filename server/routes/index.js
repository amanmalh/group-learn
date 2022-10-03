import express from "express";
const router = express.Router();
import {
  getTopics,
  getTopic,
  addTopic,
  removeTopic,
  editTopic,
  addSubTopic,
} from "../controllers/topics.js";

import { register } from "../controllers/auth.js";
// routes go here

router.get("/topics", getTopics);
router.post("/user", register);
export default router;
