"use client";
import React from "react";
import Image from "next/image";
import Carousel, { DotProps } from "react-multi-carousel";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import styles from "./carousell.module.css";

export default function AwesomeWorks({ type }: { type: string }) {
  const CustomDot = ({ onClick, active }: DotProps) => {
    return (
      <li
        className={`${
          active ? "active w-8 bg-primary-purple" : "inactive w-2 bg-haze"
        } h-2 mr-2 rounded-full transition-all`}
        onClick={onClick}
      />
    );
  };
  const windowWidth = useWindowWidth();
  return (
    <div
      className={`${
        type === "Home" ? "bg-awesome-work-home" : "bg-awesome-work-service"
      } p-4 md:p-16 1xl:px-16 1xl:py-20 2xl:px-20 2xl:py-[100px]`}
    >
      <div className="layout">
        <div className="w-full h-full rounded-xl bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-4 md:p-8 1xl:p-10 2xl:p-[52px] flex flex-col gap-[52px]">
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-5 md:gap-0">
            <div className="flex flex-col gap-3">
              <h2 className="text-primary-blue text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium">
                Our <span className="text-primary-purple">Awesome</span> Works
              </h2>
              <p className="font-proxima-nova-400 text-primary-blue text-[clamp(1rem,0.926rem+0.316vw,1.25rem)]">
                Eget bibendum tortor sed magnis gravida maecenas ut. Fermentum
                elementum id hac tempor. Venenatis.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <p className="text-primary-purple font-medium text-[clamp(1rem,0.926rem+0.316vw,1.25rem)]">
                View All Works
              </p>
              <div className="p-2 rounded-full border border-primary-blue w-fit h-fit">
                <Image
                  src="/icons/right-up-abt.svg"
                  alt="pen"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className={styles.review_carousel}>
            <Carousel
              renderArrowsWhenDisabled
              partialVisible
              arrows={windowWidth >= 768}
              showDots={windowWidth <= 768}
              renderDotsOutside
              swipeable
              customDot={<CustomDot />}
              responsive={{
                tv: {
                  breakpoint: {
                    max: 3000,
                    min: 1921,
                  },
                  items: 1,
                  partialVisibilityGutter: 0,
                },
                desktop: {
                  breakpoint: {
                    max: 1920,
                    min: 1440,
                  },
                  items: 1,
                  partialVisibilityGutter: 0,
                },
                tablet: {
                  breakpoint: {
                    max: 1440,
                    min: 1080,
                  },
                  items: 1,
                  partialVisibilityGutter: 0,
                },
                mobile: {
                  breakpoint: {
                    max: 700,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 0,
                },
              }}
              className="carousel"
            >
              <WorkingCards />
              <WorkingCards />
              <WorkingCards />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

const WorkingCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full rounded-2xl max-w overflow-hidden">
      <div className="bg-[#F5F5F7] p-3 pb-4 md:p-6 1xl:p-8 2xl:p-11 flex flex-col justify-between order-2 md:order-1">
        <div>
          <div className="px-3 py-1 rounded-full bg-[#8F7DF4] w-fit mt-3">
            <p className="text-white font-normal text-[clamp(0.75rem,0.602rem+0.632vw,1.25rem)] tracking-wide">
              Healthcare
            </p>
          </div>
          <h2 className="text-primary-blue text-[clamp(1.5rem,1.204rem+1.265vw,2.5rem)] !leading-[1.2] font-medium mt-8">
            Kinetic Platform With Over <br className="hidden md:block" />
            3500+ Integrated Provider
          </h2>
          <p className="font-proxima-nova-400 text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] !font-normal md:mr-4 1xl:mr-5 !leading-[1.6] mt-8">
            Use this space to talk about your company&apos;s history,
            background, mission, or vision. Talk about your philosophy and how
            it affected your company&apos;s trajectory.
          </p>
        </div>
        <div className="gap-2 hidden md:flex">
          <div className="w-16 h-16 rounded-full hidden border border-[#7D7B7B]"></div>
          <div className="w-16 h-16 rounded-full hidden bg-primary-purple"></div>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <Image
          className="w-full h-full object-cover"
          src="/images/awesome-banner.png"
          alt="banner"
          width={2048}
          height={1536}
        />
      </div>
    </div>
  );
};
