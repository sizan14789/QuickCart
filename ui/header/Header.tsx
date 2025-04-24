"use client"

import Image from "next/image";
import { assets } from "@/assets/assets";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import Link from "next/link";
import Nav from "./Nav";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import NavMobile from "./NavMobile";
import { useState } from "react";

export const Header = () => {
  const [ open, isOpen ]  = useState<boolean>(false);

  const handleNavToggle = ()=>{
      isOpen(prev => !prev);
      console.log(open)
  }

  return (
    <header className="box py-3.5 m-auto max-w-big border-b-1 border-b-gray-300">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="flex items-center md:hidden cursor-pointer bg-white p-1 hover:bg-orange-600 duration-150 hover:text-white rounded-full">
            <HiOutlineBars3BottomLeft className={`text-2xl duration-150 ${open? "rotate-180" : "" } `} onClick={handleNavToggle}  />
          </div>
          <Link href="/">
            <figure>
              <Image
                src={assets.logo}
                width={112}
                height={30}
                alt="QuickCartLogo"
              />
            </figure>
          </Link>
        </div>
        <div className={`fixed md:hidden bottom-0 left-0 z-50 ${open? "" : "-translate-x-full"} duration-150 `} >
          <NavMobile handleNavToggle={handleNavToggle} />
        </div>
        <div className="hidden md:flex items-center">
          <Nav />
        </div>
        <div className="flex items-center gap-4">
          <button>
            <CiSearch className="text-2xl text-" />
          </button>
          <button className="flex items-center gap-1.5">
            <MdOutlineAccountCircle className="text-xl" /> Account
          </button>
        </div>
      </div>
    </header>
  );
};
