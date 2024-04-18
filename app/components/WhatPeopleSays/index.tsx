"use client";

import React, { useState, useEffect } from "react";
import ReviewCard from "../Cards/ReviewCard";
import Carousel, { DotProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import styles from "./carousel.module.css";

type Props = {};

const WhatPeopleSays = (props: Props) => {
  const windowWidth = useWindowWidth();

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

  const [shouldBreak, setShouldBreak] = useState(false);

  useEffect(() => {
    if (windowWidth >= 500) {
      setShouldBreak(false);
    } else {
      setShouldBreak(true);
    }
  }, [windowWidth]);

  return (
    <div className="font-kanit mt-[clamp(5rem,4.704rem+1.265vw,6rem)] pl-[clamp(1rem,-0.186rem+5.059vw,5rem)] mb-[clamp(5rem,4.111rem+3.794vw,8rem)]">
      <div className="layout">
        <div className="text-left mb-[clamp(2rem,1.407rem+2.53vw,4rem)]">
          <h1 className="text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium leading-[40px]">
            What <span className="text-primary-purple">People Say</span>
            {shouldBreak && <br />} About Us
          </h1>
        </div>
        <div className={styles.review_carousel}>
          <Carousel
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
                items: 3,
                partialVisibilityGutter: 40,
              },
              desktop: {
                breakpoint: {
                  max: 1920,
                  min: 1440,
                },
                items: 2,
                partialVisibilityGutter: 150,
              },
              tablet: {
                breakpoint: {
                  max: 1440,
                  min: 1080,
                },
                items: 2,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
          >
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSays;
