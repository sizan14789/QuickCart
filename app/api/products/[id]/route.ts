import Product from "@/models/product";
import connectDB from "@/config/db.";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const id = (await params).id;
  const productData = await Product.findById(id);
  return new NextResponse(JSON.stringify(productData));
}

