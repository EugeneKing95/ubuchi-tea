import connectToDatabase from "@/DB/config";
import Product from "@/model/product";
import Category from "@/model/category";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await connectToDatabase();

  try {
    const registerCategoryModel = await Category.init();

    const getData = await Product.find({}).populate(
      "productCategory",
      "categoryName categorySlug _id",
    );

    if (getData) {
      return NextResponse.json({
        success: true,
        data: getData,
        status: 204,
      });
    }
  } catch (error) {
    console.log("Error in getting all Products:", error);
    return NextResponse.json({
      status: 500,
      message: " Error in getting all Products Please try again!",
      success: false,
    });
  }
}
