import connectDB from "@/config/db";
import User from "@/models/user";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB()
  const data = await req.json()
  const { userId } = await auth()
  const res = await User.findByIdAndUpdate(userId, { cartItems: data }, { new: true })
  return new NextResponse(res, { status: 200 })
} 