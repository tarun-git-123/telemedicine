import mongoose, { Document, Schema } from "mongoose";

export interface IAppointment extends Document {
  doctor: mongoose.Types.ObjectId;
  patient: mongoose.Types.ObjectId;
  date: Date;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  reason: string;
  meetingLink?: string;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    patient: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
    },

    reason: {
      type: String,
      required: true,
    },

    meetingLink: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model<IAppointment>(
  "Appointment",
  AppointmentSchema
);

export default Appointment;
