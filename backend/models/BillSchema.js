import mongoose from "mongoose";

const BillSchema = new mongoose.Schema(
  {
    billingHolder: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      min: [11, "Must be at least 11"],
      max: 15,
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
  },
  { timestamps: true }
);

export default mongoose.model("Bill", BillSchema);
