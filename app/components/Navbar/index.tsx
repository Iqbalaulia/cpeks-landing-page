"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { Logo } from "@/public/images";
import {
  ArrowDownResponsive,
  ArrowRightUpResponsive,
  ArrowRightUp,
  Close,
  NavChildrenActive,
  NavChildrenDeactive,
  NavStripeResponsive,
  NavUpArrow,
} from "@/public/icons/micro-component";
import useIsMounted from "@/app/hooks/useIsMounted";

interface NavbarProps {
  mainNavigation: {
    title: string;
    url: string;
    children?: {
      title: string;
      url: string;
      list?: string[];
      iconPath?: string;
    }[];
  }[];
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { mainNavigation } = props;
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showChildren, setShowChildren] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const isMounted = useIsMounted();


  const handleMouseEnter = (title: string) => {
    setHoveredItem(title);
    setShowChildren(true);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setShowChildren(false);
  };

  const changeNavMobile = () => {
    setShowNav((prevShowNav) => !prevShowNav);
    
  };

  const handleCloseButtonClick = () => {
    setShowNav(false);
  };

  return (
    <main className="w-full h-full relative sticky top-0 z-50 navbar">
      <nav className="w-full h-14 xl:h-20 bg-primary-blue flex justify-between text-white max-w-[1640px] z-50">
        <div className="flex items-center justify-start sm:justify-center px-[clamp(1rem,-0.186rem+5.059vw,5rem)] py-6 sm:py-[20px] min-w-fit">
          <Image
            src={Logo}
            alt=""
            width={192}
            height={40}
            className="w-[clamp(7.188rem,6.502rem+2.925vw,9.5rem)]"
          />
        </div>
        <div className="hidden xl:block w-full">
          <div className="flex items-center justify-center gap-[3%] 2xl:gap-[5%] text-xl h-full">
            {mainNavigation.map((item, idx) => (
              <div
                key={idx}
                className="hover:text-[#7ED4F2] font-light hover:font-medium transition-all flex relative py-8"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onClick={() => handleMouseEnter(item.title)}
              >
                <p
                  className="uppercase cursor-pointer"
                  onClick={() => {
                    if (!item.children) {
                      window.location.href = item.url;
                    }
                  }}
                >
                  {item.title}
                </p>
                {item.children ? (
                  item.title === hoveredItem ? (
                    <Image
                      src={NavChildrenActive}
                      alt=""
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src={NavChildrenDeactive}
                      alt=""
                      width={24}
                      height={24}
                      className="w-auto"
                    />
                  )
                ) : (
                  ""
                )}
                {showChildren &&
                  item.children &&
                  item.title === hoveredItem && (
                    <div
                      onMouseLeave={handleMouseLeave}
                      className="bg-white rounded-3xl text-primary-blue px-12 py-11 flex gap-7 w-fit absolute z-50 -bottom-[510px] 2xl:-bottom-[570px] left-1/2 transform -translate-x-1/2 scale-50 xl:scale-75 2xl:scale-95"
                    >
                      <Image
                        src={NavUpArrow}
                        alt=""
                        className="absolute -top-5 left-1/2 transform -translate-x-1/2"
                      />
                      {item.children?.map((data, index) => (
                        <div
                          key={index}
                          className="rounded-xl px-8 py-9 flex flex-col bg-nav-rect w-[440px] h-[502px] overflow-visible"
                        >
                          <div className="flex gap-2">
                            {data.iconPath && (
                              <Image
                                src={data.iconPath}
                                alt=""
                                width={60}
                                height={60}
                              />
                            )}
                            <div
                              className="rounded-full border border-primary-blue w-[60px] h-[60px] flex items-center justify-center group hover:bg-primary-blue cursor-pointer"
                              onClick={() => {
                                window.location.href = data.url;
                              }}
                            >
                              <Image
                                src={ArrowRightUp}
                                alt=""
                                width={36}
                                height={36}
                                className="group-hover:invert-0 invert"
                              />
                            </div>
                          </div>
                          <div className="text-4xl font-medium w-full py-8 border-b border-primary-cyan whitespace-pre-line break-words">
                            {data.title.includes(" ") ? (
                              <>
                                <div className="whitespace-pre">
                                  {data.title.substring(
                                    0,
                                    data.title.indexOf(" ")
                                  )}
                                </div>
                                <div>
                                  {data.title.substring(
                                    data.title.indexOf(" ") + 1
                                  )}
                                </div>
                              </>
                            ) : (
                              <div>{data.title}</div>
                            )}
                          </div>
                          <ul className="list-disc list-inside text-[28px] font-normal pt-8 gap-0">
                            {data.list?.map((subtitle, idx) => (
                              <li
                                key={idx}
                                className={` ${
                                  idx === data.list?.length ? "" : "pb-5"
                                }`}
                              >
                                <span className="relative -left-4">
                                  {subtitle}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
        <div className="cursor-pointer min-w-fit hidden w-fit bg-primary-purple text-2xl xl:flex items-center justify-end sm:justify-center pl-[84px] pr-[58px] gap-2 relative overflow-hidden">
          <div className="h-0 w-0 border-t-[50px] border-l-[40px] border-b-[50px] border-solid border-t-transparent border-b-transparent border-l-primary-blue absolute left-0"></div>
          <p className="uppercase">contact us</p>
          <Image src={ArrowRightUp} alt="" width={24} height={24} />
        </div>
        <div
          className="cursor-pointer min-h-full bg-primary-purple flex xl:hidden items-center justify-end sm:justify-center gap-1 relative overflow-hidden min-w-fit pl-16 sm:max-xl:pl-24 xl:pl-[54px] pr-4 sm:max-xl:pr-16"
          onClick={() => changeNavMobile()}
        >
          <div className="h-0 w-0 border-t-[50px] border-l-[40px] border-b-[50px] border-solid border-t-transparent border-b-transparent border-l-primary-blue absolute -left-1.5 sm:left-0"></div>
          <p className="uppercase text-xl sm:text-2xl font-light">menu</p>
          <Image src={NavStripeResponsive} alt="" width={20} height={20} />
        </div>
      </nav>
      <div
        className={`${
          !isMounted.current ? "hidden" : showNav ? "fadeIn" : "fadeOut"
        } w-[375px] h-screen bg-primary-blue fixed z-50 top-0 right-0 p-5`}
      >
        <div className="bg-[#DCE0FD] w-full h-full rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="" width={115} height={24} />

            <div
              className="bg-primary-blue rounded-full flex px-3 py-2 w-fit text-white cursor-pointer"
              onClick={handleCloseButtonClick}
            >
              Close <Image src={Close} alt="" width={21} height={20} />
            </div>
          </div>
          <div className="flex flex-col pt-6 pb-10">
            {mainNavigation.map((item, idx) => (
              <p
                key={idx}
                className="py-3 font-medium text-2xl border-b border-primary-purple/20 flex gap-4"
                onClick={() => {
                  if (!item.children) {
                    window.location.href = item.url;
                  }
                }}
              >
                {item.title}
                {item.children && (
                  <Image
                    src={ArrowDownResponsive}
                    alt=""
                    width={32}
                    height={32}
                  />
                )}
              </p>
            ))}
          </div>
          <div className="flex">
            <div className="bg-primary-blue py-[10px] text-lg px-5 rounded-full w-fit text-white">
              Contact us
            </div>
            <Image src={ArrowRightUpResponsive} alt="" width={45} height={45} />
          </div>
        </div>
      </div>
    </main>
  );
};
