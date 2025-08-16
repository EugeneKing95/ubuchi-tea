import { NextResponse } from "next/server";
import Joi from "joi";
import connectToDatabase from "@/DB/config";
import { Product } from "@/model/product";

const AddProductSchema = Joi.object({
  productName: Joi.string().required(),
  productDescription: Joi.string().required(),
  productImage: Joi.string().required(),
  productQuantity: Joi.number().required(),
  productSlug: Joi.string().required(),
  productPrice: Joi.number().required(),
  productCategory: Joi.required(),
});

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  await connectToDatabase();
  try {
    const data = await req.json();

    const {
      productCategory,
      productDescription,
      productImage,
      productName,
      productPrice,
      productQuantity,
      productSlug,
    } = data;

    const { error } = AddProductSchema.validate({
      productDescription,
      productCategory,
      productImage,
      productName,
      productPrice,
      productQuantity,
      productSlug,
    });

    if (error)
      return NextResponse.json({
        success: false,
        message: error.details[0].message.replace(/['"]+/g, ""),
      });

    const saveData = await Product.create(data);

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Product added successfully!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to add the Product. Please try again!",
      });
    }
  } catch (error) {
    console.log("Error in adding a new Product:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again!",
    });
  }
}
