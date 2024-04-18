import React, { ReactNode } from "react";
import Image from "next/image";
import cpeks24Icon from "public/icons/cpeks24.svg";
import Marquee from "react-fast-marquee";

type Props = {};

const RunningText = (props: Props) => {
  return (
    <div className="w-full h-[58px] bg-primary-blue text-white text-[28px] flex uppercase font-kanit relative z-30">
      <Marquee autoFill>
        <div className="px-8">
          <span className="text-primary-cyan">P</span>atience
        </div>
        <div className="scale-90 lg:scale-100">
          <Image alt="cpeks icon" src={cpeks24Icon} />
        </div>
        <div className="px-8">
          <span className="text-primary-cyan">E</span>xpertise
        </div>
        <div className="scale-90 lg:scale-100">
          <Image alt="cpeks icon" src={cpeks24Icon} />
        </div>
        <div className="px-8">
          <span className="text-primary-cyan">K</span>nowledge
        </div>
        <div className="scale-90 lg:scale-100">
          <Image alt="cpeks icon" src={cpeks24Icon} />
        </div>
        <div className="px-8">
          That make us <span className="text-primary-cyan">CPEKS</span>
        </div>
        <div className="scale-90 lg:scale-100">
          <Image alt="cpeks icon" src={cpeks24Icon} />
        </div>
        <div className="px-8">
          <span className="text-primary-cyan">S</span>uccess
        </div>
        <div className="scale-90 lg:scale-100">
          <Image alt="cpeks icon" src={cpeks24Icon} />
        </div>
        <div className="px-8">
          <span className="text-primary-cyan">C</span>reativity
        </div>
        <div className="scale-90 lg:scale-100">
          <Image alt="cpeks icon" src={cpeks24Icon} />
        </div>
      </Marquee>
    </div>
  );
};

export default RunningText;
