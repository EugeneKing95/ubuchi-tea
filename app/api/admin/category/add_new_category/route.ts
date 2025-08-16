import connectToDatabase from "@/DB/config";
import { Category } from "@/model/category";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddCategorySchema = Joi.object({
  categoryName: Joi.string().required(),
  categoryDescription: Joi.string().required(),
  categoryImage: Joi.string().required(),
  categorySlug: Joi.string().required(),
});

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const { categoryName, categoryDescription, categoryImage, categorySlug } =
      data;
    const { error } = AddCategorySchema.validate(data);
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message.replace(/["']+/g, ""),
      });
    }
    const saveCategory = await Category.create(data);
    if (saveCategory) {
      return NextResponse.json({
        success: true,
        message: "Category added successfully",
        data: saveCategory,
      });
    }
  } catch {
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
}
