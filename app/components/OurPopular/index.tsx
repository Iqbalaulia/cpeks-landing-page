"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ArrowRightUp from "@/public/icons/micro-component/arrow-right-up.svg";
import "react-multi-carousel/lib/styles.css";
import useWindowWidth from "@/app/hooks/useWindowWidth";

interface WorkData {
  type: string;
  title: string;
  descriptions: string;
  from: string;
  timeFrame: string;
  services: string;
  url: string;
  imagePath: string;
}

const works: WorkData[] = [
  {
    type: "Shopify Development",
    title: "Shopify ECommerce Design & Development From Scratch With API",
    descriptions:
      "Cheapest Tshirts Canada stands as the leading Canadian distributor of premium wholesale apparel, boasting a diverse selection of over 25 renowned brands in apparel, headwear, and bags. With distribution centers strategically...",
    from: "Canada",
    timeFrame: "11 Months",
    services: "Web Design, Responsive",
    url: "",
    imagePath: "/images/our-popular-works-1.png",
  },
  {
    type: "Shopify Development",
    title: "Shopify ECommerce Design & Development From Scratch",
    descriptions:
      "Inspired by my great-great-great grandfather, John Cadbury, I founded Love Cocoa with the purpose of producing delicious, high-quality chocolate in an ethical and sustainable way. We're on a mission to drive positive change...",
    from: "Unites State",
    timeFrame: "3 Months",
    services: "Web Design, Responsive",
    url: "",
    imagePath: "/images/our-popular-works-2.png",
  },
  {
    type: "Shopify Development",
    title: "Custom Shopify ECommerce Development & Design From Scratch",
    descriptions:
      "Wyoming, United States — Purchasing home decor, furniture, gift items and other products all under one store often becomes a challenge. Oftentimes people have issues with the quality, price or the variety of products that do...",
    from: "Unites State",
    timeFrame: "2 Weeks",
    services: "Web Design, Responsive",
    url: "",
    imagePath: "/images/our-popular-works-3.png",
  },
];

export default function OurPopular() {
  const windowWidth = useWindowWidth();
  const [page, setPage] = useState(1);
  const [divider, setDivider] = useState(1);
  const currentPage = Math.ceil(works.length / divider);
  const maxVisiblePages = 3;
  const dividedDatas: WorkData[][] = [];
  useEffect(() => {
    if (windowWidth <= 1280) {
      setDivider(1);
    } else {
      setDivider(3);
    }
  }, [windowWidth]);
  let displayPage = [];
  let startPage = Math.max(1, Math.min(page - 1, currentPage - maxVisiblePages + 1));
  let endPage = Math.min(currentPage, startPage + maxVisiblePages - 1);
  for (let i = startPage; i <= endPage; i++) {
    displayPage.push(
      <button
        key={i}
        className={`h-2 rounded-full transition-all ${
          page === i ? "active w-8 bg-primary-purple" : "inactive w-2 bg-haze"
        }`}
        onClick={(e) => setPage(i)}
        value={i}
      ></button>
    );
  }
  for (let i = 0; i < works.length; i += divider) {
    dividedDatas.push(works.slice(i, i + divider));
  }
  if (currentPage - endPage < Math.floor(maxVisiblePages / 2)) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  return (
    <section className="flex flex-col items-center py-[clamp(5rem,4.629rem+1.581vw,6.25rem)] bg-primary-blue relative gap-[clamp(2rem,1.111rem+3.794vw,5rem)] px-[clamp(1rem,-0.186rem+5.059vw,5rem)]">
      <h1 className="text-white font-medium text-center text-[clamp(2rem,1.296rem+3.004vw,4.375rem)]">
        Our <span className="text-primary-purple">Popular</span> Work
      </h1>
      <div className="flex flex-col items-center w-full gap-[clamp(3.25rem,2.361rem+3.794vw,6.25rem)]">
        {dividedDatas[page-1].map((work, index) => (
          <div key={index} className="flex flex-col xl:flex-row gap-[clamp(1.5rem,0.462rem+4.427vw,5rem)]">
            <Image
              src={work.imagePath}
              alt=""
              width={700}
              height={450}
              className="rounded-2xl h-fit 2xl:w-[700px]"
            />
            <div className="flex flex-col gap-6 xl:gap-8 text-white max-w-[700px]">
              <div className="flex flex-col gap-6">
                <div className="bg-white rounded-full py-[6px] px-3 uppercase w-fit text-primary-blue text-[clamp(0.75rem,0.639rem+0.474vw,1.125rem)]">
                  {work.type}
                </div>
                <h1 className="text-[clamp(1.5rem,1.204rem+1.265vw,2.5rem)] font-medium leading-10">
                  {work.title}
                </h1>
                <p className="text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] font-proxima-nova-400">{work.descriptions}</p>
                <div className="grid grid-cols-12 col-auto gap-y-6">
                  <div className="flex flex-col gap-3 max-sm:row-start-1 col-span-6 sm:col-span-4">
                    <p className="text-[clamp(1rem,0.963rem+0.158vw,1.125rem)]">FROM</p>
                    <p className="text-[clamp(1.25rem,1.176rem+0.316vw,1.5rem)]">{work.from}</p>
                  </div>
                  <div className="flex flex-col gap-3 max-sm:row-start-1 col-span-6 sm:col-span-4">
                    <p className="text-[clamp(1rem,0.963rem+0.158vw,1.125rem)]">TIMEFRAME</p>
                    <p className="text-[clamp(1.25rem,1.176rem+0.316vw,1.5rem)]">{work.timeFrame}</p>
                  </div>
                  <div className="flex flex-col gap-3 max-sm:row-start-2 col-span-12 sm:col-span-4">
                    <p className="text-[clamp(1rem,0.963rem+0.158vw,1.125rem)]">SERVICES</p>
                    <p className="text-[clamp(1.25rem,1.176rem+0.316vw,1.5rem)]">{work.services}</p>
                  </div>
                </div>
              </div>
              <div className="hidden xl:flex gap-6 items-center">
                <p className="md:text-xl">View Details</p>
                <div className="w-[clamp(2.375rem,2.116rem+1.107vw,3.25rem)] h-[clamp(2.375rem,2.116rem+1.107vw,3.25rem)] rounded-full border border-white flex items-center justify-center">
                  <Image src={ArrowRightUp} alt="" width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="xl:hidden flex gap-x-2">{displayPage}</div>
      </div>
    </section>
  );
}
