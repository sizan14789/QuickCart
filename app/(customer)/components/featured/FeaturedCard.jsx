import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureCard = ({curElem}) => {
  const { image, title, description } = curElem;

  return (
    <div className="group flex relative">
      <figure className="relative overflow-hidden">
        <Image
          src={image}
          className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="featured product"
        />
      </figure>
      <div className="absolute group-hover:-translate-y-4 text-white w-full bottom-6 p-6 transition">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mb-6 ">{description}</p>
        <Link href="/" className="bg-orange-600 px-6 py-3 rounded-md hover:brightness-90 ">
          <button className="cursor-pointer">Buy now</button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
