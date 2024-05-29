import React from "react";
import charmBrace from "@/public/assets/bracelets/charmBracelet.jpg";
import butterfly from "@/public/assets/bracelets/butterfly2.jpg";
import dropEarring from "@/public/assets/earrings/dropEarring.jpg";
import bangleBrace from "@/public/assets/bracelets/bangleBracelet.jpg";
import Image from "next/image";

const BestSelling = () => {
  return (
    <div className="bg-[#E8E4DD] rounded-2xl md:rounded-3xl mx-4 md:mx-48 mt-6 md:mt-24 md:p-10 md:grid-cols-1 grid grid-cols-2 items-center justify-between">
      <div className="md:pb-10">
        <h1 className="md:text-4xl md:font-bold">Best Selling Highlights</h1>
      </div>
      <div className="md:flex md:px-4 space-x-6 w-full">
        <div className="">
          <div className="md:pb-4">
            <Image
              src={charmBrace}
              alt="charm_bracelet"
              className="w-64 h-36 object-cover rounded-xl"
            />
          </div>
          <h1 className="md:text-xl font-semibold">Charm Bracelet</h1>
          <p>
            Our best-selling gold ring features a captivating gemstone that adds
            a subtle yet eye-catching touch to any ensemble.
          </p>
        </div>

        <div className="">
          <div className="md:pb-4">
            <Image
              src={butterfly}
              alt="butterfly_bracelet"
              className="w-64 h-36 object-cover rounded-xl"
            />
          </div>
          <h1 className="md:text-xl font-semibold">Butterfly Bracelet</h1>
          <p>
            Our best-selling gold ring features a captivating gemstone that adds
            a subtle yet eye-catching touch to any ensemble.
          </p>
        </div>

        <div className="mr-10">
          <div className="md:pb-4">
            <Image
              src={bangleBrace}
              alt="Bangle_bracelet"
              className="w-64 h-36 object-cover rounded-xl"
            />
          </div>
          <h1 className="md:text-xl font-semibold">Bangle Bracelet</h1>
          <p>
            Our best-selling gold ring features a captivating gemstone that adds
            a subtle yet eye-catching touch to any ensemble.
          </p>
        </div>

        <div>
          <div className="md:pb-4">
            <Image
              src={dropEarring}
              alt="drop_earrings"
              className="w-64 h-36 object-cover rounded-xl"
            />
          </div>
          <h1 className="md:text-xl font-semibold">Drop Earrings</h1>
          <p>
            Our best-selling gold ring features a captivating gemstone that adds
            a subtle yet eye-catching touch to any ensemble.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
