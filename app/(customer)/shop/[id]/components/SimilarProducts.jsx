import Item from "@/app/(customer)/components/popular/Item";
import Loader from "@/ui/loader/Loader";
import React, { useEffect, useState } from "react";

const SimilarProducts = () => {
  const [productsData, setProductsData] = useState();

  useEffect(() => {
    const productData = async () => {
      const res1 = await fetch(`/api/products`);
      const res2 = await res1.json();
      setProductsData(res2);
    };
    productData();
  }, []);

  if (!productsData) return <Loader />;
  else {
    return (
      <div className="flex flex-col">
        <h2 className="relative mb-6 self-center text-3xl text-[#1f2937e6] font-medium ">
          Similar Products
          <p className="w-1/2 h-0.5 absolute translate-x-1/2 bg-orange-600 "></p>
        </h2>

        <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-12 xl:grid-cols-5">
          {productsData.slice(0, 5).map((curElem) => {
            return <Item curElem={curElem} key={curElem._id} />;
          })}
        </div>
      </div>
    );
  }
};

export default SimilarProducts;
