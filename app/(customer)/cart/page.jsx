"use client";

import { useAppContext } from "@/context/AppContext";
import Loader from "@/ui/loader/Loader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Cart = () => {
  const [cartProductsDetails, setCartProductsDetails] = useState();
  const { cartItems } = useAppContext();
  const keysArray = Object.keys(cartItems) || {};
  const router = useRouter();

  useEffect(() => {
    const getCartData = async () => {
      setCartProductsDetails([]);
      if (keysArray.length == 0) {
        toast("Loading");
        return;
      }
      const productList = await Promise.all(
        keysArray.map(async (elem) => {
          const res = await fetch(`/api/products/${elem}`);
          let data = await res.json();
          return {
            ...data,
            quantity: cartItems[elem],
          };
        })
      );
      setCartProductsDetails(productList);
    };
    getCartData();
  }, [cartItems]);

  const handleCheckout = ()=>{
    if (keysArray.length==0){
      toast.error("No items in cart!")
    }
    else{
      router.push('/cart/checkout');
    }
  }

  if (cartProductsDetails===undefined) return <Loader />;

  return (
    <div className="box flex-1">
      <div className="flex flex-col ">
        <div className="flex md:flex-2 flex-col text-gray-700">
          <div className="flex justify-between ">
            <h2 className="relative mb-6 self-start text-4xl font-medium ">
              Your <span className="text-orange-600">Cart</span>
            </h2>

            <p className="text-gray-500">
              <span className="text-orange-600 text-xl">
                {cartProductsDetails.length}
              </span>{" "}
              items
            </p>
          </div>
          <hr className="text-gray-400 mb-4" />
          <div className="p-2 grid grid-cols-2 md:grid-cols-5 mb-4">
            <h2 className="md:col-span-2 flex justify-center md:justify-start">Product</h2>
            <p className="hidden md:block">Price</p>
            <p className="hidden md:block">Quantity</p>
            <p className="flex justify-center md:justify-start">Subtotal</p>
          </div>
          {cartProductsDetails.map(
            ({ _id, image, name, offerPrice, quantity }) => {
              return (
                <div className="grid rounded-b-md grid-cols-2 md:grid-cols-5 mb-4" key={_id}>
                  <figure className=" flex md:col-span-2 items-center md:items-start gap-4 flex-col md:flex-row">
                    <Image
                      height={200}
                      width={200}
                      alt={name}
                      src={image[0]}
                      className="object-cover max-w-20"
                    />
                    <h2 className=" text-gray-700 ">{name}</h2>
                  </figure>
                  <p className="text-sm items-center hidden md:flex">${offerPrice}</p>
                  <div className="text-sm gap-2 items-center hidden md:flex">
                    <button> - </button>
                    <p>{quantity}</p>
                    <button> + </button>
                  </div>
                  <p className="text-sm flex justify-center md:justify-start items-center">
                    {quantity}x{offerPrice}=
                    <span className="font-semibold">
                      ${quantity * offerPrice}
                    </span>
                  </p>
                </div>
              );
            }
          )}
        </div>

        <button 
          onClick={handleCheckout}
          className="cursor-pointer border-1 self-center mb-2 border-orange-600 px-10 py-4 text-sm rounded duration-150  bg-orange-600 text-white text-medium hover:brightness-85"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
