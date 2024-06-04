import PriceCard from "@/components/PriceCard";
import React from "react";
import ring from "@/public/assets/cover3.jpg";
import Image from "next/image";
import comingSoon from "@/public/assets/comingSoon.jpg";

const RingsPage = () => {
  return (
    <div className="pt-24 pb-28 flex items-center justify-center">
        <Image src={comingSoon} alt="Coming Soon" className="md:w-[30%] w-[70%] md:h-[10%] rounded-xl md:rounded-2xl object-cover" />
      </div>
    // <div className="md:px-20 px-8 py-32 grid md:grid-cols-none grid-cols-2 md:py-44 md:space-x-14">
    //   <div className="md:flex md:space-x-24 space-y-24 md:space-y-0">
    //     <PriceCard imageUrl={ring} name="goldRing" price="12.00" />
    //     <PriceCard imageUrl={ring} name="goldRing" price="12.00" />
    //   </div>
    //   <div className="md:flex md:space-x-24 space-y-24 md:space-y-0 md:pl-[600px] pt-44 md:pt-12">
    //     <PriceCard imageUrl={ring} name="goldRing" price="12.00" />
    //     <PriceCard imageUrl={ring} name="goldRing" price="12.00" />
    //   </div>

    //   <div className="md:flex md:space-x-24 space-y-24 md:space-y-0 pt-32 md:pt-24">
    //     <PriceCard imageUrl={ring} name="goldRing" price="12.00" />
    //     <PriceCard imageUrl={ring} name="goldRing" price="12.00" />
    //   </div>
    //   <div className="md:flex md:space-x-24 space-y-24 md:space-y-0 md:pl-[600px] pt-[300px] md:pt-12">
    //     <PriceCard imageUrl={ring} name="goldRing" price="12.00" />
    //     <PriceCard imageUrl={ring} name="goldRing" price="12.00" />
    //   </div>
    // </div>
  );
};

export default RingsPage;
