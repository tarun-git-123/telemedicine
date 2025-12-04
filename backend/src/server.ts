import express, { Request, Response } from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());

const PORT = 8000;

app.use("/api/auth", authRoutes);

app.get("/", (req:Request, res:Response) => {
  res.send("Telemedicine Backend is Running with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});