import React from "react";
import charmBrace from "@/public/assets/bracelets/charmBracelet.jpg";
import butterfly from "@/public/assets/bracelets/butterfly2.jpg";
import dropEarring from "@/public/assets/earrings/dropEarring.jpg";
import bangleBrace from "@/public/assets/bracelets/bangleBracelet.jpg";
import Image from "next/image";

const BestSelling = () => {
  return (
    <div className="bg-[#E8E4DD] rounded-2xl md:rounded-3xl mx-4 md:mx-48 mt-6 md:mt-24 p-6 md:p-10 md:grid-cols-1 items-center justify-between">
      <div className="md:pb-10 pb-4">
        <h1 className="md:text-4xl md:font-bold text-xl font-semibold">Best Selling Highlights</h1>
      </div>
      <div className="md:flex md:px-4 grid grid-cols-2 space-x-4 md:space-x-6 md:w-full">
        <div className="">
          <div className="md:pb-4 pb-1 ml-4 md:ml-0">
            <Image
              src={charmBrace}
              alt="charm_bracelet"
              className="md:w-64 md:h-36 w-52 h-24 object-cover rounded-lg md:rounded-xl"
            />
          </div>
          <h1 className="md:text-xl text-sm md:font-semibold ml-4 md:ml-0 font-medium">Charm Bracelet</h1>
          <p className="hidden md:block">
            Our best-selling gold ring features a captivating gemstone that adds
            a subtle yet eye-catching touch to any ensemble.
          </p>
        </div>

        <div className="">
          <div className="md:pb-4 pb-1">
            <Image
              src={butterfly}
              alt="butterfly_bracelet"
              className="md:w-64 md:h-36 w-52 h-24 object-cover rounded-lg md:rounded-xl"
            />
          </div>
          <h1 className="md:text-xl text-sm md:font-semibold pb-1 md:pb-0 font-medium">Butterfly Bracelet</h1>
          <p className="hidden md:block">
            Our best-selling gold ring features a captivating gemstone that adds
            a subtle yet eye-catching touch to any ensemble.
          </p>
        </div>

        <div className="mr-10">
          <div className="md:pb-4 pb-1">
            <Image
              src={bangleBrace}
              alt="Bangle_bracelet"
              className="md:w-64 md:h-36 w-52 h-24 object-cover rounded-lg md:rounded-xl"
            />
          </div>
          <h1 className="md:text-xl text-sm md:font-semibold font-medium">Bangle Bracelet</h1>
          <p className="hidden md:block">
            Our best-selling gold ring features a captivating gemstone that adds
            a subtle yet eye-catching touch to any ensemble.
          </p>
        </div>

        <div>
          <div className="md:pb-4 pb-1">
            <Image
              src={dropEarring}
              alt="drop_earrings"
              className="md:w-64 md:h-36 w-52 h-24 object-cover rounded-lg md:rounded-xl"
            />
          </div>
          <h1 className="md:text-xl text-sm md:font-semibold font-medium">Drop Earrings</h1>
          <p className="hidden md:block">
            Our best-selling gold ring features a captivating gemstone that adds
            a subtle yet eye-catching touch to any ensemble.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
