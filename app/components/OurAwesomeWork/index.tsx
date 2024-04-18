"use client";

import React, { useEffect, useState } from "react";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import ChevronRight from "@/public/icons/chevron-right.svg";
import Image from "next/image";

type Props = {};

interface WorkData {
  type: string;
  title: string;
  desc: string;
  from: string;
  timeframe: string;
  services: string;
  imagePath: string;
}

const datas: WorkData[] = [
  {
    type: "e-commerce",
    title: "Development & design for Monartti jewellery PrestaShop Store",
    desc: "Tincidunt enim cursus nunc suscipit adipiscing amet. Feugiat massa urna suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero. suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero.",
    from: "Unites Kingdom",
    timeframe: "2 Weeks",
    services: "Web Design, Responsive",
    imagePath: "/images/our-awesome-work-1.png",
  },
  {
    type: "e-commerce",
    title: "Development & design for Body Building Latino PrestaShop Store",
    desc: "Tincidunt enim cursus nunc suscipit adipiscing amet. Feugiat massa urna suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero. suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero.",
    from: "Unites Kingdom",
    timeframe: "2 Weeks",
    services: "Web Design, Responsive",
    imagePath: "/images/our-awesome-work-2.png",
  },
  {
    type: "e-commerce",
    title: "Development & design for Mon Bucheron PrestaShop Store",
    desc: "Tincidunt enim cursus nunc suscipit adipiscing amet. Feugiat massa urna suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero. suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero.",
    from: "Unites Kingdom",
    timeframe: "2 Weeks",
    services: "Web Design, Responsive",
    imagePath: "/images/our-awesome-work-3.png",
  },
  {
    type: "e-commerce",
    title: "Development & design for Simply Moda PrestaShop Store",
    desc: "Tincidunt enim cursus nunc suscipit adipiscing amet. Feugiat massa urna suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero. suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero.",
    from: "Unites Kingdom",
    timeframe: "2 Weeks",
    services: "Web Design, Responsive",
    imagePath: "/images/our-awesome-work-4.png",
  },
  {
    type: "e-commerce",
    title: "Development & design for Precious Direct PrestaShop Store",
    desc: "Tincidunt enim cursus nunc suscipit adipiscing amet. Feugiat massa urna suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero. suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero.",
    from: "Unites Kingdom",
    timeframe: "2 Weeks",
    services: "Web Design, Responsive",
    imagePath: "/images/our-awesome-work-5.png",
  },
  {
    type: "e-commerce",
    title: "Development & design for Optic Room PrestaShop Store",
    desc: "Tincidunt enim cursus nunc suscipit adipiscing amet. Feugiat massa urna suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero. suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero.",
    from: "Unites Kingdom",
    timeframe: "2 Weeks",
    services: "Web Design, Responsive",
    imagePath: "/images/our-awesome-work-6.png",
  },
  {
    type: "e-commerce",
    title: "Development & design for Monartti jewellery PrestaShop Store",
    desc: "Tincidunt enim cursus nunc suscipit adipiscing amet. Feugiat massa urna suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero. suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero.",
    from: "Unites Kingdom",
    timeframe: "2 Weeks",
    services: "Web Design, Responsive",
    imagePath: "/images/our-awesome-work-1.png",
  },
  {
    type: "e-commerce",
    title: "Development & design for Monartti jewellery PrestaShop Store",
    desc: "Tincidunt enim cursus nunc suscipit adipiscing amet. Feugiat massa urna suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero. suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero.",
    from: "Unites Kingdom",
    timeframe: "2 Weeks",
    services: "Web Design, Responsive",
    imagePath: "/images/our-awesome-work-2.png",
  },
  {
    type: "e-commerce",
    title: "Development & design for Monartti jewellery PrestaShop Store",
    desc: "Tincidunt enim cursus nunc suscipit adipiscing amet. Feugiat massa urna suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero. suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero.",
    from: "Unites Kingdom",
    timeframe: "2 Weeks",
    services: "Web Design, Responsive",
    imagePath: "/images/our-awesome-work-3.png",
  },
  {
    type: "e-commerce",
    title: "Development & design for Monartti jewellery PrestaShop Store",
    desc: "Tincidunt enim cursus nunc suscipit adipiscing amet. Feugiat massa urna suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero. suspendisse cursus. Massa mauris cras vitae at egestas id imperdiet id. Libero.",
    from: "Unites Kingdom",
    timeframe: "2 Weeks",
    services: "Web Design, Responsive",
    imagePath: "/images/our-awesome-work-4.png",
  },
];

