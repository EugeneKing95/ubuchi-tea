import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryName: String,
    categoryDescription: String,
    categoryImage: String,
    categorySlug: String,
  },
  { timestamps: true },
);

export const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
