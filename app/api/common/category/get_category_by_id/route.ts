// import connectDB from "@/DB/connectDB";
import connectToDatabase from "@/DB/config";
import { Category } from "@/model/category";
import { NextResponse } from "next/server";
// import Category from "@/model/Category";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  await connectToDatabase();
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id)
      return NextResponse.json({
        status: 400,
        success: false,
        message: "Please provide category id.",
      });

    const getData = await Category.findById(id);
    if (getData) {
      return NextResponse.json({ success: true, data: getData });
    } else {
      return NextResponse.json({
        status: 204,
        success: false,
        message: "No categories found.",
      });
    }
  } catch (error) {
    console.log("Error in getting  categories by id:", error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Something went wrong. Please try again!",
    });
  }
}
