import Product from "@/models/product";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await connectDB();

  // getting searchParams
  const url = new URL(req.url);
 
  // search query implementation
  // const search = url.searchParams.get("search");
  // const query = search ? { title: { $regex: search, $options: "i" } } : {};

  // limit function for popular and shop section
  const popularLimit = url.searchParams.get("limit");
  const limit = popularLimit? Number.parseInt(popularLimit) : 10000;

  const dataFilter = {
    _id: 1,
    title: 1,
    image: 1,
    desc: 1,
    offerPrice: 1,
    rating: 1,
  };

  const productsData = await Product.find({}, dataFilter).limit(limit);

  return new NextResponse(JSON.stringify(productsData), { status: 200 });
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const product = new Product(body);
  await product.save();
  return new NextResponse(JSON.stringify(body));
}
