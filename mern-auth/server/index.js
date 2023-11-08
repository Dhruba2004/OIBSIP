import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser';
import authRoute from "./routes/auth.js";
dotenv.config()
const app = express();
app.use(cors());


app.use(cookieParser());
app.use(express.json());

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});


const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  connectToDatabase();
  console.log("Connected to the backend on port " + PORT);
});
app.use("/api/auth", authRoute);

