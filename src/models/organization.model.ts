import mongoose, { Schema, Document } from "mongoose";

interface Organization extends Document {
    name: string;
    description?: string;
    email: string;
    phone?: string;
    address?: string;
    website?: string;
    logo?: string;
}

const OrganizationSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    email: { type: String, unique: true, required: true },
    phone: { type: String },
    address: { type: String },
    website: { type: String },
    logo: { type: String },
},
{
    timestamps: true
});

export const Organization = mongoose.model<Organization>("Organization", OrganizationSchema);
