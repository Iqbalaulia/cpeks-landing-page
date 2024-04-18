import Image from "next/image";
import React from "react";
import { First, Second, Third, Fourth, Fifth, Sixth } from "@/public/images";

type Props = {};

const JoinOurTeam = (props: Props) => {
  return (
    <div className="font-kanit pt-[clamp(5rem,4.629rem+1.581vw,6.25rem)] px-[clamp(1rem,-0.186rem+5.059vw,5rem)] pb-[clamp(5rem,4.074rem+3.953vw,8.125rem)] bg-white">
      <div className="layout grid grid-cols-1 md:gap-12">
        <div className="text-left">
          <div className="mb-8 md:mb-4 max-w-5xl">
            <h3 className="inline capitalize text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium text-primary-blue !leading-[1.2]">
              Join our team of experts to craft{" "}
              <div className="inline text-primary-purple !leading-[1.2]">
                streamlined, effective, and scalable
              </div>{" "}
              digital solutions.
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 md:grid-flow-col gap-6">
          <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-2">
            <Image
              className="h-full w-full object-fill"
              alt="first image"
              src={First}
              width={475}
              height={408}
            />
          </div>
          <div className="md:row-span-1">
            <Image
              className="h-full w-full object-fill"
              alt="second image"
              src={Second}
              width={475}
              height={224}
            />
          </div>
          <div className="md:row-span-1">
            <Image
              className="h-full w-full object-fill"
              alt="third image"
              src={Third}
              width={476}
              height={224}
            />
          </div>
          <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-2">
            <Image
              className="h-full w-full object-fill"
              alt="fourth image"
              src={Fourth}
              width={476}
              height={408}
            />
          </div>
          <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-2">
            <Image
              className="h-full w-full object-fill"
              alt="fifth image"
              src={Fifth}
              width={475}
              height={408}
            />
          </div>
          <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-1">
            <Image
              className="h-full w-full object-fill"
              alt="sixth image"
              src={Sixth}
              width={475}
              height={224}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
