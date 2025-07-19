import connectDB from "@/config/db";
import User from "@/models/user";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId } = await auth();
    const cartData  = await req.json();
    await connectDB();
    const res = await User.findByIdAndUpdate(userId, {
      cartItems: cartData,
    });
    return new NextResponse(JSON.stringify(res));
  } catch (error) {
    console.log(error);
    return NextResponse.json("failed", { status: 500 });
  }
}


