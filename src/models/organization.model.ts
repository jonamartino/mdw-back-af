import mongoose, { Schema, Document } from "mongoose";

interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
}

interface Organization extends Document {
  name: string;
  description?: string;
  email: string;
  phone?: string;
  address?: Address;
  website?: string;
  logo?: string;
}

const AddressSchema: Schema = new Schema(
  {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  { _id: false }
); // <---- IMPORTANT: Add this option);

const OrganizationSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    email: { type: String, unique: true, required: true },
    phone: { type: String },
    address: { type: AddressSchema, required: true },
    website: { type: String },
    logo: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Organization = mongoose.model<Organization>(
  "Organization",
  OrganizationSchema
);
