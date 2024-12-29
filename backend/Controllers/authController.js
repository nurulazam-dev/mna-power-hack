import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1d",
    }
  );
};

export const register = async (req, res) => {
  const { email, password, name, role } = req.body;
  try {
    let user = null;

    if (role == "accountant") {
      user = await User.findOne({ email });
    }

    //check if user exist
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role == "accountant") {
      user = new User({
        name,
        email,
        password: hashPassword,
        role,
      });
    }

    await user.save();
    res
      .status(200)
      .json({ status: true, message: "User successfully created" });
  } catch (error) {
    res.status(500).json({ status: false, message: "User created fail" });
  }
};
