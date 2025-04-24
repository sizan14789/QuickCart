import Product from "@/models/product";
import connectDB from "@/config/db.";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string
  }
}

export async function GET(
  req: Request,
  {
    params
  }: Params
) {
  await connectDB();
  const id = await params.id;
  const productData = await Product.findById(id);
  return new NextResponse(JSON.stringify(productData));
}

export async function UPDATE(req: Request) {
  return new NextResponse(JSON.stringify(req));
}

export async function DELETE(req: Request) {
  return new NextResponse(JSON.stringify(req));
}
