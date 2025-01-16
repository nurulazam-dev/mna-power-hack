import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";

// authenticate
export const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;

  // check token is exists
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }
  try {
    const token = authToken.split(" ")[1];

    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;

    next();
  } catch (error) {
    if (error.name == "TokenExpiredError") {
      return res.status(401).json({ message: "Token is expired" });
    }

    return res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;

  let user;

  const billingOfficer = await User.findById(userId);
  const accountant = await User.findById(userId);
  const admin = await User.findById(userId);

  if (billingOfficer) {
    user = billingOfficer;
  }
  if (accountant) {
    user = accountant;
  }
  if (admin) {
    user = admin;
  }

  if (!roles.includes(user.role)) {
    return res
      .status(401)
      .json({ success: false, message: "You're not authorized" });
  }

  next();
};
