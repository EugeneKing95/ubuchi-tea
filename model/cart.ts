import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: "true",
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
  },
});

export const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);
