"use client";

import { useParams } from "next/navigation";
import CurrentProduct from "./components/CurrentProduct";
import SimilarProducts from "./components/SimilarProducts";

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
