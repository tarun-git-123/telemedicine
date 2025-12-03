import express, { Request, Response } from "express";
import connectDB from "./config/db";

const app = express();
connectDB();

app.use(express.json());
const PORT = 5000;

app.get("/", (req:Request, res:Response) => {
  res.send("Telemedicine Backend is Running with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});