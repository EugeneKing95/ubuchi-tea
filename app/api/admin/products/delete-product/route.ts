import connectToDatabase from "@/DB/config";
import { Product } from "@/model/product";

import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 },
      );
    }
    const deleteData = await Product.findByIdAndDelete(id);
    if (deleteData) {
      return NextResponse.json({
        success: true,
        message: "Product Deleted successfully!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to Delete the Product. Please try again!",
      });
    }
  } catch {
    return NextResponse.json(
      { message: "Something went wrong Please try again!" },
      { status: 500 },
    );
  }
}
