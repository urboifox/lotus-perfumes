import mongoose from "mongoose";
import { perfumeSchema } from "@/lib/models/Perfume";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin", "superadmin"],
    default: "user",
  },
  address: {
    type: String,
    required: false,
    default: null,
  },
  favourites: [
    {
      type: perfumeSchema,
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
export { userSchema };
