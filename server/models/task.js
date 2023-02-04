import { Schema, model } from "mongoose";

const TaskModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
  completedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Completion",
    },
  ],
});

export default model("Task", TaskModel);
