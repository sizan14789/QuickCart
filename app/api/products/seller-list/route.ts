import connectDB from "@/config/db";
import Product from "@/models/product";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";

export const GET = async () => {
  const { userId } = await auth();
  connectDB();
  try {
    const products = await Product.find({ userId: userId }).sort({createdAt: -1});
    return new NextResponse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
    toast.error("Couldn't retrieve data");
  }
  return new NextResponse(JSON.stringify(["No products"]));
};
