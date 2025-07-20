"use client"

import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({cartData, userId}) => {
  const router = useRouter();

  const synchUserOrder = async (ordersList) => {
    const res = await fetch(`/api/users/${userId}/order`, {
      method: "POST",
      body: JSON.stringify(ordersList)
    });

    if (res.status==200)
      console.log("user synced")
    else
      console.log("failed to sync user");
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    const entries = Object.entries(cartData)
    const formdata = new FormData(e.target);

    const username = formdata.get("name");
    const address = formdata.get("address");
    const phone = formdata.get("phone");

    const ordersList = await Promise.all(
      entries.map(async (entry) => {
        const newData = new FormData();
        newData.append("username", username);
        newData.append("phone", phone);
        newData.append("address", address);
        newData.append("productId", entry[0]);
        newData.append("quantity", entry[1]);
        newData.append("userId", userId);

        const res = await fetch(`/api/orders`, {
          method: "POST",
          body: newData,
        });
        const data = await res.json()
        return data._id;
      })
    );
    await synchUserOrder(ordersList);
    toast.success("Order Placed");
    router.push('/cart/checkout/thankyou');
  };

  return (
    <form onSubmit={handleCheckout} className=" flex flex-col max-w-96 md:max-w-full gap-3">
      <label htmlFor="name">Name</label>
      <input
        className="outline-none focus:border-orange-600 sm:min-w-96 focus:brightness-95 border-1 border-gray-300 rounded-md px-2 bg-white py-4"
        type="text"
        required
        placeholder="Abdul Karim"
        name="name"
      />

      <label htmlFor="phone">Phone</label>
      <input
        className="outline-none focus:border-orange-600 sm:min-w-96 focus:brightness-95 border-1 border-gray-300 rounded-md px-2 bg-white py-4"
        type="text"
        required
        placeholder="+8801********"
        name="phone"
      />

      <label htmlFor="name">Address</label>
      <input
        className="outline-none focus:border-orange-600 sm:min-w-96 focus:brightness-95 border-1 border-gray-300 rounded-md px-2 bg-white py-4"
        type="text"
        required
        placeholder="house no, street name, upzilla, zilla"
        name="address"
      />

      <button className="cursor-pointer border-1 mt-6 self-center mb-2 border-orange-600 px-10 py-4 text-sm rounded duration-150  bg-orange-600 text-white text-medium hover:brightness-85">
        Checkout
      </button>
    </form>
  );
};

export default CheckoutForm;
