"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowHeight from "@/app/hooks/useWindowHeight";
import useWindowWidth from "@/app/hooks/useWindowWidth";

export default function OurServices() {
  const windowWidth = useWindowWidth();
  const [gridThree, setGridThree] = useState(true);
  useEffect(() => {
    if (windowWidth <= 1130) {
      setGridThree(false);
    } else {
      setGridThree(true);
    }
  }, [windowWidth]);
  return (
    <div className="bg-primary-blue px-[clamp(1rem,-0.186rem+5.059vw,5rem)] pt-[clamp(5rem,4.629rem+1.581vw,6.25rem)] pb-[clamp(5rem,4.407rem+2.53vw,7rem)]">
      <div className="layout">
        <h2 className="text-white text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium mb-[clamp(2rem,1.629rem+1.581vw,3.25rem)]">
          Our <span className="text-services">Services</span>
        </h2>
        <div
          className={`grid grid-cols-1 !2xl:gap-10 ${gridThree ? "grid-cols-3" : "md:grid-cols-2"
            } gap-[clamp(1.5rem,1.426rem+0.316vw,1.75rem)] w-full`}
        >
          {OurServicesData.map((service, index) => (
            <div key={index} className="mx-auto">
              <div
                className="relative w-[343px] h-[472px] 2xl:w-[clamp(21.438rem,18.992rem+10.435vw,27.688rem)] 2xl:h-[clamp(29.5rem,26.61rem+12.332vw,38.25rem)]"
              >
                <Image
                  src="/images/about-bg.png"
                  alt="our services background"
                  width={950}
                  height={1256}
                />
                <div className="absolute h-full w-full top-0 left-0 px-4 py-8 smx:p-6 md:p-8 1xl:py-[44px] 1xl:px-7 2xl:py-[52px] 2xl:px-8 flex flex-col gap-5">
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center rounded-full bg-primary-blue w-[52px] 2xl:w-[clamp(3.25rem,2.731rem+2.213vw,5rem)] h-[52px] 2xl:h-[clamp(3.25rem,2.731rem+2.213vw,5rem)]">
                      <Image
                        src={service.icon}
                        alt="pen"
                        width={44}
                        height={44}
                        className="w-[32px] 2xl:w-[clamp(2rem,1.778rem+0.949vw,2.75rem)]"
                      />
                    </div>
                    <Link href={"/service"}>
                      <div className="bg-transparent hover:cursor-pointer transition-all ease-in-out duration-300 border group border-white flex items-center justify-center rounded-full hover:bg-white w-[52px] 2xl:w-[clamp(3.25rem,2.731rem+2.213vw,5rem)] h-[52px] 2xl:h-[clamp(3.25rem,2.731rem+2.213vw,5rem)]">
                        <Image
                          src="/icons/right-up-abt.svg"
                          alt="pen"
                          width={44}
                          height={44}
                          className="w-[32px] xl:w-[clamp(2rem,1.778rem+0.949vw,2.75rem)] brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                        />
                      </div>
                    </Link>
                  </div>
                  <h5 className="text-white text-[32px] 2xl:text-[clamp(2rem,1.667rem+1.423vw,3.125rem)] leading-[1.1]">
                    {service.title.map((word, index) => (
                      <span key={index}>
                        {word}{" "}
                        <br className={index === 0 ? "block" : "hidden"} />
                      </span>
                    ))}
                  </h5>
                  <hr className="border-white my-2" />
                  <ul className="space-y-2 smx:space-y-3 text-[24px] 2xl:text-[clamp(1.5rem,1.278rem+0.949vw,2.20rem)] text-white">
                    {service.list.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-start gap-3"
                      >
                        <span className="block w-2 h-2 rounded-full bg-white"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const OurServicesData = [
  {
    title: ["Product", "Design"],
    icon: "/icons/pen-tool-abt.svg",
    list: ["UI/UX Designer", "Web Design", "Branding", "Landing Page"],
  },
  {
    title: ["Product", "Development"],
    icon: "/icons/code-developer.svg",
    list: [
      "Web development",
      "Software development",
      "CMS development",
      "No-code development",
    ],
  },
  {
    title: ["Product", "Growth & Care"],
    icon: "/icons/chart-bar-up.svg",
    list: [
      "Content marketing",
      "Digital Marketing",
      "Pitch deck design",
      "SEO",
    ],
  },
];
