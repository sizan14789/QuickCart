"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathName = usePathname();
  const isActive = (url: string) => {
    if (pathName==(url)) return true;
    if (pathName.startsWith("/shop")) return url.startsWith("/shop");
  };

  return (
    <ul className="flex gap-8 items-center text-gray-700">
      <Link href="/" className={isActive("/") ? "text-orange-600" : ""}>
        Home
      </Link>
      <Link href="/shop" className={isActive("/shop") ? "text-orange-600" : ""}>
        Shop
      </Link>
      <Link
        href="/cart"
        className={isActive("/cart") ? "text-orange-600" : ""}
      >
        Cart
      </Link>
      <Link
        href="/contact"
        className={isActive("/contact") ? "text-orange-600" : ""}
      >
        Contact
      </Link>
      <button className="text-xs border-1 border-gray-400 py-1.5 px-3 rounded-4xl hidden">
        Seller Dashboard
      </button>
    </ul>
  );
};

export default Nav;
