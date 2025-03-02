import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
  name: string;
  lastname: string;
  birthday: Date;
  email: string;
  isAdmin: boolean;
  firebaseUid?: string;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String },
    lastname: { type: String },
    birthday: { type: Date },
    email: { type: String, unique: true },
    isAdmin: { type: Boolean, default: false },
    firebaseUid: { type: String },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<User>("User", UserSchema);
