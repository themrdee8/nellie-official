import PriceCard from "@/components/PriceCard";
import React from "react";
import necklace from "@/public/assets/necklaces/Lovenecklace.jpg";
import pendantBlue from "@/public/assets/necklaces/lovependantBlue.jpg";
import pendantWhite from "@/public/assets/necklaces/lovependantWhite.jpg";
import pendantCrsytal from "@/public/assets/necklaces/lovependantCrystal.jpg";

const NecklacePage = () => {
  return (
    <div className="">
      <div className="md:px-20 px-8 py-24 grid md:grid-cols-none grid-cols-2 md:py-44 md:space-x-14">
        <div className="md:flex md:space-x-24 space-y-24 md:space-y-0">
          <PriceCard
            imageUrl={pendantBlue}
            name="Love Pendant Blue"
            price="₵50.00"
          />
          <PriceCard
            imageUrl={pendantCrsytal}
            name="Love Pendant Crystal"
            price="₵50.00"
          />
        </div>
        <div className="md:flex md:space-x-24 space-y-24 md:space-y-0 md:pl-[600px] pt-44 md:pt-12">
          <PriceCard
            imageUrl={pendantWhite}
            name="Love Pendant White"
            price="₵50.00"
          />
          {/* <PriceCard imageUrl={necklace} name="goldnecklace" price="12.00" /> */}
        </div>

        <div className="md:flex md:space-x-24 space-y-24 md:space-y-0 pt-32 md:pt-24">
          {/* <PriceCard imageUrl={necklace} name="goldnecklace" price="12.00" /> */}
          {/* <PriceCard imageUrl={necklace} name="goldnecklace" price="12.00" /> */}
        </div>
        <div className="md:flex md:space-x-24 space-y-24 md:space-y-0 md:pl-[600px] pt-[300px] md:pt-12">
          {/* <PriceCard
            imageUrl={necklace}
            name="goldnecklace"
            price="12.00"
            className="-space-x-2"
          /> */}
          {/* <PriceCard imageUrl={necklace} name="goldnecklace" price="12.00" /> */}
        </div>
      </div>
    </div>
  );
};

export default NecklacePage;
