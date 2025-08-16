import connectToDatabase from "@/DB/config";
import { Category } from "@/model/category";
import { Product } from "@/model/product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await connectToDatabase;
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const registercategoryModel = await Category.init();

    if (!id)
      return NextResponse.json({
        status: 400,
        success: false,
        message: "Plese provide Category id.",
      });

    const getData = await Product.find({ productCategory: id }).populate(
      "productCategory",
      "categoryName CategorySlug _id",
    );
    if (getData) {
      return NextResponse.json({ success: true, data: getData });
    } else {
      return NextResponse.json({
        status: 204,
        success: false,
        message: "No Product found.",
      });
    }
  } catch (error) {
    console.log("Error in Getting product by id:", error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Something went wrong . Please try again!",
    });
  }
}
