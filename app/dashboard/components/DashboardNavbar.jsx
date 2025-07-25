'use client'

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNavbar = () => {

  const pathname = usePathname();

  const isActive = (url)=>{
    return url === pathname;
  }

  return (
    <nav className="flex flex-col w-20 md:w-auto border-r-gray-500 border-r-1">
      <Link href="/dashboard" className={`py-4 px-2 flex gap-2 ${isActive('/dashboard')? "bg-[#ff5b294b] border-r-4 border-orange-600": ""}`}>
        <Image
          src={assets.add_icon}
          height={24}
          width={24}
          alt="icon"
        />
        <p className="hidden mr-28 xl:mr-40 md:block">Add Product</p>
      </Link>
      <Link href="/dashboard/products" className={`py-4 px-2 flex gap-2 ${isActive('/dashboard/products')? "bg-[#ff5b294b] border-r-4 border-orange-600": ""}`}  >
        <Image
          src={assets.product_list_icon}
          height={24}
          width={24}
          alt="icon"
        />
        <p className="hidden md:block">Product List</p>
      </Link>
      <Link href="/dashboard/orders" className={`py-4 px-2 flex gap-2 ${isActive('/dashboard/orders')? "bg-[#ff5b294b] border-r-4 border-orange-600": ""}`}  >
        <Image
          src={assets.order_icon}
          height={24}
          width={24}
          alt="icon"
        />
        <p className="hidden md:block">Orders</p>
      </Link>
    </nav>
  );
};

export default DashboardNavbar;
