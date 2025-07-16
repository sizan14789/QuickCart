import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Rating = ({ rating }) => {
  return (
    <>
      {Array.from({ length: Math.floor(rating) }, (_, i) => i).map((curInt) => {
        return (
          <Image
            src={assets.star_icon}
            height={12}
            width={12}
            alt="rating"
            key={curInt}
          />
        );
      })}
      {Array.from({ length: 5 - Math.floor(rating) }, (_, i) => i).map(
        (curInt) => {
          return (
            <Image
              src={assets.star_dull_icon}
              height={12}
              width={12}
              alt="rating"
              key={curInt}
            />
          );
        }
      )}
    </>
  );
};

export default Rating;
