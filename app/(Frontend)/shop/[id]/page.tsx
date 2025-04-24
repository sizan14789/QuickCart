"use client";

import CurrentProduct from "@/components/Shop/product/CurrentProduct";
import SimilarProducts from "@/components/Shop/product/SimilarProducts";
import { useParams } from "next/navigation";

const Product = () => {
  const { id } = useParams();

  if (id && typeof id === "string") {
    return (
      <div className="box my-auto flex flex-col">
        <CurrentProduct id={id} />
        <SimilarProducts />
      </div>
    );
  }
};

export default Product;
