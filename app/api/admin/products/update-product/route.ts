import connectToDatabase from "@/DB/config";
import { NextResponse } from "next/server";
import { Product } from "@/model/product";

export async function PUT(req: Request) {
  try {
    await connectToDatabase();

    const data = await req.json();
    const { name, _id, description, quantity, price, categoryID } = data;

    const saveData = await Product.findOneAndUpdate(
      _id,
      {
        productName: name,
        productDescription: description,
        productPrice: price,
        productQuantity: quantity,
        productCategory: categoryID,
      },
      { new: true },
    );

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "product  updated successfully!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to update the product . Please try again!",
      });
    }
  } catch (error) {
    console.log("Error in update a new product :", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again!",
    });
  }
}
