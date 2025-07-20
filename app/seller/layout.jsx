import SellerNavbar from "@/app/seller/components/SellerNavbar";
import authSeller from "@/lib/authSeller";
import { redirect } from "next/navigation";
import React from "react";

const SellerLayout = async ({ children }) => {
  
  const isSeller = await authSeller()
  if (!isSeller) redirect('/')

  return (
    <div className="box flex flex-col grow">
      <div className="flex grow">
        <SellerNavbar />
        {children}
      </div>
    </div>
  );
};

export default SellerLayout;
