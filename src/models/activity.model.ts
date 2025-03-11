import mongoose, { Schema, Document } from "mongoose";

interface Activity extends Document {
  title: string;
  description?: string;
  category: string;
  date: Date;
  time?: string;
  duration?: number; 
  price?: number;
  capacity?: number; 
  organization: mongoose.Schema.Types.ObjectId;
  isActive: boolean;
  isFull?: boolean;
}

const ActivitySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String },
    duration: { type: Number },
    price: { type: Number, default: 0 },
    capacity: { type: Number },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
    isActive: { type: Boolean, default: true },
    isFull: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

export const Activity = mongoose.model<Activity>("Activity", ActivitySchema);
