import mongoose from "mongoose";

const BillSchema = new mongoose.Schema(
  {
    billingHolder: { type: String, required: true },
    phone: {
      type: Number,
      required: true,
      unique: true,
      min: [11, "Must be at least 11"],
      max: 15,
    },
    amount: { type: Number, min: 1, required: true },
  },
  { timestamps: true, currentTime: () => Math.floor(Date.now() / 1000) }
);

export default mongoose.model("Bill", BillSchema);
