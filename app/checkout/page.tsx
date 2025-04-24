import CheckoutList from "@/components/checkout/CheckoutList";
import React from "react";

const Checkout = () => {
  return (
    <div className="box my-8">
      <div className="flex flex-col "  >
        <h2 className="relative mb-6 self-start text-4xl font-medium ">
          Checkout
          <p className="w-full h-0.5 absolute bg-orange-600 "></p>
        </h2>
        <CheckoutList />
      </div>
    </div>
  );
};

export default Checkout;
