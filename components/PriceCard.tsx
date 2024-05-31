import Image from "next/image";
import React from "react";

const PriceCard = ({ price, name, imageUrl }: any) => {
  return (
    <div>
      <div>
        <Image src={imageUrl} alt={name} className="md:w-56 md:h-72 w-44 h-60 object-cover" />
      </div>

      <div className="flex space-x-16 md:space-x-28">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default PriceCard;
