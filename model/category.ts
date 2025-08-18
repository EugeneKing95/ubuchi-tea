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
  mongoose.models.Categories || mongoose.model("Categories", categorySchema);
