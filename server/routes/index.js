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
// routes go here

router.get("/topics", getTopics);
export default router;
