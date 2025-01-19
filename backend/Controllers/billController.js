import Bill from "../models/BillSchema.js";

// get all bills controller
export const getAllBills = async (req, res) => {
  try {
    const bills = await Bill.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Bills retrieved successfully",
      data: bills,
    });
  } catch (error) {
    console.error("Error fetching bills:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve bills",
      error: error.message,
    });
  }
};

// get all bills controller
export const getBill = async (req, res) => {
  const id = req.params.id;
  try {
    const bill = await Bill.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully got a bill",
      data: bill,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Bill not found" });
  }
};

// create a bill controller
export const createBill = async (req, res) => {
  try {
    const { billingHolder, phone, amount, status, dateline } = req.body;

    // const userId = req.user?.id;
    const userId = req.body.billAttacher;

    if (!userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const newBill = await Bill.create({
      billingHolder,
      phone,
      amount,
      status,
      dateline,
      billAttacher: userId,
    });

    res.status(201).json({
      message: "Bill added successfully",
      bill: newBill,
    });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({
      error: "Failed to add bill",
      details: error.message,
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
