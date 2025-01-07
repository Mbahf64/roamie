import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the User document
interface IUser extends Document {
  email: string;
  password: string;
  verified: boolean;
  verificationCode?: string;
  verificationCodeValidation?: number;
  forgotPasswordCode?: string;
  forgotPasswordCodeValidation?: number;
}

// Define the User schema
const userSchema: Schema<IUser> = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required!'],
      trim: true,
      unique: true,
      minLength: [5, 'Email must have 5 characters!'],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password must be provided!'],
      trim: true,
      select: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      select: false,
    },
    verificationCodeValidation: {
      type: Number,
      select: false,
    },
    forgotPasswordCode: {
      type: String,
      select: false,
    },
    forgotPasswordCodeValidation: {
      type: Number,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the User model
export const User = mongoose.model<IUser>('User', userSchema);


