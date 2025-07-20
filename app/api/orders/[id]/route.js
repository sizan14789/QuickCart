import connectDB from "@/config/db";
import Order from "@/models/order";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req, {params}){
  const id = (await params).id;
  await connectDB();
  const order = await Order.findById(id);
  return new NextResponse(JSON.stringify(order)); 
}

export async function DELETE(req, {params}){
  await connectDB();

  const orderId = (await params).id;
  const order = await Order.findById(orderId);
  
  const userId=order.userId;
  const user = await User.findById(userId);
  const userOrders = user.orders;
  const syncedUserOrders = userOrders.filter((order)=>{
    return order !== orderId;
  })
  await User.findByIdAndUpdate( userId,{ orders:syncedUserOrders });

  await order.deleteOne();

  return new NextResponse(JSON.stringify(order), {status:200});
}