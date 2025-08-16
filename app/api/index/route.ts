import connectToDatabase from "@/DB/config";
import { NextResponse } from "next/server";
import { Category } from "@/model/category";
import { Product } from "@/model/product";

export async function GET() {
  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch counts for testing
    const categoryCount = await Category.countDocuments();
    const productCount = await Product.countDocuments();

    // Optional: Fetch a small sample of data
    const categories = await Category.find()
      .select("categoryName categorySlug")
      .limit(3);
    const products = await Product.find()
      .select("productsName productSlug productsCategory")
      .limit(3);

    return NextResponse.json(
      {
        success: true,
        message: "API is operational",
        data: {
          status: "healthy",
          categoryCount,
          productCount,
          categories: categories.map((cat: any) => ({
            categoryName: cat.categoryName,
            categorySlug: cat.categorySlug,
          })),
          products: products.map((prod: any) => ({
            productsName: prod.productsName,
            productSlug: prod.productSlug,
            productsCategory: prod.productsCategory,
          })),
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in GET /api:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 },
    );
  }
}
