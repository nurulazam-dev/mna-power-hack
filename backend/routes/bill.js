import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";
import {
  createBill,
  deleteBill,
  getAllBills,
  getBill,
  updateBill,
} from "../Controllers/billController.js";

const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), getAllBills);
router.post(
  "/",
  authenticate,
  restrict(["billingOfficer", "admin"]),
  createBill
);
router.get("/:id", authenticate, getBill);
router.put("/:id", authenticate, restrict(["accountant", "admin"]), updateBill);
router.delete("/:id", authenticate, restrict(["admin"]), deleteBill);

export default router;
