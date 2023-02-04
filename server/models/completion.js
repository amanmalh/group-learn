import { Schema, model } from "mongoose";

const CompletionModel = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default model("Completion", CompletionModel);
