import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      reqired: true,
      type: String,
    },
    firstName: {
      reqired: true,
      type: String,
    },
    lastName: {
      reqired: true,
      type: String,
    },
    email: {
      reqired: true,
      type: String,
    },
    password: {
      reqired: true,
      type: String,
    },
    active: {
      reqired: false,
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
