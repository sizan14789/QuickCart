import connectDB from "@/config/db";
import Order from "@/models/order";
import { NextResponse } from "next/server";

export async function GET(req, {params}){
  const id = (await params).id;
  await connectDB();
  const order = await Order.findById(id);
  return new NextResponse(JSON.stringify(order)); 
}

export async function DELETE(req, {params}){
  const id = (await params).id;
  await connectDB();
  const order = await Order.findByIdAndDelete(id);
  return new NextResponse(JSON.stringify(order));
}