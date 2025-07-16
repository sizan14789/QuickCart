import User from "@/models/user";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";

export async function GET( req, { params }) {
  await connectDB();
  const id = (await params).id;
  const user = await User.findById(id);
  return new NextResponse(JSON.stringify(user));
}

export async function POST( req, { params }) {
  await connectDB();
  const id = (await params).id;
  const res = await req.json();
  const user = await User.findById(id);
  const orders = {...user.orders}
  const keys = Object.keys(res);

  keys.forEach((key)=>{
    if(orders[key]){
      console.log(orders[key])
      orders[key] = orders[key]+res[key];
    } else{
      orders[key] = res[key];
    }
  })

  const { name, email, imageUrl, cartItems, _id } = user;

  const body = {
    _id,
    name,
    email,
    imageUrl,
    cartItems,
    orders: orders
  }

  const updated = await User.findByIdAndUpdate(id, body, {new: true});
  return new NextResponse(JSON.stringify(updated));
}

