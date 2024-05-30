import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import card from "@/public/assets/cards.jpg";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#E8E4DD] mx-4 md:mx-48 mt-8 md:mt-20 px-12 md:px-32 pt-6 md:pt-28 md:pb-12 grid md:grid-cols-2 rounded-t-3xl space-x-16"
    >
      <div>
        <div className="md:pb-4 pb-3">
          <h1 className="md:font-bold md:text-2xl text-xl font-medium">
            Get In Touch
          </h1>
        </div>
        <div className="md:pb-4">
          <p className="md:pb-0 pb-4 text-sm md:text-base font-light md:font-normal">
            We are always available for pre-orders, special orders and any
            questions you may have.
          </p>
        </div>
        <div className="flex space-x-3 md:pb-4 pb-8">
          <Link href="https://www.instagram.com/nellie_.offical?igsh=YnlhZXZsbnRjcmFq">
            <div className="bg-[#975843] p-2 rounded-md">
              <FaInstagram className="text-[#DED8CD]" />
            </div>
          </Link>
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

      <div className="relative hidden md:block">
        <Image
          src={card}
          alt="company_card"
          className="md:w-full md:h-52 pl-10 rounded-br-2xl rounded-tl-2xl object-fill absolute right-[72px] bottom-[12%]"
        />

        <div className="md:w-72 md:h-52 rounded-br-2xl right-[30px]  bg-[#3C302D]"></div>
      </div>

      <div className="flex justify-center items-center py-2 md:py-8 space-x-4">
        <Link href="#home">
          <div className="rounded-full shadow-lg shadow-[#A9A295] p-3 md:p-5 cursor-pointer ease-in duration-300 hover:scale-105">
            <HiOutlineChevronDoubleUp className="text-[#975843]" size={25} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
