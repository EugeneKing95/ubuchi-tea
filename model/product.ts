import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: String,
    productSlug: String,
    productDescription: String,
    productImage: String,
    productCategory: String,
    producrQuantity: Number,
    productPrice: Number,
    productCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
      require: true,
    },
  },
  { timestamps: true },
);

export const Product =
  mongoose.model.Product || mongoose.model("Products", ProductSchema);
