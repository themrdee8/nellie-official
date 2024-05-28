import Image from "next/image";
import React from "react";
import silverGold from "@/public/assets/earrings/silvergoldEar.jpg";
import butterFly from "@/public/assets/bracelets/Butterflybracelet.jpg";
import Lovependant from "@/public/assets/necklaces/Lovenecklace.jpg";
import goldRing from "@/public/assets/rings/goldRing2.jpg";

const ProductCard = () => {
  return (
    <div className="flex grid-cols-2 md:grid-cols-4 items-center justify-between md:mx-80 mt-32 py-14 px-12 rounded-3xl bg-[#E8E4DD]">
      <div className="mr-6 ml-4 pl-14">
        <Image
          src={goldRing}
          alt="gold_ring"
          className="w-48 h-48 rounded-full object-cover mb-4"
        />
        <h1 className="text-3xl pb-6 font-semibold ml-10">Rings</h1>
        <p className="text-lg w-[65%] text-left ml-4">
          Discover our captivating collection of rings, each piece a masterful
          blend of timeless elegance and modern refinement.
        </p>
      </div>

      <div className="mr-6">
        <Image
          src={silverGold}
          alt="earring_silver_gold"
          className="w-48 h-48 rounded-full object-cover mb-4"
        />
        <h1 className="text-3xl pb-6 font-semibold ml-10">Earrings</h1>
        <p className="text-lg w-[65%] text-left ml-4">
          Elevate your look with our stunning earrings, crafted to accentuate
          your features and complement your personal style.
        </p>
      </div>

      <div className="mr-6">
        <Image
          src={butterFly}
          alt="bracelet_butterfly"
          className="w-48 h-48 rounded-full object-cover mb-4"
        />
        <h1 className="text-3xl pb-6 font-semibold ml-10">Bracelet</h1>
        <p className="text-lg w-[65%] text-left ml-4">
          Adorn your wrists with our carefully curated selection of bracelets,
          designed to add a touch of sophistication to any ensemble.
        </p>
      </div>

      <div className="">
        <Image
          src={Lovependant}
          alt="necklace_love_pendant"
          className="w-48 h-48 rounded-full object-cover mb-4"
        />
        <h1 className="text-3xl pb-6 font-semibold ml-10">Necklace</h1>
        <p className="text-lg w-[68%] text-left ml-4">
          Discover the perfect necklace to frame your face and enhance your
          beauty, each piece a testament to our commitment to excellence.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
