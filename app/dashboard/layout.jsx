import DashboardNavbar from "@/app/dashboard/components/DashboardNavbar";
import authSeller from "@/lib/authSeller";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: {
    default: 'Dashboard',
    template: '%s Dashboard'
  }
}

const DashboardLayout = async ({ children }) => {
  
  const isSeller = await authSeller()
  if (!isSeller) redirect('/')

  return (
    <div className="box flex flex-col grow">
      <div className="flex grow">
        <DashboardNavbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
