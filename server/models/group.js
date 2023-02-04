import { Schema, model } from "mongoose";

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  active: {
    type: Boolean,
    default: true,
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  goals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Goal",
      default: [],
    },
  ],
});

export default model("Group", GroupSchema);
