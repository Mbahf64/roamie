const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const getAuthRouter = require("./routes/authRouter");


require("dotenv").config();

// Type imports
import type { Request, Response } from "express";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json({ strict: false }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Database connected"))
  .catch((err: Error) => console.error(err));

// Health check
app.get("/", (req: Request, res: Response): void => {
  res.json({ message: "Health check succeeded" });
});

// Auth router
const authRouter = getAuthRouter();
app.use("/api/auth", authRouter);

// Start the server
app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
