import User from "@/models/user";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";

export async function GET( req, { params }) {
  await connectDB();
  const id = (await params).id;
  const user = await User.findById(id);
  return new NextResponse(JSON.stringify(user));
}

