"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import useWindowWidth from "@/app/hooks/useWindowWidth";

export default function BestExperience() {
  const windowWidth = useWindowWidth();
  const [shouldBreak, setShouldBreak] = useState(false);

  useEffect(() => {
    if (windowWidth >= 768) {
      setShouldBreak(true);
    } else {
      setShouldBreak(false);
    }
  }, [windowWidth]);
  return (
    <div className="px-[clamp(1rem,-0.186rem+5.059vw,5rem)] py-[clamp(5rem,4.629rem+1.581vw,6.25rem)] text-primary-blue">
      <div className="layout">
        <div className="flex flex-col md:flex-row gap-[clamp(1rem,0.111rem+3.794vw,4rem)] items-center">
          <div className="w-[clamp(21.438rem,14.712rem+28.696vw,44.125rem)]">
            <Image
              src="/images/collaborate.png"
              alt="team collaborate"
              width={1436}
              height={1292}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full max-w-[578px] flex flex-col items-center md:items-start justify-center gap-[52px]">
            <div className="flex flex-col gap-6">
              <div className="text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium !leading-[1.2] text-center md:text-left">
                Build A{" "}
                <span className="text-primary-purple">Best Experience</span>,
                Not
                {shouldBreak && <br />} Just A Product!
              </div>
              <p className="font-proxima-nova-400 text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] text-justify md:text-left font-public-sans leading-normal md:leading-[1.6]">
                Ultrices metus tempus elit nisl. Sit fames sed accumsan urna et
                diam sagittis eros. Auctor consequat amet hendrerit pellentesque
                duis. Dignissim ornare eleifend auctor faucibus. Eu volutpat
                erat magna accumsan. Diam libero sit
              </p>
            </div>
            <button className="bg-primary-purple flex items-center text-[clamp(0.875rem,0.801rem+0.316vw,1.125rem)] justify-center px-5 py-3 w-fit rounded-full gap-2 !text-white">
              <span>Start Now</span>
              <Image
                src="/icons/right-up-wht.svg"
                alt="arrow up right"
                width={24}
                height={24}
              />
            </button>
            {/* <div className="w-32 h-0 md:h-12 bg-transparent"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
