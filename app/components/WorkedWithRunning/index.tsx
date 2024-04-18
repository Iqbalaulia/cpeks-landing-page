import React, { ReactNode } from "react";
import Image from "next/image";
import tamaraIcon from "public/icons/tamara240.png";
import Marquee from "react-fast-marquee";

type Props = {};

const WorkedWithRunning = (props: Props) => {
  return (
    <div className="relative">
      <Marquee autoFill>
        <div className="grid grid-cols-1 border-r-2 border-r-primary-blue border-opacity-20">
          <div className="h-[clamp(5rem,2.628rem+10.119vw,13rem)] flex items-center px-[clamp(1rem,0.555rem+1.897vw,2.5rem)] border-b-2 border-b-primary-blue border-opacity-20 scale-75 lg:scale-100">
            <Image src={tamaraIcon} alt="tamara icon" />
          </div>
          <div className="h-[clamp(5rem,2.628rem+10.119vw,13rem)] flex items-center px-[clamp(1rem,0.555rem+1.897vw,2.5rem)] scale-75 lg:scale-100">
            <Image src={tamaraIcon} alt="tamara icon" />
          </div>
        </div>
      </Marquee>
      <div className="hidden lg:block absolute top-0 h-full w-40 bg-gradient-to-r from-white to-transparent via-white z-10" />
      <div className="hidden lg:block absolute top-0 h-full w-40 right-0 bg-gradient-to-l from-white to-transparent via-white z-10" />
    </div>
  );
};

export default WorkedWithRunning;
