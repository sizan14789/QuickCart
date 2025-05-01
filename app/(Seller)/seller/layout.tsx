import SellerNavbar from "@/components/seller/SellerNavbar";
import React from "react";

const SellerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
