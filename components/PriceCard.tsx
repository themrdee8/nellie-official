import Image from "next/image";
import React from "react";

const PriceCard = ({ price, name, imageUrl }: any) => {
  return (
    <div>
      <div>
        <Image src={imageUrl} alt={name} className="md:w-56 md:h-72 w-40 h-56 object-cover rounded-xl" />
      </div>

      <div className="flex justify-between md:w-56 w-40">
        <p className="uppercase text-sm font-sans">{name}</p>
        <p className="uppercase text-sm font-mono">{price}</p>
      </div>
    </div>
  );
};

export default PriceCard;
