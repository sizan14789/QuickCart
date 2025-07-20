"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const ProductsList = ({ productsList }) => {
  const [localProductsList, setLocalProductsList] = useState(productsList);

  const handleProductDelete = async (id) => {
    const updatedProductsList = localProductsList.filter((product)=>{
      return product._id!==id;
    })
    setLocalProductsList(updatedProductsList);
    const res = await fetch(`/api/products/sellersList/${id}`, {
      method: "delete",
    });
    if (res.status === 200) {
      toast.success("Product deleted");
    } else {
      toast.error("Failed");
    }
  };

  return (
    <div className="max-w-[75rem] border-gray-300 text-sm border-1 rounded-md text-gray-700 border-b-0">
      <div className="grid grid-cols-2 md:grid-cols-4 grow  border-gray-300 border-b-1 text-black">
        <h2 className=" px-6 py-2 flex justify-center items-center">Product</h2>
        <h2 className=" px-4 py-2 hidden md:flex justify-center items-center">Category</h2>
        <h2 className=" px-4 py-2 hidden md:flex justify-center items-center">Price</h2>
        <h2 className=" px-4 py-2 flex justify-center items-center">Action</h2>
      </div>

      {localProductsList.map((curElem) => {
        const { name, image, offerPrice, category, _id } = curElem;

        return (
          <div
            className="grid grid-cols-2 md:grid-cols-4 grow py-2 border-gray-300 border-b-1 "
            key={_id}
          >
            <div className=" px-6 py-2 flex flex-col lg:flex-row items-center gap-2">
              <figure className=" rounded-xl ">
                <Image
                  src={image[0]}
                  alt={name}
                  height={70}
                  width={70}
                  className="min-w-14 md:min-w-20"
                />
              </figure>
              <h2>{name}</h2>
            </div>
            <div className=" px-4 hidden md:flex justify-center items-center py-2 ">
              <p>{category}</p>
            </div>
            <div className=" hidden justify-center items-center md:flex border-l-0 px-4 py-2 ">
              <p>${offerPrice}</p>
            </div>

            <div className="px-4 flex gap-2 justify-center items-center flex-col xl:flex-row py-2 ">
              <Link
                href={`/shop/${_id}`}
                className="cursor-pointer px-4 flex gap-2 py-2 text-sm w-20 rounded duration-150 bg-orange-600 text-white text-medium hover:brightness-85"
              >
                <p>Visit</p>
                <Image
                  src={assets.redirect_icon}
                  alt="redirect-icon"
                  height={12}
                  width={12}
                ></Image>
              </Link>
              <button
                className="cursor-pointer border-1 border-gray-300 py-2 w-20 px-[1rem] text-sm rounded text-medium duration-150 bg-white hover:brightness-90"
                onClick={() => handleProductDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
