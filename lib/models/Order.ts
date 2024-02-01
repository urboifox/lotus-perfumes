import mongoose from "mongoose";
import { perfumeSchema } from "./Perfume";
import { userSchema } from "./User";

const orderSchema = new mongoose.Schema({
  perfume: {
    type: perfumeSchema,
  },
  user: {
    type: userSchema,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "delivered", "canceled"],
    default: "pending",
  },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
export { orderSchema };
