import cors from "cors";
import { config } from "dotenv";
import express, { json } from "express";
import { set, connect } from "mongoose";

// const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");

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
    await connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected");
  } catch (err) {
    console.log("MongoDB connection fail");
  }
};

// middlewares
app.use(json());
app.use(cors(corsOption));

// routes
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Power Hack's Api is working");
});

app.listen(port, () => {
  connectDB();
  console.log("Power Hack's Server is running on port" + " " + port);
});
