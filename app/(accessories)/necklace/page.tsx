import PriceCard from "@/components/PriceCard";
import React from "react";
import necklace from "@/public/assets/necklaces/Lovenecklace.jpg";

const NecklacePage = () => {
  return (
    <div className="md:px-20 px-8 py-32 grid md:grid-cols-none grid-cols-2 md:py-44 md:space-x-14 space-x-6">
      <div className="md:flex md:space-x-24 space-y-24 md:space-y-0">
        <PriceCard imageUrl={necklace} name="goldRing" price="12.00" />
        <PriceCard imageUrl={necklace} name="goldRing" price="12.00" />
      </div>
      <div className="md:flex md:space-x-24 space-y-24 md:space-y-0 md:pl-[600px] md:pt-12">
        <PriceCard imageUrl={necklace} name="goldRing" price="12.00" />
        <PriceCard imageUrl={necklace} name="goldRing" price="12.00" />
      </div>
      {/* <div className="md:flex md:space-x-24 md:space-y-0 md:pt-12 md:pr-32">
        <PriceCard imageUrl={necklace} name="goldRing" price="12.00" />
        <PriceCard imageUrl={necklace} name="goldRing" price="12.00" />
      </div> */}
    </div>
  );
};

export default NecklacePage;
