"use client";

import Loader from "@/ui/loader/Loader";
import React, { lazy, Suspense, useEffect, useState } from "react";
const Main = lazy(() => import("@/components/Shop/Main"));

const Shop = () => {
  const [productsData, setProductsData] = useState();

  useEffect(() => {
    const basicFetch = async () => {
      const data = await fetch(`/api/products`);
      const res = await data.json();
      setProductsData(res);
    };
    basicFetch();
  }, []);
  
  if(!productsData) return <Loader />

  if (productsData)
    return (
      <Suspense fallback={<Loader />}>
        <div className="box flex-1">
          <Main productsData={productsData} />
        </div>
      </Suspense>
    );
};

export default Shop;
