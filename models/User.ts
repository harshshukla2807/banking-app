import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  phone: string;

  customerId: string;
  accountNumber: string;
  accountType: string;
  branch: string;
  ifsc: string;

  balance: number;

  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    customerId: {
      type: String,
      required: true,
      unique: true,
    },

    accountNumber: {
      type: String,
      required: true,
      unique: true,
    },

    accountType: {
      type: String,
      default: "Savings Account",
    },

    branch: {
      type: String,
      default: "Delhi Main Branch",
    },

    ifsc: {
      type: String,
      default: "HDFC0001234",
    },

    balance: {
      type: Number,
      default: 50000,
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;