import Main from "@/components/Shop/Main";
import React from "react";

const productData = async (params?: string) => {
  let res1: Response;
  if (params) {
    res1 = await fetch(`http://localhost:3000/api/products?search=${params}`);
  } else {
    res1 = await fetch(`http://localhost:3000/api/products`);
  }

  const res2 = await res1.json();
  return res2;
};

const Shop = async ({
  searchParams,
}: {
  searchParams: { search?: string };
}) => {
  const search = searchParams?.search;
  const productsData = await productData(search);

  return (
    <div className="box flex-1">
      <Main productsData={productsData} search={search} />
    </div>
  );
};

export default Shop;
