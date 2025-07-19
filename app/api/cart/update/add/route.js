import connectDB from "@/config/db";
import User from "@/models/user";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  
  const body = await req.json()
  const productId = body.id

  const { userId } = await auth();
  const cartDataRes = await User.findById(userId);
  const cartData = cartDataRes.cartItems
  
  if (cartData[productId]) {
    cartData[productId] += 1;
  } else {
    cartData[productId] = 1;
  }

  const res = await User.findByIdAndUpdate(userId, {
    cartItems: cartData
  });

  return new NextResponse(JSON.stringify(res), { status: 200 });
}
