import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://telemedicine_user:Qrk5OL5gvcUoot1L@telemedicine.uxoe99z.mongodb.net/?appName=telemedicine");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;