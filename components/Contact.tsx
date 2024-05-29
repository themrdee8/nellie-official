import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import card from "@/public/assets/cards.jpg";

const Contact = () => {
  return (
    <div className="bg-[#E8E4DD] md:mx-48 md:mt-20 md:px-32 md:pt-28 md:pb-12 grid md:grid-cols-2 rounded-t-3xl space-x-16">
      <div>
        <div className="md:pb-4">
          <h1 className="md:font-bold md:text-2xl">Get In Touch</h1>
        </div>
        <div className="md:pb-4">
          <p>
            We are always available for pre-orders, special orders and any
            questions you may have.
          </p>
        </div>
        <div className="flex space-x-3">
          <div className="bg-[#975843] p-2 rounded-md">
            <FaInstagram className="text-[#DED8CD]" />
          </div>
          <div className="bg-[#975843] p-2 rounded-md">
            <FaXTwitter className="text-[#DED8CD]" />
          </div>
          <div className="bg-[#975843] p-2 rounded-md">
            <FaWhatsapp className="text-[#DED8CD]" />
          </div>
          <div className="bg-[#975843] p-2 rounded-md">
            <FaPinterestP className="text-[#DED8CD]" />
          </div>
        </div>
      </div>

      <div className="relative" >
        <Image
          src={card}
          alt="company_card"
          className="w-full h-52 pl-10 rounded-br-2xl rounded-tl-2xl object-fill absolute right-[72px] bottom-[12%]"
        />

        <div className="w-72 h-52 rounded-br-2xl right-[30px]  bg-[#3C302D]"></div>
      </div>
    </div>
  );
};

export default Contact;
