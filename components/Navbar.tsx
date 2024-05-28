import Image from "next/image";
import React from "react";
import nellieLogo from "@/public/assets/nellieLogo.jpg";
import { Merriweather } from "next/font/google";

const poet = Merriweather({ subsets: ["latin"], weight: "700" });

const Navbar = () => {
  return (
    <div className="items-center">
      <div className="bg-white border-transparent border-r-2 flex justify-between mt-8 md:mx-72 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <div className="flex justify-between">
          <Image
            src={nellieLogo}
            alt="Logo"
            className="w-14 h-14 rounded-full object-contain"
          />
          <h1 className={`text-2xl ml-4 mt-3 ${poet.className}`}>Nellie</h1>
        </div>

        <div className="">
          <ul className="flex px-2 text-2xl mt-2">
            <li className="ml-10">Home</li>
            <li className="ml-10">About</li>
            <li className="ml-10">Best Selling</li>
            <li className="ml-10">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
