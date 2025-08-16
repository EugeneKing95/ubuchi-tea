import connectToDatabase from "@/DB/config";
import { Product } from "@/model/product";
// import Product from "@/model/product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await connectToDatabase();
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 },
      );
    }

    const productData = await Product.findById(id).populate("productCategory");

    if (productData) {
      return NextResponse.json({
        success: true,
        data: productData,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Product not found",
      });
    }
  } catch (error) {
    console.log("Error in fetching product details:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again!" },
      { status: 500 },
    );
  }
}
