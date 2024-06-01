import PriceCard from "@/components/PriceCard";
import React from "react";
import bracelet from "@/public/assets/bracelets/Butterflybracelet.jpg";
import bangleBracelet from "@/public/assets/bracelets/bangleBracelet.jpg";
import charmBracelet from "@/public/assets/bracelets/charmBracelet.jpg";
import butterfly2 from "@/public/assets/bracelets/butterfly2.jpg";
import goldPlatedCharm from "@/public/assets/bracelets/goldPlatedCharm.jpg";
import goldPlatedCharm2 from "@/public/assets/bracelets/goldPlatedCharm2.jpg";
import charmBracelet2 from "@/public/assets/bracelets/charmBracelet2.jpg";

const BraceletPage = () => {
  return (
    <div className="md:px-20 px-8 py-32 grid md:grid-cols-none grid-cols-2 md:py-44 md:space-x-14">
      <div className="md:flex md:space-x-24 space-y-24 md:space-y-0">
        <PriceCard
          imageUrl={bracelet}
          name="Butterfly charm bracelet"
          price="₵60.00"
        />
        <PriceCard
          imageUrl={bangleBracelet}
          name="Unisex bangle bracelet"
          price="₵70.00"
        />
      </div>
      <div className="md:flex md:space-x-24 space-y-24 md:space-y-0 md:pl-[600px] pt-44 md:pt-12">
        <PriceCard
          imageUrl={charmBracelet}
          name="Charm bracelet"
          price="₵60.00"
        />
        <PriceCard
          imageUrl={butterfly2}
          name="Butter bracelet"
          price="₵60.00"
        />
      </div>

      <div className="md:flex md:space-x-24 space-y-24 md:space-y-0 pt-32 md:pt-24">
        <PriceCard
          imageUrl={goldPlatedCharm}
          name="Gold plated charm"
          price="₵60.00"
        />
        <PriceCard
          imageUrl={goldPlatedCharm2}
          name="Gold plated charm"
          price="₵60.00"
        />
      </div>
      <div className="md:flex md:space-x-24 space-y-24 md:space-y-0 md:pl-[600px] pt-[300px] md:pt-12">
        <PriceCard
          imageUrl={charmBracelet2}
          name="charm Bracelet"
          price="₵60.00"
        />
        {/* <PriceCard imageUrl={bracelet} name="goldbracelet" price="₵12.00" /> */}
      </div>
    </div>
  );
};

export default BraceletPage;
