"use client";

import Image from "next/image";
import React from "react";
import innovationIcon from "public/icons/innovation.svg";
import collaborationIcon from "public/icons/collaboration.svg";
import empathyIcon from "public/icons/empathy.svg";
import arrowRightUp from "public/icons/right-up-wht.svg";
import Link from "next/link";

type Props = {};
type CoreValueType = {
  key: string;
  label: string;
  description: string;
  icons: string;
};

const CommitedStaying = (props: Props) => {
  const coreValueItems: CoreValueType[] = [
    {
      key: "client-centric",
      label: "Client-Centric Approach",
      description: `Diam in enim fermentum vitae arcu faucibus neque euismod.
       Interdum pharetra mattis leo duis vivamus nam non.`,
      icons: innovationIcon,
    },
    {
      key: "empathetic-understanding",
      label: "Empathtetic Understanding",
      description: `Proin nisi tellus est pellentesque non dis.
       Volutpat purus sit tellus egestas.
       Orci ut nisi libero sit amet maecenas nisl nisi et.`,
      icons: collaborationIcon,
    },
    {
      key: "transparent-communication",
      label: "Transparent Communication",
      description: `Feugiat integer lobortis sit magna mi commodo viverra quis.
       Leo nisi eget non purus neque elementum vulputate amet.`,
      icons: empathyIcon,
    },
    {
      key: "ongoing-support-optimization",
      label: "Ongoing Support and Optimization",
      description: `Convallis at lectus nibh arcu nibh vel mauris viverra.
       Diam id elit massa viverra faucibus lacus tempor faucibus ornare.`,
      icons: innovationIcon,
    },
  ];

  return (
    <div className="font-kanit py-[clamp(5rem,4.629rem+1.581vw,6.25rem)] px-[clamp(1rem,-0.186rem+5.059vw,5rem)] bg-white">
      <div className="layout grid grid-cols-12 md:gap-y-12">
        <div className="text-center md:text-left col-span-12 lg:col-span-5">
          <div className="mb-8 md:mb-[52px]">
            <h3 className="inline text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium !leading-none text-primary-blue ">
              Commited To <br />
              <span className="inline leading-relaxed text-primary-purple">
                Staying Ahead
              </span>
              <br />
              Of Industry
            </h3>
          </div>
          <Link
            href="/service"
            className="hidden md:flex py-3 px-6 bg-primary-purple rounded-full w-fit h-fit font-medium text-[clamp(0.875rem,0.801rem+0.316vw,1.125rem)] text-white items-center gap-2 cursor-pointer"
          >
            Our Service
            <Image src={arrowRightUp} alt="" width={24} height={24} />
          </Link>
        </div>
        <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-14">
          {coreValueItems.map((item) => (
            <CoreItem key={item.key} data={item} />
          ))}
        </div>
        <div className="md:hidden col-span-12 flex justify-center mt-[52px]">
          <Link
            href="/service"
            className="py-3 px-6 bg-primary-purple rounded-full w-fit h-fit font-medium text-[clamp(0.875rem,0.801rem+0.316vw,1.125rem)] text-white flex items-center gap-2 cursor-pointer"
          >
            Our Service
            <Image src={arrowRightUp} alt="" width={24} height={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const CoreItem = ({ data }: { data: CoreValueType }) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left text-primary-blue">
      <div className="bg-primary-purple flex justify-center items-center rounded-full mb-[clamp(1.5rem,1.352rem+0.632vw,2rem)] w-[clamp(5rem,4.629rem+1.581vw,6.25rem)] h-[clamp(5rem,4.629rem+1.581vw,6.25rem)]">
        <Image
          src={data.icons}
          alt="innovation"
          width={56}
          height={56}
          className="w-[clamp(3rem,2.852rem+0.632vw,3.5rem)]"
        />
      </div>
      <div className="font-normal md:max-w-[252px] text-[clamp(1.5rem,1.352rem+0.632vw,2rem)] mb-4">
        {data.label}
      </div>
      <p className="font-proxima-nova-400 opacity-80 text-[clamp(1rem,0.926rem+0.316vw,1.25rem)]">
        {data.description}
      </p>
    </div>
  );
};

export default CommitedStaying;
