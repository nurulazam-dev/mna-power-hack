import express from "express";

// import { authenticate, restrict } from "../auth/verifyToken.js";
import { authenticate } from "../auth/verifyToken.js";
import {
  createBill,
  deleteBill,
  getAllBills,
  updateBill,
} from "../Controllers/billController.js";
const router = express.Router();

router.get("/", authenticate, getAllBills);
// router.post("/", authenticate, restrict(["billingOfficer"]), createBill);
router.post("/", authenticate, createBill);
// router.put("/:id", authenticate, restrict(["accountant"]), updateBill);
router.put("/:id", authenticate, updateBill);
// router.delete("/:id", authenticate, restrict(["admin"]), deleteBill);
router.delete("/:id", authenticate, deleteBill);

export default router;
