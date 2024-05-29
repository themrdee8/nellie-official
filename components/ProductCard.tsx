import Image from "next/image";
import React from "react";
import silverGold from "@/public/assets/earrings/silvergoldEar.jpg";
import butterFly from "@/public/assets/bracelets/Butterflybracelet.jpg";
import Lovependant from "@/public/assets/necklaces/Lovenecklace.jpg";
import goldRing from "@/public/assets/rings/goldRing2.jpg";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div className="md:flex grid grid-cols-2 items-center justify-between mx-4 md:mx-48 mt-6 md:mt-24 py-6 md:py-14 md:px-12 rounded-2xl md:rounded-3xl bg-[#E8E4DD]">
      <div className="md:mr-4 md:ml-2 pt-4 md:pt-0 md:pl-8">
        <Link href="/rings" className="hover:text-[#975843]">
          <div className="ml-8 md:ml-4">
            <Image
              src={goldRing}
              alt="gold_ring"
              className="w-20 h-20 md:w-44 md:h-44 rounded-full object-cover md:mb-4"
            />
          </div>
          <h1 className="text-base md:text-2xl pb-3 md:pb-6 font-medium md:font-semibold text-center">
            Rings
          </h1>
        </Link>
        <p className="text-xs md:text-base hidden md:block md:w-[90%] text-left ml-4">
          Discover our captivating collection of rings, each piece a masterful
          blend of timeless elegance and modern refinement.
        </p>
      </div>

      <div className="md:mr-6 pt-4 md:pt-0">
        <Link href="/earrings" className="hover:text-[#975843]">
          <div className="ml-8 md:ml-4">
            <Image
              src={silverGold}
              alt="earring_silver_gold"
              className="w-20 h-20 md:w-44 md:h-44 rounded-full object-cover md:mb-4"
            />
          </div>
          <h1 className="text-base md:text-2xl pb-3 md:pb-6 font-medium md:font-semibold text-center">
            Earrings
          </h1>
        </Link>
        <p className="md:text-base hidden md:block md:w-[90%] text-left ml-6">
          Elevate your look with our stunning earrings, crafted to accentuate
          your features and complement your personal style.
        </p>
      </div>

      <div className="md:mr-6 pt-4 md:pt-0">
        <Link href="/bracelet" className="hover:text-[#975843]">
          <div className="ml-8 md:ml-4">
            <Image
              src={butterFly}
              alt="bracelet_butterfly"
              className="w-20 h-20 md:w-44 md:h-44 rounded-full object-cover md:mb-4"
            />
          </div>
          <h1 className="text-base md:text-2xl pb-3 md:pb-6 font-medium md:font-semibold text-center">
            Bracelet
          </h1>
        </Link>
        <p className="md:text-base hidden md:block  md:w-[90%] text-left ml-6">
          Adorn your wrists with our carefully curated selection of bracelets,
          designed to add a touch of sophistication to any ensemble.
        </p>
      </div>

      <div className="md:mr-4 pt-4 md:pt-0">
        <Link href="/necklace" className="hover:text-[#975843]">
          <div className="ml-8 md:ml-4">
            <Image
              src={Lovependant}
              alt="necklace_love_pendant"
              className="w-20 h-20 md:w-44 md:h-44 rounded-full object-cover md:mb-4"
            />
          </div>
          <h1 className="text-base md:text-2xl pb-3 md:pb-6 font-medium md:font-semibold text-center">
            Necklace
          </h1>
        </Link>
        <p className="md:text-base hidden md:block  md:w-[94%] text-left ml-6">
          Discover the perfect necklace to frame your face and enhance your
          beauty, each piece a testament to our commitment to excellence.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
