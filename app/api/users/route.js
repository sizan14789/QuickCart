import User from "@/models/user";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const user = new User(body);
  user.save();
  return new NextResponse(JSON.stringify(body));
}
