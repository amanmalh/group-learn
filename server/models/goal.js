import { Schema, model } from "mongoose";

const GoalModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  color: String,
  excludedMembers: [
    {
      type: Schema.Types.ObjectId,
      ref: User,
    },
  ],
  //TODO: Revisit this
  status: {
    type: String,
    default: "IN_PROGRESS",
  },
  topics: [
    {
      type: Schema.Types.ObjectId,
      ref: "Topic",
    },
  ],
});

export default model("Goal", GoalModel);
