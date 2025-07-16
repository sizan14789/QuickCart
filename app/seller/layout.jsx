import SellerNavbar from "@/app/seller/components/SellerNavbar";
import React from "react";

const SellerLayout = ({ children }) => {
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
