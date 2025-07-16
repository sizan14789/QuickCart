import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Company from "./Company";

export const Footer = () => {

  return (
    <footer className="bottom-0 mt-8 md:mt-16">
      <div className="box py-16 flex flex-col gap-10 justify-between sm:flex-row sm:gap-16">
        <div className="max-w-3xl">
          <figure className="mb-7">
            <Link href="/">
              <Image
                src={assets.logo}
                width={128}
                height={30}
                alt="QuickCartLogo"
              />
            </Link>
          </figure>
          <p className="lightText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <Company />
        <div>
          <h2 className="mb-4">Get In Touch</h2>
          <ul className="lightText flex flex-col gap-1.5">
            <li>Socials to be added</li>
            <li>sizanalt@gmail.com</li>
            <li>
              <a href="https://github.com/sizan14789/QuickCart" className="font-semibold text-orange-500" >
                Source Code
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t-1 border-r-gray-400">
        <div className="my-3">
          <p className="text-gray-700 text-center text-[0.875rem]">
            Copyright 2025 © Sizan Molla. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
