import connectDB from "@/config/db";
import User from "@/models/user";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  const { userId } = await auth()
  const user = await User.findById(userId);  
  const oldOrders = user.orders;

  const newOrders = await req.json();
  const orders = [
    ...oldOrders,
    ...newOrders
  ]

  const updated = await User.findByIdAndUpdate(userId, { cartItems: {}, orders: orders }, { new: true });
  return new NextResponse(JSON.stringify(updated), { status: 200 });
}

