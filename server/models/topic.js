import { Schema, model } from "mongoose";

const TopicModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  owners: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  //TODO: Revisit this
  status: {
    type: String,
    default: "IN_PROGRESS",
  },
  forceClosed: {
    type: Boolean,
    default: false,
  },
  defaulters: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
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

export default model("Topic", TopicModel);
