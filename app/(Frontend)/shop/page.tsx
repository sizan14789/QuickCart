import Main from "@/components/Shop/Main";
import React from "react";

const parameterFetch = async (params: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?search=${params}`
  );
  return res;
};

const basicFetch = async () => {
  const res = await fetch(`http://localhost:3000/api/products`);
  return res;
};

const productData = async (params: string | undefined) => {
  let res1: Response;

  if (params) res1 = await parameterFetch(params);
  else res1 = await basicFetch();

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
