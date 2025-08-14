import connectToDatabase from "@/DB/config";
import { Category } from "@/model/category";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const { serchParams } = new URL(req.url);
    const id = serchParams.get("id");

    const deleteData = await Category.findByIdAndDelete(id);

    if (deleteData) {
      return NextResponse.json({
        success: true,
        massage: "Category Deleted Successfuly!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: " Failed to Delete the category. Please try again",
      });
    }
  } catch (error) {
    console.log("Error in Deleting a new Category", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong . Plese try again!",
    });
  }
}
