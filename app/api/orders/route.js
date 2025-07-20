import connectDB from "@/config/db";
import Order from "@/models/order";
import { NextResponse } from "next/server";

export async function GET(req) {
    await connectDB();
    const orders = await Order.find().sort({createdAt: -1});
    return new NextResponse(JSON.stringify(orders));
}

export async function POST(req) {
    await connectDB();
    const res = await req.formData();
    const body = Object.fromEntries(res.entries());
    const order = await Order.create(body);
    return new NextResponse(JSON.stringify(order), {status:200});
}
