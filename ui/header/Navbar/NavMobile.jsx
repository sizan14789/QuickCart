import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RxCross1 } from "react-icons/rx";

const NavMobile = ({ handleNavToggle }) => {
  const { isSeller } = useAppContext();

  const pathName = usePathname();
  const isActive = (url) => {
    if (pathName == url) return true;
    if (pathName.startsWith("/shop")) return url.startsWith("/shop");
  };

  return (
    <div className="flex gap-8 items-center pt-40 sm:pt-60 flex-col z-20 bg-white w-48 sm:w-80 h-svh relative text-gray-700">
      <button
        className="hover:bg-orange-600 duration-150 cursor-pointer hover:text-white rounded-full p-3"
        onClick={handleNavToggle}
      >
        <RxCross1 className="text-3xl" />
      </button>
      <Link href="/" onClick={handleNavToggle} className={isActive("/") ? "text-orange-600" : ""}>
        Home
      </Link>
      <Link href="/shop" onClick={handleNavToggle} className={isActive("/shop") ? "text-orange-600" : ""}>
        Shop
      </Link>
      <Link href="/cart" onClick={handleNavToggle} className={isActive("/cart") ? "text-orange-600" : ""}>
        Cart
      </Link>
      <Link
        onClick={handleNavToggle}
        href="/contact"
        className={isActive("/contact") ? "text-orange-600" : ""}
      >
        Contact
      </Link>
      <Link
        href="/seller"
        className={`text-xs border-1 border-gray-400 py-1.5 px-3 rounded-4xl ${
          isSeller ? "block" : "hidden"
        }`}
      >
        Seller Dashboard
      </Link>
    </div>
  );
};

export default NavMobile;
