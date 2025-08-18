import connectToDatabase from "@/DB/config";
import { Category } from "@/model/category";
import { Product } from "@/model/product";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
  await connectToDatabase();

  try {
    await Category.init();

    const getData = await Product.find({}).populate(
      "productCategory",
      "categoryName categorySlug _id"
    );

    return NextResponse.json(
      {
        success: true,
        data: getData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in getting all Products:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Error in getting all Products. Please try again!",
      },
      { status: 500 }
    );
  }
}

