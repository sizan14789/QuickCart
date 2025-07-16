"use client"

import Privacy from "@/ui/footer/Privacy";
import Link from "next/link";
import { useState } from "react";

const Company = () => {

  const [ visible, setVisible]= useState(false)

  return (
    <div>
      <h2 className="mb-3">Company</h2>
      <ul className="lightText leading-7">
        <li>
          <Link
            href="/"
            className="border-b-1 border-b-transparent hover:border-b-orange-500 "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="border-b-1 border-b-transparent hover:border-b-orange-500"
          >
            Contact us
          </Link>
        </li>
        <li className="text-nowrap border-b-1 border-b-transparent cursor-pointer hover:border-b-orange-500"
        onClick={()=> setVisible(true)}
        >
          Privacy Policy
        </li>
        <Privacy visible={visible} setVisible={setVisible} />
      </ul>
    </div>
  );
};

export default Company;
