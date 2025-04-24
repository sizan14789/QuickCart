"use client";

import { useState } from "react";
import Filter from "./Filter";
import Products from "./Products";
import { productsInterface } from "@/types/Interfaces";

const Main = ({ productsData, search }: { productsData: productsInterface[]; search: string | undefined }) => {
  // Range functionality
  const [minMax, setMinMax] = useState<[number, number]>([0, 10000]);
  const handleRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = Number(e.target.value);

    if (name === "0") {
      setMinMax([value, minMax[1]]);
    } else {
      setMinMax([minMax[0], value]);
    }
  };

  // Order Functionality
  const [sortedProductsData, setSortedProductsData] = useState(productsData);
  const handleSorting = (e:React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "none":
        setSortedProductsData(productsData);
        break;
      case "asc":
        const resAsc = () => {
          return [...productsData].sort(
            (a: { offerPrice: number }, b: { offerPrice: number }) =>
              a.offerPrice - b.offerPrice
          );
        };
        setSortedProductsData(resAsc());
        break;
      case "des":
        const resDes = () => {
          return [...productsData].sort(
            (a: { offerPrice: number }, b: { offerPrice: number }) =>
              b.offerPrice - a.offerPrice 
          );
        };
        setSortedProductsData(resDes());
        break;
    }
  };

  return (
    <>
      <Filter
        minMax={minMax}
        handleRangeChange={handleRangeChange}
        handleSorting={handleSorting}
      />
      <Products productsData={sortedProductsData} search={search} minMax={minMax} />
    </>
  );
};

export default Main;
