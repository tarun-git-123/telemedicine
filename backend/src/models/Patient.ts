import mongoose, { Document, Schema } from "mongoose";

export interface IPatient extends Document {
    user: mongoose.Types.ObjectId;
    age: number;
    gender: "male" | "female" | "other";
    bloodGroup?: string;
    medicalHistory: string[];
    address: string;
    phone: string;
}

const PatientSchema = new Schema<IPatient>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        age: {
            type: Number,
            required: true,
        },

        gender: {
            type: String,
            enum: ["male", "female", "other"],
            required: true,
        },

        bloodGroup: {
            type: String,
            default: "",
        },

        medicalHistory: {
            type: [String], // Example: ["Diabetes", "High BP"]
            default: [],
        },

        address: {
            type: String,
            required: true,
        },

        phone: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Patient = mongoose.model<IPatient>("Patient", PatientSchema);

export default Patient;
