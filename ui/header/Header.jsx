"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";
import Nav from "./Navbar/Nav";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import NavMobile from "./Navbar/NavMobile";
import { useState } from "react";
import Auth from "./Auth";

export const Header = () => {
  // Navbar
  const [open, isOpen] = useState(false);
  
  const handleNavToggle = () => {
    isOpen((prev) => !prev);
  };

  

  return (
    <header className="box py-3.5 max-w-big border-b-1 border-b-gray-300 mb-8 md:mb-12">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="flex items-center md:hidden cursor-pointer bg-white p-1 hover:bg-orange-600 duration-150 hover:text-white rounded-full">
            <HiOutlineBars3BottomLeft
              className={`text-2xl duration-150 ${open ? "rotate-180" : ""} `}
              onClick={handleNavToggle}
            />
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
        <div
          className={`fixed md:hidden bottom-0 left-0 z-50 ${
            open ? "" : "-translate-x-full"
          } duration-150 `}
        >
          <NavMobile handleNavToggle={handleNavToggle} />
        </div>
        <div className="hidden md:flex items-center">
          <Nav />
        </div>
        <div className="flex items-center gap-4 relative">
          
          <Auth />
        </div>
      </div>
    </header>
  );
};
