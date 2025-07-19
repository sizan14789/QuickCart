"use client";

import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const PlaceOrder = ({cartItemsQuantity}) => {
  const router = useRouter();
  const handleCheckout = () => {
    if (cartItemsQuantity == 0) {
      toast.error("No items in cart!");
    } else {
      router.push("/cart/checkout");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="cursor-pointer border-1 self-center mb-2 border-orange-600 px-10 py-4 text-sm rounded duration-150  bg-orange-600 text-white text-medium hover:brightness-85"
    >
      Place Order
    </button>
  );
};

export default PlaceOrder;
