import Bill from "../models/BillSchema.js";

// get all bills controller
export const getAllBills = async (req, res) => {
  try {
    const bills = await Bill.find({});

    res.status(200).json({
      success: true,
      message: "Successfully got all bills",
      data: bills,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Bills not found" });
  }
};

// create a bill controller
export const createBill = async (req, res, next) => {
  try {
    const newBill = new Bill(req.body);
    //   const savedBill = await newBill.save();

    newBill.logger();

    res.status(200).json({
      success: true,
      message: "Bill submitted",
      data: newBill,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
