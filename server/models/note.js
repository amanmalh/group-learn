import { Schema, model } from "mongoose";

const NoteModel = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    addedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default model("Note", NoteModel);
