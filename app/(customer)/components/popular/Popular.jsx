import React from "react";
import Item from "./Item";
import Link from "next/link";

const productData = async()=>{
    const res1 = await fetch(`${process.env.BASE_URL}/api/products?limit=8`, {
      next: {revalidate: 60}
    });
    const res2 = await res1.json();
    return res2;
}

const Popular = async () => {
  const productsData = await productData();

  return (
    <div className="mb-10 flex flex-col">
      <div className="mb-5" >
        <h2 className="text-2xl font-medium mb-6">Popular Products</h2>
        <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-12 xl:grid-cols-5">
        {productsData.map((curElem) => {
            return <Item curElem={curElem} key={curElem._id} />;
          })}
        </div>
      </div>
      <Link
        href="/shop"
        className="border-1 border-gray-400 mx-auto px-6 py-3 rounded-4xl bg-white hover:bg-orange-600 hover:text-white duration-150"
      >
        <button className="cursor-pointer">See more</button>
      </Link>
    </div>
  );
};

export default Popular;
