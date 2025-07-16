import Product from "@/models/product";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  // getting searchParams
  const url = new URL(req.url);

  // search query implementation
  const search = url.searchParams.get("search");

  const query = search ? { name: { $regex: search, $options: "i" } } : {} ;
  

  // limit function for popular and shop section
  const popularLimit = url.searchParams.get("limit");
  const limit = popularLimit ? Number.parseInt(popularLimit) : 10000;

  const dataFilter = {
    _id: 1,
    name: 1,
    image: 1,
    description: 1,
    offerPrice: 1,
    rating: 1,
  };

  const productsData = await Product.find(query, dataFilter).limit(limit).sort({createdAt: -1});

  return new NextResponse(JSON.stringify(productsData), { status: 200 });
}
