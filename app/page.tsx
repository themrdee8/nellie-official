import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductCard />
      <BestSelling />
    </>
  );
}
