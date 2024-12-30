import Bill from "../models/BillSchema.js";

// get all bills
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
