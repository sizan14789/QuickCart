import connectDB from "@/config/db";
import User from "@/models/user";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  const { userId } = await auth()
  const user = await User.findById(userId);  

  const cart = user.cartItems;
  const entries = Object.entries(cart);

  const orders = { ...user.orders }

  entries.forEach((entry) => {
    if (orders[entry[0]]) {
      orders[entry[0]] = orders[entry[0]] + entry[1];
    } else {
      orders[entry[0]] = entry[1];
    }
  })

  const updated = await User.findByIdAndUpdate(userId, { cartItems: {}, orders: orders }, { new: true });
  return new NextResponse(JSON.stringify(updated), { status: 200 });
}

