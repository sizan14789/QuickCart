import connectDB from "@/config/db";
import Product from "@/models/product";
// import { auth  } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  // const { userId } = await auth();
  // const userId = "user_2wRWuxOAXTX2rKPrDP410Tyh0WP"
  // console.log(userId)

  await connectDB();
  const products = await Product.find().sort({createdAt: 1})
  console.log(products)
  return new NextResponse(JSON.stringify(products), { status: 200 });
};
