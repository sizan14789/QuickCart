import React from "react";
import FeatureCard from "./FeaturedCard";
import { featured } from "@/assets/assets";

const Featured = () => {
  return (
    <div>
      <h2 className="text-3xl text-center relative mb-1">Featured Products</h2>
      <p className="border-b-2 border-orange-500 h-0.5 w-32 bg-orange-500 absolute right-1/2 translate-1/2"></p>
      <div>
        <div className="grid gap-8 grid-cols-1 px-5 py-10 sm:grid-cols-2 md:grid-cols-3 md:gap-14">
          {featured.map((curElem) => {
            return (
              <FeatureCard curElem={curElem} key={curElem.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
