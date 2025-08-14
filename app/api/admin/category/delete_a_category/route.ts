import connectToDatabase from "@/DB/config";
import { Category } from "@/model/category";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Category ID is required" },
        { status: 400 },
      );
    }

    const deleteData = await Category.findByIdAndDelete(id);

    if (deleteData) {
      return NextResponse.json({
        success: true,
        message: "Category deleted successfully!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to delete the category. Please try again!",
      });
    }
  } catch (error) {
    console.log("Error in deleting category:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again!" },
      { status: 500 },
    );
  }
}
