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
    const savedBill = await newBill.save();

    // newBill.logger();

    res.status(200).json({
      success: true,
      message: "Bill submitted",
      data: savedBill,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Bill isn't submitted",
      message: error.message,
    });
  }
};

// update bill controller
export const updateBill = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateBill = await Bill.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateBill) {
      return res.status(404).json({ message: "Bill not found" });
    }
    res.status(200).json({
      status: true,
      message: "Bill updated successfully",
      data: updateBill,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Failed to update the bill",
      error: error.message,
    });
  }
};

// delete bill controller
export const deleteBill = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteBill = await Bill.findByIdAndDelete(id);

    if (!deleteBill) {
      return res.status(400).json({
        status: "fail",
        error: "Bill not found.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully deleted the bill.",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Failed to delete the bill.",
      error: error.message,
    });
  }
};
