import User from "@/models/user";
import connectDB from "@/config/db.";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const id = await params.id;
  const user = await User.findById(id);
  return new NextResponse(JSON.stringify(user));
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const id = await params.id
  const deleteDUser = await User.findByIdAndDelete(id);
  return new NextResponse(JSON.stringify(deleteDUser));
}