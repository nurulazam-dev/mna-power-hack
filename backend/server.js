import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express, { json } from "express";
import { set, connect } from "mongoose";

import authRoutes from "./Routes/auth.js";
import billRoutes from "./Routes/bill.js";
import userRoutes from "./Routes/user.js";

config();

const app = express();
const port = process.env.PORT || 8000;

const corsOption = {
  origin: true,
};

// database connection
set("strictQuery", false);
const connectDB = async () => {
  try {
    /* connect(process.env.MONGODB_URL, {
      // connect(process.env.LOCAL_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); */
    // connect(process.env.LOCAL_DATABASE);
    connect(process.env.MONGODB_URL);
    console.log("MongoDB is connected");
  } catch (err) {
    console.log("MongoDB connection fail");
  }
};

// middlewares
app.use(cookieParser());
app.use(json());
app.use(cors(corsOption));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/bills", billRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Power Hack's Api is working");
});

app.listen(port, () => {
  connectDB();
  console.log("Power Hack's Server is running on port" + " " + port);
});
