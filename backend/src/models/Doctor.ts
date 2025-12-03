import mongoose, { Document, Schema } from "mongoose";

export interface IDoctor extends Document {
    user: mongoose.Types.ObjectId;
    specialization: string;
    experience: number;
    consultationFee: number;
    clinicAddress: string;
    availability: string[];
    isApproved: boolean;
}

const DoctorSchema = new Schema<IDoctor>({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    specialization: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    consultationFee: {
        type: Number,
        required: true,
    },
    clinicAddress: {
        type: String,
        required: true,
    },
    availability: {
        type: [String],
        required: true,
    },
}, { timestamps:true});

const Doctor = mongoose.model<IDoctor>("Doctor", DoctorSchema);

export default Doctor