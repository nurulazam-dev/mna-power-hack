import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is unique"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    unique: [true, "Phone number is unique"],
    match: [/^[0-9]{11}$/, "Phone number isn't 11 characters"],
  },
  password: { type: String, required: [true, "Password is required"] },
  role: {
    type: String,
    enum: ["billingOfficer", "accountant", "admin"],
    default: "billingOfficer",
  },
});

export default mongoose.model("User", UserSchema);
