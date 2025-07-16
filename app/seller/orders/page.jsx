"use client";

import Loader from "@/ui/loader/Loader";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Orders = () => {
  const [ordersData, setOrdersData] = useState();
  const [stateUpdate, setStateUpdate] = useState();

  useEffect(() => {
    const getOrdersData = async () => {
      const res = await fetch(`/api/orders`);
      const data = await res.json();
      const ordersList = await Promise.all(
        data.map( async (curOrder) => {
          const res = await fetch(`/api/products/${curOrder.productId}`);
          const data = await res.json();
          const { image, offerPrice, name } = data;
          return {
            ...curOrder,
            productName: name,
            image: image[0],
            offerPrice: offerPrice,
          };
        })
      );
      setOrdersData(ordersList);
    };
    getOrdersData();
  }, [stateUpdate]);

  const handleOrderDelete = async (id)=>{
    const res = await fetch(`/api/orders/${id}`, {
      method: "DELETE"
    })
    if (res.status==200){
      toast.success("Deleted")
      setStateUpdate(prev=> !prev);
    } else{
      toast.error("could not delete");
    }
  }

  if(!ordersData) return <Loader />

  return (
    <div className="flex w-full flex-col p-4">
      <h2 className="text-2xl mb-6 text-gray-700">Orders</h2>

      <div className=" border-gray-300 border-1 rounded-md text-gray-700 border-b-0 flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-5 grow  border-gray-300 border-b-1 text-black">
          <h2 className="md:col-span-2 px-6 py-2">Product</h2>
          <h2 className="md:col-span-2 px-4 py-2">User Info</h2>
          <h2 className=" px-4 py-2 hidden md:flex">Total</h2>
        </div>

        {ordersData.map((curElem) => {
          const {
            productName,
            image,
            offerPrice,
            username,
            quantity,
            address,
            phone,
            _id,
          } = curElem;

          return (
            <div className="border-b-1 border-b-gray-300 rounded-b-md" key={_id}>
              <div
                className="grid grid-cols-2 md:grid-cols-3 grow py-2 gap-8"
              >
                <div className="px-6 py-2 flex items-center flex-col md:flex-row gap-2">
                  <figure className="rounded-xl">
                    <Image
                      src={image}
                      alt={productName}
                      height={70}
                      width={70}
                      className="min-w-20"
                    />
                  </figure>
                  <h2 className="">{productName}</h2>
                </div>
                <div className="px-4 md:flex items-center py-2 ">
                  <p>
                    <span className="font-semibold">Name:</span> {username}{" "}
                    <br />
                    <span className="font-semibold">Address: </span> {address}{" "}
                    <br />
                    <span className="font-semibold">Phone: </span> {phone}
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

              <div className=" px-4 flex gap-2 items-center flex-col md:flex-row justify-center py-2">
                <Link href={`/seller/orders/${_id}`} className="cursor-pointer border-1 border-e-orange-600  py-2 w-20 px-[1rem] text-sm rounded text-white text-medium duration-150 bg-orange-600 hover:brightness-90 text-center">
                  View
                </Link>
                <button
                  className="cursor-pointer border-1 border-gray-300 py-2 w-20 px-[1rem] text-sm rounded text-medium duration-150 bg-white hover:brightness-90"
                  onClick={()=>handleOrderDelete(_id)}
                >
                  Delete
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
