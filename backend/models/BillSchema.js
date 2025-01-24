import mongoose from "mongoose";

const BillSchema = new mongoose.Schema({
  billingHolder: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    unique: [true, "Phone number must be unique"],
    match: [/^[0-9]{11}$/, "Phone number must be exactly 11 digits"],
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
  dateline: {
    type: Date,
  },
  billAttacher: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    email: { type: String },
  },
  billUpdater: {
    type: String,
    required: false,
    trim: true,
  },
  updatedDate: {
    type: Date,
    required: false,
    // default: Date.now,
  },
});

BillSchema.index({ billAttacher: 1 });

BillSchema.pre("find", function (next) {
  this.populate("billAttacher", "_id email");
  next();
});

BillSchema.pre("findOne", function (next) {
  this.populate("billAttacher", "_id email");
  next();
});

export default mongoose.model("Bill", BillSchema);
