import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true},
  password: { type: String, required: true},
  role: { type: String, enum: ["Admin", "User"], required: true}
})

export const User = mongoose.model("User", UserSchema );
