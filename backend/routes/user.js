import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";
import {
  deleteUser,
  getAllUser,
  getAUser,
  getMyProfile,
  updatePassword,
  updateUser,
} from "../Controllers/userController.js";

const router = express.Router();

router.get("/:id", authenticate, restrict(["admin"]), getAUser);
router.get("/", authenticate, restrict(["admin"]), getAllUser);
router.put("/:id", authenticate, restrict(["admin"]), updateUser);
router.delete("/:id", authenticate, restrict(["admin"]), deleteUser);
router.get("/profile", authenticate, getMyProfile);
router.post(
  "/update-password",
  authenticate,
  restrict(["billingOfficer", "accountant", "admin"]),
  updatePassword
);

export default router;
