import Image from "next/image";
import React from "react";
import bodyShotImg from "@/public/assets/bodyShot.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-between mx-4 md:mx-48 mt-8 md:mt-20 rounded-2xl md:rounded-3xl bg-[#E8E4DD]"
    >
      <div className="w-[900px] md:w-[50%]">
        <Image
          src={bodyShotImg}
          alt=""
          className="w-[450px] h-[56vh] md:w-[650px] md:h-[84vh] object-cover rounded-l-2xl md:rounded-l-3xl"
        />
      </div>
      <div className="px-2 mr-8 ml-8 justify-center items-center flex flex-col w-[65%]">
        <h1 className="text-xl font-semibold md:font-bold md:text-6xl mr-8 md:mr-40 text-left md:mb-12 w-[68%] md:w-[72%]">
          Exquisite Jewels for Your Radiant Style
        </h1>
        <p className="text-left font-light md:font-medium text-sm md:text-base line-clamp-4 md:line-clamp-none mr-1 md:mr-40 w-[110px] md:w-[75%]">
          Discover our exclusive collection of timeless jewelry, crafted with
          meticulous precision and designed to complement your every occasion.
          Elevate your style with our captivating pieces that seamlessly blend
          timeless elegance and modern sophistication.
        </p>
      </div>
    </div>
  );
};

export default Hero;
