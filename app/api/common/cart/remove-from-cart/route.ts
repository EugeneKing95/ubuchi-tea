import connectToDatabase from "@/DB/config";
import { Cart } from "@/model/cart";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id)
      return NextResponse.json({
        success: true,
        message: "cart Item  ID is Required",
      });

    const deleteData = await Cart.findByIdAndDelete(id);

    if (deleteData) {
      return NextResponse.json({
        success: true,
        message: "cart Item  Deleted successfully!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to Delete the cart Item . Please try again!",
      });
    }
  } catch (error) {
    console.log("Error in deleting a cart item :", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again!",
    });
  }
}
