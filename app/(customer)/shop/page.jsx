"use client";

import Loader from "@/ui/loader/Loader";
import { useEffect, useState } from "react";
import Products from "./components/Products";

const Shop = () => {
  const [ productsData, setProductsData ] = useState();
  const [ search, setSearch ] = useState(""); 

  useEffect(() => {
    const basicFetch = async () => {
      let data;
      if (search!=""){
        data = await fetch(`/api/products?search=${search}`);
      }
      else
        data = await fetch(`/api/products`);
      const res = await data.json();
      setProductsData(res);
    };
    basicFetch();
  }, [search]);

  const handleSearch = (data)=>{
    setSearch(data);
  }
  
  if(!productsData) return <Loader />

  if (productsData)
    return (
        <div className="box flex-1">
          <Products productsData={productsData} handleSearch={handleSearch} />
        </div>
    );
};

export default Shop;
