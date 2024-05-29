import BestSelling from "@/components/BestSelling";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductCard />
      <BestSelling />
      <Contact />
    </>
  );
}
