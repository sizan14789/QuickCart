'use client'

import CartList from "@/components/cart/Cart";

const Cart = () => {

  return (
    <div className="box flex-1">
      <div className="flex flex-col ">
        <h2 className="relative mb-6 self-start text-4xl font-medium ">
          Cart
          <p className="w-full h-0.5 absolute bg-orange-600 "></p>
        </h2>
        <CartList />
      </div>
    </div>
  );
};

export default Cart;
