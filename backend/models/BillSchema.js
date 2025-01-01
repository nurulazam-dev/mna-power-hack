import mongoose from "mongoose";

const BillSchema = new mongoose.Schema({
  billingHolder: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    unique: [true, "Phone number is unique"],
    match: [/^[0-9]{11}$/, "Phone number isn't 11 characters"],
  },
  amount: {
    type: Number,
    required: [true, "Amount is required"],
    min: [0, "Amount cannot be negative"],
  },
  status: {
    type: String,
    enum: ["Paid", "Unpaid"],
    default: "Unpaid",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Bill", BillSchema);
