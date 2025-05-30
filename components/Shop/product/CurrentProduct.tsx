import Link from "next/link";
import React, { useEffect, useState } from "react";
import RatingBigger from "./RatingBigger";
import Image from "next/image";
import { singleProductInterface } from "@/types/Interfaces";
import Loader from "@/ui/loader/Loader";

const CurrentProduct = ({ id }: { id: string }) => {
  const [data, setData] = useState<singleProductInterface>();

  useEffect(() => {
    const productDetails = async () => {
      const res1 = await fetch(
        `/api/products/${id}`
      );
      const res2 = await res1.json();
      setData(res2);
    };
    productDetails();
  }, [id]);

  if(!data) return <Loader />
  else {
    const { name, image, description, offerPrice, price, category, rating } = data;
    return (
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 text-[#1f2937e6] gap-16">
          <div className="px-5 lg:px-16 xl:px-30 2xl:px-40  flex flex-col gap-4">
            <figure className="bg-gray-500/10 rounded-lg overflow-hidden">
              <Image
                src={image[0]}
                height={720}
                width={1080}
                alt={name}
                className="w-full h-auto object-cover"
              />
            </figure>
            <div className="grid grid-cols-4 gap-4">
              <figure className="bg-gray-500/10 rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={image[0]}
                  height={720}
                  width={1080}
                  alt={name}
                  className="w-full h-auto object-cover"
                />
              </figure>
            </div>
          </div>
          <div>
            <h2 className="text-3xl mb-4 font-medium">{name}</h2>
            <div className="flex items-center gap-3 mb-3">
              <RatingBigger rating={rating} />
              <p>({rating})</p>
            </div>
            <p>{description}</p>

            <div className="flex gap-4 mt-6 items-end">
              <p className="text-3xl font-medium">${offerPrice}</p>
              <p className="line-through">${price}</p>
            </div>

            <p className="h-0.5 w-full bg-gray-200 my-6" />

            <div className="grid grid-cols-2 grid-rows-3 mb-6">

              <h1 className="font-medium text-gray-600">Category</h1>
              <p className="text-gray-800/50">{category}</p>
            </div>

            <div className="flex gap-6">
              <button className="flex-1 bg-white cursor-pointer brightness-95 hover:brightness-90 py-3 border-1 border-gray-200 rounded-sm">
                Add to Cart
              </button>
              <button className="flex-1 border-1 border-orange-600 text-white font-medium bg-orange-600 rounded-sm cursor-pointer hover:bg-white hover:text-gray-600 duration-150 ">
                <Link href="/cart">Buy now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CurrentProduct;
