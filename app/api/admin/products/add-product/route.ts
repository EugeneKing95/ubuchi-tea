// console.log("Products route called");

import connectToDatabase from "@/DB/config";
import { NextResponse } from "next/server";
import Product from "@/models/Product";
import Joi from "joi";

const AddProductSchema = Joi.object({
  productsName: Joi.string().required(),
  productsPrice: Joi.number().required(),
  productsDescription: Joi.string().required(),
  ProductImage: Joi.string().required(),
  productsCategory: Joi.required(),
  productsQuantity: Joi.number().required(),
});

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();

    const {
      productsName,
      productsPrice,
      productsDescription,
      ProductImage,
      productsCategory,
      productsQuantity,
    } = data;

    const { error } = AddProductSchema.validate(data);
    console.log(data);

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message.replace(/["']+/g, ""),
      });
    }

    const saveProduct = await Product.create(data);

    if (saveProduct) {
      return NextResponse.json({
        success: true,
        message: "Product added successfully",
        data: saveProduct,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Product not added",
      });
    }
  } catch (error) {
    console.error("Error in POST /api/products:", error);
    return NextResponse.json({
      success: false,
      message: "something went weong. Please try again later.",
    });
  }
}
