import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      reqired: true,
      type: String,
      unique: true,
    },
    firstname: {
      reqired: true,
      type: String,
    },
    lastname: {
      reqired: true,
      type: String,
    },
    email: {
      reqired: true,
      type: String,
      unique: true,
    },
    password: {
      reqired: true,
      type: String,
    },
    profileImageUrl: {
      type: String,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
