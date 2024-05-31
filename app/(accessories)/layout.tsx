"use client";

import Image from "next/image";
import coverImg from "@/public/assets/cover3.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const AccessoriesLayout = ({ children }: { children: React.ReactNode }) => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;

  //     console.log("Scroll Top:", scrollTop); // Debug scroll position

  //     const coverImage = document.getElementById("coverImage");
  //     const childrenContainer = document.getElementById("childrenContainer");

  //     if (coverImage) {
  //       const transformValue = `rotateY(${scrollTop * 0.1}deg) translateZ(${
  //         scrollTop * 0.2
  //       }px)`;
  //       console.log("Cover Image Transform:", transformValue); // Debug transform value
  //       coverImage.style.transform = transformValue;
  //     }
  //     if (childrenContainer) {
  //       const transformValue = `rotateX(${scrollTop * 0.1}deg) translateZ(${
  //         scrollTop * 0.2
  //       }px)`;
  //       console.log("Children Container Transform:", transformValue); // Debug transform value
  //       childrenContainer.style.transform = transformValue;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const routes = [
    { label: "Rings", href: "/rings" },
    { label: "Earrings", href: "/earrings" },
    { label: "Bracelet", href: "/bracelet" },
    { label: "Necklace", href: "/necklace" },
  ];

  const pathname = usePathname();

  return (
    <div
      className="h-full w-full bg-white overflow-y-scroll perspective"
      // style={{ perspective: "1000px" }}
    >
      <div className="relative transform-3d">
        <div className="" id="coverImage">
          <Image
            src={coverImg}
            alt="cover_image"
            className="w-full h-[650px] object-cover transform-gpu"
          />
        </div>

        <div className="flex items-center justify-center space-x-5 md:space-x-24 pt-5">
          {routes.map((route) => (
            <Link href={route.href} key={route.href}>
              <div className="flex items-center group">
                <div
                  className={cn(
                    "border border-black px-2 py-[4px] group-hover:bg-black rounded-md mr-1 hover:transition duration-500",
                    pathname === route.href ? "bg-black" : "bg-white"
                  )}
                />

                <p>{route.label}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white transform-gpu" id="childrenContainer">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesLayout;
