import Image from "next/image";
import React from "react";
import bodyShotImg from "@/public/assets/bodyShot.jpg";

const Hero = () => {
  return (
    <div className="flex items-center justify-between md:mx-80 mt-24 rounded-3xl bg-[#E8E4DD]">
      <div>
        <Image
          src={bodyShotImg}
          alt=""
          className="w-[650px] h-[72vh] object-cover rounded-l-3xl"
        />
      </div>
      <div className="px-2 mr-8 ml-8 justify-center items-center flex flex-col w-[65%]">
        <h1 className="text-8xl mr-40 text-left mb-12 w-[70%]">
          Exquisite Jewels for Your Radiant Style
        </h1>
        <p className="text-left text-2xl mr-40 w-[70%]">
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
