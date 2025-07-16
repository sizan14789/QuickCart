import { v2 as cloudinary } from "cloudinary";
import connectDB from "@/config/db";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import authSeller from "@/lib/authSeller";
import toast from "react-hot-toast";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* eslint-disable */
export async function POST(req) {
  const { userId } = getAuth(req);
  const isSeller = await authSeller(userId);
  /* eslint-enable */
  if (!isSeller) {
    return NextResponse.json({ success: false, message: "not authorized" });
  }

  const formData = await req.formData();
  const name = formData.get("name");
  const description = formData.get("description");
  const productPrice = formData.get("productPrice");
  const offerPrice = formData.get("offerPrice");
  const category = formData.get("category");
  const rating = formData.get("rating")

  const files = formData.getAll("images");

  const result = await Promise.all(
    files.map(async (file) => {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "auto" },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
        stream.end(buffer);
      });
    })
  );

  const image = result.map((result) => result.secure_url);

  await connectDB();
  try {
    const product = new Product({
      name: name,
      description: description,
      offerPrice: offerPrice,
      price: productPrice,
      userId: userId,
      image: image,
      rating: rating,
      category: category
    });
    product.save();
  } catch (error) {
    console.log(error);
    toast.error("Error in tryCatch")
  }
  return new NextResponse(JSON.stringify("Created"), {status: 201});
}