const OurAwesomeWorks = (props: Props) => {
  const windowWidth = useWindowWidth();
  const [page, setPage] = useState(1);
  const [divider, setDivider] = useState(6);
  const currentPage = Math.ceil(datas.length / divider);
  const maxVisiblePages = 3;
  const dividedDatas: WorkData[][] = [];
  let displayPage = [];
  let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(currentPage, startPage + maxVisiblePages - 1);
  useEffect(() => {
    if (windowWidth <= 768) {
      setDivider(2);
    } else {
      setDivider(6);
    }
  }, [windowWidth]);
  for (let i = 0; i < datas.length; i += divider) {
    dividedDatas.push(datas.slice(i, i + divider));
  }
  if (currentPage - endPage < Math.floor(maxVisiblePages / 2)) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  for (let i = startPage; i <= endPage; i++) {
    displayPage.push(
      <button
        key={i}
        className={`w-[clamp(2.5rem,2.278rem+0.949vw,3.25rem)] h-[clamp(2.5rem,2.278rem+0.949vw,3.25rem)] border border-primary-blue rounded-full hover:bg-primary-blue/20 text-[clamp(1.25rem,1.065rem+0.791vw,1.875rem)] shadow-xl ${
          page === i ? "bg-primary-blue text-white" : "text-primary-blue"
        }`}
        onClick={(e) => setPage(i)}
        value={i}
      >
        {i}
      </button>
    );
  }
  if (startPage > 1) {
    displayPage.unshift(
      <div
        key="ellipsis-start"
        className="w-[clamp(2.5rem,2.278rem+0.949vw,3.25rem)] h-[clamp(2.5rem,2.278rem+0.949vw,3.25rem)] border border-primary-blue rounded-full hover:bg-primary-blue/20 text-[clamp(1.25rem,1.065rem+0.791vw,1.875rem)] shadow-xl text-primary-blue flex items-center justify-center"
      >
        ...
      </div>
    );
  }
  if (endPage < currentPage) {
    displayPage.push(
      <div
        key="ellipsis-end"
        className="w-[clamp(2.5rem,2.278rem+0.949vw,3.25rem)] h-[clamp(2.5rem,2.278rem+0.949vw,3.25rem)] border border-primary-blue rounded-full hover:bg-primary-blue/20 text-[clamp(1.25rem,1.065rem+0.791vw,1.875rem)] shadow-xl text-primary-blue flex items-center justify-center"
      >
        ...
      </div>
    );
  }
  const goToPreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const goToNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, currentPage));
  };
  return (
    <section className="px-[clamp(1rem,-0.186rem+5.059vw,5rem)] py-[clamp(5rem,4.629rem+1.581vw,6.25rem)]">
      <div className="layout flex flex-col gap-[clamp(2rem,1.111rem+3.794vw,5rem)]">
        <h1 className="text-primary-blue font-medium text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] max-lg:text-center">
          Our <span className="text-primary-purple">Awesome</span> Work
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,1.111rem+3.794vw,5rem)]">
          {dividedDatas[page - 1].map((data: WorkData, index: number) => (
            <div
              key={index}
              className={`${
                index % 2 != 0 ? "md:translate-y-8" : "md:-translate-y-8"
              } flex flex-col-reverse md:flex-col gap-6`}
            >
              <div className="flex flex-col gap-6">
                <div className="bg-[#8F7DF4] px-3 py-[6px] rounded-full w-fit">
                  <p className="uppercase text-white max-lg:text-xs">
                    {data.type}
                  </p>
                </div>
                <h1 className="font-medium text-[clamp(1.5rem,1.204rem+1.265vw,2.5rem)] text-primary-blue leading-none">
                  {data.title}
                </h1>
                <p className="text-primary-blue/60 text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] font-proxima-nova-400">
                  {data.desc}
                </p>
                <div className="grid grid-flow-col text-primary-blue gap-y-6">
                  <div className="flex flex-col gap-3">
                    <p className="text-[clamp(1rem,0.963rem+0.158vw,1.125rem)]">
                      FROM
                    </p>
                    <p className="text-[clamp(1.25rem,1.176rem+0.316vw,1.5rem)]">
                      {data.from}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-[clamp(1rem,0.963rem+0.158vw,1.125rem)]">
                      TIMEFRAME
                    </p>
                    <p className="text-[clamp(1.25rem,1.176rem+0.316vw,1.5rem)]">
                      {data.timeframe}
                    </p>
                  </div>
                  <div
                    className={`flex flex-col gap-3 ${
                      windowWidth <= 1450 && "col-span-full row-start-2"
                    }`}
                  >
                    <p className="text-[clamp(1rem,0.963rem+0.158vw,1.125rem)]">
                      SERVICES
                    </p>
                    <p className="text-[clamp(1.25rem,1.176rem+0.316vw,1.5rem)]">
                      {data.services}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`w-full h-[clamp(13.75rem,9.489rem+18.182vw,28.125rem)] bg-gray-200 rounded-2xl overflow-hidden border border-primary-purple shadow-xl`}
              >
                <Image
                  src={data.imagePath}
                  alt=""
                  width={700}
                  height={450}
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-x-2 sm:gap-x-5 justify-center pt-5 pb-5">
          <div
            className="bg-primary-purple flex items-center justify-center rounded-full w-[clamp(2.5rem,2.278rem+0.949vw,3.25rem)] h-[clamp(2.5rem,2.278rem+0.949vw,3.25rem)] shadow-xl"
            onClick={goToPreviousPage}
          >
            <Image
              src={ChevronRight}
              alt=""
              width={32}
              height={32}
              className="rotate-180 w-[clamp(1.5rem,1.352rem+0.632vw,2rem)]"
            />
          </div>
          <div className="flex gap-x-2 sm:gap-x-5">{displayPage}</div>
          <div
            className="bg-primary-purple flex items-center justify-center rounded-full w-[clamp(2.5rem,2.278rem+0.949vw,3.25rem)] h-[clamp(2.5rem,2.278rem+0.949vw,3.25rem)] shadow-xl"
            onClick={goToNextPage}
          >
            <Image
              src={ChevronRight}
              alt=""
              width={32}
              height={32}
              className="w-[clamp(1.5rem,1.352rem+0.632vw,2rem)]"
            />
          </div>
        </div>
        <div className="bg-[#4CB3ED]/20 rounded-2xl flex flex-col gap-6 p-[clamp(1rem,0.555rem+1.897vw,2.5rem)]">
          <h1 className="font-medium text-[clamp(1.5rem,1.352rem+0.632vw,2rem)] max-sm:w-[260px]">
            Attention: Portfolio Limited by NDA
          </h1>
          <p className="font-proxima-nova-400 font-light text-[clamp(1rem,0.926rem+0.316vw,1.25rem)]">
            Thank you for exploring our portfolio! Please note that due to
            confidentiality agreements (NDA) with some clients, not all projects
            are showcased. If you have specific inquiries or would like to learn
            more about our diverse range of work, please don&apos;t hesitate to
            reach out. Your understanding is appreciated
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurAwesomeWorks;
