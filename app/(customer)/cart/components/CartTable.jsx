"use client";

import Image from "next/image";
import { useState } from "react";
import { BsCartX } from "react-icons/bs";

const CartTable = ({ userId, cartData, productDetails }) => {
  const [localCart, setLocalCart] = useState(cartData);
  const [localProductDetails, setLocalProductDetails] = useState(productDetails);
  
  const syncUserCart = async (dummy) => {
    try {
      await fetch(`/api/users/${userId}/cartItems`, {
        method: "post",
        body: JSON.stringify(dummy),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantity = (key, value) => {
    if (localCart[key] === 1 && value === -1) return;
    const dummy = {...localCart };
    dummy[key] = dummy[key] + value;
    setLocalCart(dummy);
    syncUserCart(dummy);
  };

  const adjustProductsData = (deleteId) => {
    const adjustedProductDetails = localProductDetails.filter((product) => {
      return product._id !== deleteId;
    });
    setLocalProductDetails(adjustedProductDetails);
  };

  const handleDelete = (id) => {
    const dummy = { ...localCart };
    delete dummy[id];
    syncUserCart(dummy);
    adjustProductsData(id);
    setLocalCart(dummy);
  };

  return (
    <>
      <div className="p-2 grid grid-cols-3 md:grid-cols-5 mb-4">
        <h2 className="md:col-span-2 flex justify-center md:justify-start">
          Product
        </h2>
        <p className="hidden md:block">Price</p>
        <p className="flex justify-center">Quantity</p>
        <p className="flex justify-center md:justify-start">Subtotal</p>
      </div>
      {localProductDetails.map(({ _id, image, name, offerPrice }) => {
        return (
          <div
            className="grid rounded-b-md grid-cols-3 md:grid-cols-5 mb-4"
            key={_id}
          >
            <figure className=" flex md:col-span-2 items-center md:items-start gap-4 flex-col md:flex-row">
              <Image
                height={200}
                width={200}
                alt={name}
                src={image[0]}
                className="object-cover rounded-md max-w-10 md:max-w-20"
              />
              <h2 className="text-sm self-center text-gray-700 ">{name}</h2>
            </figure>
            <p className="text-sm items-center hidden md:flex">${offerPrice}</p>
            <div className="text-sm gap-2 justify-center items-center flex">
              <button
                className="cursor-pointer  text-2xl text-black"
                onClick={() => handleQuantity(_id, -1)}
              >
                -
              </button>
              <p>{localCart[_id]}</p>
              <button
                className="cursor-pointer  text-2xl text-orange-600"
                onClick={() => handleQuantity(_id, 1)}
              >
                +
              </button>
            </div>
            <div className="text-sm flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 ">
              <p>
                {offerPrice}x{localCart[_id]}=
                <span className="font-semibold">
                  ${localCart[_id] * offerPrice}
                </span>
              </p>
              <button
                className="cursor-pointer text-red-500 text-2xl"
                onClick={() => handleDelete(_id)}
              >
                <BsCartX />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartTable;
