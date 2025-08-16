import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productSlug: { type: String, required: true, unique: true },
    productDescription: String,
    productImage: String,
    productQuantity: { type: Number, default: 0 },
    productPrice: { type: Number, required: true },

    // Relationship to Category
    productCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
      required: true,
    },
  },
  { timestamps: true },
);

export const Product =
  mongoose.models.Products || mongoose.model("Products", ProductSchema);
