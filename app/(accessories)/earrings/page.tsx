import PriceCard from "@/components/PriceCard";
import React from "react";
import earrings from "@/public/assets/earrings/dropEarring.jpg";
import studEarrings from "@/public/assets/earrings/silvergoldEar.jpg";
import goldPlated from "@/public/assets/earrings/goldPlatedStud.jpg";
import goldStud from "@/public/assets/earrings/goldStud.jpg";
import silverClipOnGold from "@/public/assets/earrings/silverClipOn.jpg";
import doubleHoop from "@/public/assets/earrings/doubleHoop.jpg";
import goldStud2 from "@/public/assets/earrings/goldStud2.jpg";
import huggieHoop from "@/public/assets/earrings/huggieHoop.jpg";

const EarringsPage = () => {
  return (
    <div className="md:px-20 px-8 py-32 grid md:grid-cols-none grid-cols-2 md:py-44 md:space-x-14">
      <div className="md:flex md:space-x-24 space-y-24 md:space-y-0">
        <PriceCard imageUrl={earrings} name="Drop Earrings" price="₵60.00" />
        <PriceCard
          imageUrl={studEarrings}
          name="Stud Earrings"
          price="₵50.00"
        />
      </div>
      <div className="md:flex md:space-x-24 space-y-24 md:space-y-0 md:pl-[600px] pt-44 md:pt-12">
        <PriceCard
          imageUrl={goldPlated}
          name="Gold Plated Stud"
          price="₵50.00"
        />
        <PriceCard imageUrl={goldStud} name="Gold Stud" price="₵50.00" />
      </div>

      <div className="md:flex md:space-x-24 space-y-24 md:space-y-0 pt-32 md:pt-24">
        <PriceCard
          imageUrl={silverClipOnGold}
          name="Silver clip ons"
          price="₵50.00"
        />
        <PriceCard imageUrl={doubleHoop} name="Double Hoop" price="₵60.00" />
      </div>
      <div className="md:flex md:space-x-24 space-y-24 md:space-y-0 md:pl-[600px] pt-[300px] md:pt-12">
        <PriceCard imageUrl={goldStud2} name="Gold stud" price="₵50.00" />
        <PriceCard imageUrl={huggieHoop} name="Huggie hoop" price="₵60.00" />
      </div>
    </div>
  );
};

export default EarringsPage;
