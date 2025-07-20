"use client";

import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const OrdersTable = ({ ordersData }) => {
  const [localOrdersData, setLocalOrdersData] = useState(ordersData);

  const handleOrderDelete = async (id) => {
    const updatedOrdersData = localOrdersData.filter((order) => {
      return order._id !== id;
    });
    setLocalOrdersData(updatedOrdersData);
    toast.success("Deleted");
    const res = await fetch(`/api/orders/${id}`, {
      method: "delete",
    });
    if (!res.status == 200) {
      console.log("could not delete");
    }
  };

  return (
    <div className=" border-gray-300 border-1 rounded-md text-gray-700 border-b-0 flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-5 grow  border-gray-300 border-b-1 text-black">
        <h2 className="md:col-span-2 px-6 py-2">Product</h2>
        <h2 className="md:col-span-2 px-4 py-2">User Info</h2>
        <h2 className=" px-4 py-2 hidden md:flex">Total</h2>
      </div>

      {localOrdersData.map((curElem) => {
        const {
          productName,
          image,
          offerPrice,
          username,
          quantity,
          address,
          phone,
          createdAt,
          _id,
        } = curElem;

        const date = new Date(createdAt);
        const formatted = format(date, "MMM dd, yyyy");

        return (
          <div className="border-b-1 border-b-gray-300 rounded-b-md" key={_id}>
            <div className="grid grid-cols-2 md:grid-cols-3 grow py-2 gap-8 text-sm">
              <div className="px-6 py-2 flex items-center flex-col md:flex-row gap-2">
                <figure className="rounded-xl">
                  <Image
                    src={image}
                    alt={productName}
                    height={70}
                    width={70}
                    className="min-w-12"
                  />
                </figure>
                <h2 className="">{productName}</h2>
              </div>
              <div className="px-4 md:flex items-center py-2 ">
                <p>
                  <span className="font-semibold">Name:</span> {username} <br />
                  <span className="font-semibold">Address: </span> {address}{" "}
                  <br />
                  <span className="font-semibold">Phone: </span> {phone} <br />
                  <span className="font-semibold">Date: </span> {formatted}
                </p>
              </div>
              <div className="items-center hidden md:flex border-l-0 px-4 py-2 ">
                <p>
                  {quantity}x{offerPrice}=
                  <span className="font-semibold">
                    <span className="text-orange-600">$</span>
                    {quantity * offerPrice}
                  </span>
                </p>
              </div>
            </div>

            <div className=" px-4 flex gap-2 md:gap-8 items-center justify-center py-2">
              <Link
                href={`/dashboard/orders/${_id}`}
                className="cursor-pointer border-1 border-e-orange-600 py-2 md:py-3 w-20 md:w-32 text-sm rounded text-white text-medium duration-150 bg-orange-600 hover:brightness-90 text-center"
              >
                View
              </Link>
              <button
                className="cursor-pointer border-1 border-gray-300 py-2 md:py-3 w-20 md:w-32 text-sm rounded text-medium duration-150 bg-white hover:brightness-90"
                onClick={() => handleOrderDelete(_id)}
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

export default OrdersTable;
