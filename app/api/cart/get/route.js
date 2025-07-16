import connectDB from "@/config/db";
import User from "@/models/user";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { userId } = await auth();

  await connectDB();
  const user = await User.findById(userId);
  const cartData = user.cartItems;
  return new NextResponse(JSON.stringify(cartData));
};
