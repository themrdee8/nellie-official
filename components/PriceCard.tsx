import Image from "next/image";
import React from "react";

const PriceCard = ({ price, name, imageUrl }: any) => {
  return (
    <div>
      <div>
        <Image src={imageUrl} alt={name} className="md:w-56 md:h-72 w-40 h-56 object-cover" />
      </div>

      <div className="flex justify-between md:w-56 w-40">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default PriceCard;
