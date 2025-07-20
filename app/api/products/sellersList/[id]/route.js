import connectDB from "@/config/db";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function DELETE(
  _,
  { params }) {
  await connectDB();
  const id = (await params).id;
  try {
    const productData = await Product.findByIdAndDelete(id).sort({createdAt: -1});
    return new NextResponse(JSON.stringify(productData));
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify("Error while deleting"));
  }
}
