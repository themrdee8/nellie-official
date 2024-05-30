import Image from "next/image";
import React from "react";
import nellieLogo from "@/public/assets/nellieLogo.jpg";
import { Merriweather } from "next/font/google";
import Link from "next/link";

const poet = Merriweather({ subsets: ["latin"], weight: "700" });

const Navbar = () => {
  return (
    <div className="items-center">
      <div className="bg-white border-transparent border-r-2 flex justify-between mt-4 md:mt-6 mx-2 md:mx-40 rounded-2xl md:rounded-3xl p-2 md:p-4 shadow-lg shadow-[#A9A295]">
        <div className="flex justify-between">
          <Image
            src={nellieLogo}
            alt="Logo"
            className="w-8 h-8 md:w-14 md:h-14 rounded-full object-contain"
          />
          <h1
            className={`text-base mt-1 ml-2 md:text-2xl md:ml-4 md:mt-3 ${poet.className}`}
          >
            Nellie
          </h1>
        </div>

        <div className="">
          <ul className="flex md:px-2 text-xs md:text-sm mt-2 md:mt-4">
            <Link href="/">
              <li className="md:ml-6">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-3 md:ml-6">About</li>
            </Link>
            <Link href="/#best-selling">
              <li className="ml-3 md:ml-6 hidden md:block">Best Selling</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-3 md:ml-6">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
