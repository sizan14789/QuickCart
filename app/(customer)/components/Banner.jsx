import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="mb-16" >
      <div className="relative flex flex-col md:flex-row md:gap-16 items-center md:items-start md:justify-between bg-[#E6E9F2] rounded-2xl">
        <figure className="relative overflow-hidden object-cover max-w-56 md:ml-10 self-center">
          <Image
            className="w-full transition object-cover"
            width={244}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={assets.jbl_soundbox_image}
            alt="jbl_soundbox_image"
          />
        </figure>
        <div className="max-w-96 flex flex-col items-center py-4 lg:my-6 xl:my-16">
          <h2 className="text-4xl font-bold text-center text-gray-700 mb-2">
            Level Up Your <br /> Gaming Experience
          </h2>
          <p className="text-gray-400 mb-4 text-center">
            From immersive sound to precise controls—everything you need to win
          </p>
          <Link href="shop">
            <button className="group flex gap-2 bg-orange-600 text-white px-12 py-3 rounded-md cursor-pointer items-center">
              <p>Buy now</p>
              <BsArrowRight className="group-hover:translate-x-2 duration-150 text-xl" />
            </button>
          </Link>
        </div>
        <figure className="max-w-56 md:block hidden">
          <Image
            className="w-full transition h-full"
            width={244}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={assets.md_controller_image}
            alt="md_controller_image"
          />
        </figure>
        <figure className="w-full md:hidden">
          <Image
            className="w-full transition h-auto"
            width={244}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={assets.sm_controller_image}
            alt="md_controller_image"
          />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
