"use client";

import { assets } from "@/assets/assets";
import Loader from "@/ui/loader/Loader";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductsList = () => {
  const [productsList, setProductsList] = useState();
  const [render, setRender] = useState(0);

  useEffect(() => {
    const getProductsList = async () => {
      const res = await fetch(`/api/products/seller-list`);
      const data = await res.json();
      setProductsList(data);
    };
    getProductsList();
  }, [render]);

  const handleProductDelete = async (id) => {
    const res = await fetch(`/api/products/seller-list/${id}`, {
      method: "delete",
    });
    if (res.status === 200) {
      toast.success("Product deleted");
    } else {
      toast.error("Failed");
    }
    setRender((prev) => prev + 1);
  };

  if (!productsList) {
    return (
      <div className="min-w-2/3">
        <Loader />
      </div>
    );
  } else
    return (
      <div className=" border-gray-300 border-1 rounded-md text-gray-700 border-b-0">
        <div className="grid grid-cols-1 md:grid-cols-5 grow  border-gray-300 border-b-1 text-black">
          <h2 className="md:col-span-2 px-6 py-2">Product</h2>
          <h2 className=" px-4 py-2 hidden md:flex">Category</h2>
          <h2 className=" px-4 py-2 hidden md:flex">Price</h2>
          <h2 className=" px-4 py-2 hidden md:flex">Action</h2>
        </div>

        {productsList.map((curElem) => {
          const { name, image, offerPrice, category, _id } = curElem;

          return (
            <div
              className="grid grid-cols-1 md:grid-cols-5 grow py-2 border-gray-300 border-b-1"
              key={_id}
            >
              <div className="col-span-2 px-6 py-2 flex items-center gap-2">
                <figure className=" rounded-xl ">
                  <Image
                    src={image[0]}
                    alt={name}
                    height={70}
                    width={70}
                    className="min-w-20"
                  />
                </figure>
                <h2>{name}</h2>
              </div>
              <div className=" px-4 hidden md:flex items-center py-2 ">
                <p>{category}</p>
              </div>
              <div className=" items-center hidden md:flex border-l-0 px-4 py-2 ">
                <p>${offerPrice}</p>
              </div>

              <div className=" px-4 flex gap-2 justify-center flex-col py-2 ">
                <Link
                  href={`/shop/${_id}`}
                  className="cursor-pointer  self-start px-4 flex gap-2 py-2 text-sm w-20 rounded duration-150 bg-orange-600 text-white text-medium hover:brightness-85"
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
                  className="cursor-pointer border-1 border-gray-300 self-start py-2 w-20 px-[1rem] text-sm rounded text-medium duration-150 bg-white hover:brightness-90"
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
