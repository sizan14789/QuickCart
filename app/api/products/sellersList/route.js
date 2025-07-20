import connectDB from "@/config/db";
import Product from "@/models/product";
import { auth  } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();
  // const userId = "user_2wRWuxOAXTX2rKPrDP410Tyh0WP"
  console.log(userId)

  connectDB();
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(products), {status:200});
  } catch (error) {
    console.log(error);
  }
  return new NextResponse(JSON.stringify(["No products"]));
};
