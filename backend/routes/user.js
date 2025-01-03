import express from "express";

// import { authenticate, restrict } from "../auth/verifyToken.js";

import {
  deleteUser,
  getAllUser,
  getAUser,
  getMyProfile,
  updateUser,
} from "../Controllers/userController.js";
const router = express.Router();

// router.get("/:id", authenticate, getAUser);
// router.get("/", authenticate, restrict(["admin"]), getAllUser);
// router.put("/:id", authenticate, restrict(["admin"]), updateUser);
// router.delete("/:id", authenticate, restrict(["admin"]), deleteUser);
router.get("/:id", getAUser);
router.get("/", getAllUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/profile", getMyProfile);

export default router;
