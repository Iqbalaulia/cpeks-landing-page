"use client";
import React from "react";
import Image from "next/image";
import styles from "./carouselll.module.css";
import Carousel, { DotProps } from "react-multi-carousel";
import useWindowWidth from "@/app/hooks/useWindowWidth";

export default function OurBlog() {
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
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className="carousel-button-group hidden md:flex absolute md:top-3 lg:top-5 xl:top-6 2xl:top-7 right-44 mb-4 gap-2 justify-end 
        items-center w-full border-r pr-4"
      >
        <button
          className={`${
            currentSlide === 0
              ? "bg-transparent text-black"
              : "bg-primary-blue text-white"
          } w-12 h-12 rounded-full border border-black flex items-center justify-center`}
          onClick={() => previous()}
        >
          <Image
            src="/icons/chevron-right.svg"
            alt="left-arrow"
            width={25}
            height={25}
            className={`${currentSlide === 0 && "invert"} rotate-180`}
          />
          {/* render svg */}
        </button>
        <button
          className={`${
            currentSlide === 2
              ? "bg-transparent text-black"
              : "bg-primary-blue text-white"
          } w-12 h-12 rounded-full border border-black flex items-center justify-center`}
          onClick={() => next()}
        >
          <Image
            src="/icons/chevron-right.svg"
            alt="right-arrow"
            width={25}
            height={25}
            className={`${currentSlide === 2 && "invert"}`}
          />
        </button>
      </div>
    );
  };
  const windowWidth = useWindowWidth();
  return (
    <div className="pl-4 py-16 md:pl-16 2xl:px-20 2xl:py-[75px] text-primary-blue">
      <div className="layout">
        <div className="flex flex-col gap-[52px] relative">
          <div className="flex items-center justify-between">
            <h1 className="text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium">
              Our <span className="text-primary-purple">Blog</span>
            </h1>
            <div className="md:w-40 pr-4 md:pr-16">
              <div className="flex items-center justify-center gap-4 md:gap-5  min-w-max">
                <p className="text-primary-purple font-medium text-[clamp(1rem,0.926rem+0.316vw,1.25rem)]">
                  View All
                </p>
                <div className="p-2 rounded-full border-[0.5px] border-primary-blue w-fit h-fit">
                  <Image
                    src="/icons/right-up-abt.svg"
                    alt="pen"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.review_carousel}>
            <Carousel
              renderArrowsWhenDisabled
              partialVisible
              arrows={false}
              showDots={windowWidth <= 768}
              renderDotsOutside
              swipeable
              customButtonGroup={<ButtonGroup />}
              renderButtonGroupOutside
              customDot={<CustomDot />}
              responsive={{
                tv: {
                  breakpoint: {
                    max: 3000,
                    min: 1921,
                  },
                  items: 2,
                  partialVisibilityGutter: 0,
                },
                desktop: {
                  breakpoint: {
                    max: 1920,
                    min: 1440,
                  },
                  items: 2,
                  partialVisibilityGutter: 0,
                },
                tablet: {
                  breakpoint: {
                    max: 1440,
                    min: 1080,
                  },
                  items: 2,
                  partialVisibilityGutter: 0,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 0,
                },
              }}
              className="blog"
            >
              <BlogCards type={1} />
              <BlogCards type={2} />
              <BlogCards type={1} />
              <BlogCards type={2} />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

const BlogCards = ({ type }: { type: number }) => {
  return (
    <div className="w-full pr-2 md:pr-4">
      <Image
        src={`/images/blog-${type}.png`}
        alt="our-blog"
        width={1080}
        height={587}
        className=""
      />
      <div className="border mb-1 border-primary-purple border-t-0 rounded-b-[18px] p-[clamp(1rem,0.704rem+1.265vw,2rem)] flex flex-col gap-[clamp(0.5rem,0.352rem+0.632vw,1rem)]">
        {type === 1 ? (
          <h5 className="text-[clamp(1.125rem,0.866rem+1.107vw,2rem)] font-medium">
            What are SEO Service and what di
            <br className="hidden 2xl:block" />
            they include?
          </h5>
        ) : (
          <h5 className="text-[clamp(1.125rem,0.866rem+1.107vw,2rem)] font-medium">
            Why does your business need to conduct in deepth interviews?
          </h5>
        )}
        <p className="text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] font-proxima-nova-400">
          Praesent elementum sed orci accumsan. Semper proin neque arcu at nisl
          iaculis eleifend. Et dui aenean mi arcu aliquam.
        </p>
      </div>
    </div>
  );
};
