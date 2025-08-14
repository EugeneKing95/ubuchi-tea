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
  mongoose.model.Category || mongoose.model("Categories", categorySchema);
