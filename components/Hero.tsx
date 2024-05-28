import Image from "next/image";
import React from "react";
import bodyShotImg from "@/public/assets/bodyShot.jpg";

const Hero = () => {
  return (
    <div className="flex items-center justify-between md:mx-80 mt-12 rounded-3xl bg-[#E8E4DD]">
      <div>
        <Image
          src={bodyShotImg}
          alt=""
          className="w-[650px] h-[72vh] object-cover rounded-l-3xl"
        />
      </div>
      <div className="px-4 mr-8 ml-8 justify-center items-center flex flex-col">
        <h1 className="text-6xl mr-10 text-left">
          Exquisite Jewels for Your Radiant Style
        </h1>
        <p className="text-left">
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
