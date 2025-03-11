import mongoose, { Schema, Document } from "mongoose";

export type UserRole = "user" | "organization";

interface User extends Document {
  name: string;
  lastname: string;
  birthday: Date;
  email: string;
  isAdmin: boolean;
  firebaseUid?: string;
  role: UserRole;
  organization?: mongoose.Types.ObjectId; // Referencia a la organización si es de tipo "organization"
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String },
    lastname: { type: String },
    birthday: { type: Date },
    email: { type: String, unique: true },
    isAdmin: { type: Boolean, default: false },
    firebaseUid: { type: String },
    role: { type: String, enum: ["user", "organization"], default: "user" },
    organization: { type: Schema.Types.ObjectId, ref: "Organization", default: null }
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<User>("User", UserSchema);
