import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true } // Changed type to String
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
