import React from "react";
import Image from "next/image";

export default function TechStack() {
  return (
    <div className="h-fit bg-primary-blue px-[clamp(1rem,-0.186rem+5.059vw,5rem)] py-[clamp(5rem,4.629rem+1.581vw,6.25rem)]">
      <div className="layout">
        <div className="flex h-full flex-col gap-10 md:gap-20">
          <h2 className="font-medium text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] text-center text-white">
            Technology <span className="text-primary-purple">Stack</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col border-b md:border-b-0 border-r border-[#ffffff30] p-4 md:p-4 md:py-16 items-center justify-center gap-4">
              <Image
                src="/images/figma.png"
                alt="figma logo"
                width={160}
                height={160}
                className="w-[clamp(2.75rem,2.083rem+2.846vw,5rem)]"
              />
              <p className="text-white">Figma</p>
            </div>

            <div className="flex flex-col border-b md:border-b-0 md:border-r border-[#ffffff30] p-4 md:p-4 md:py-16 items-center justify-center gap-4">
              <Image
                src="/images/figma.png"
                alt="figma logo"
                width={160}
                height={160}
                className="w-[clamp(2.75rem,2.083rem+2.846vw,5rem)]"
              />
              <p className="text-white">Figma</p>
            </div>

            <div className="flex flex-col border-r border-[#ffffff30] p-4 md:p-4 md:py-16 items-center justify-center gap-4">
              <Image
                src="/images/figma.png"
                alt="figma logo"
                width={160}
                height={160}
                className="w-[clamp(2.75rem,2.083rem+2.846vw,5rem)]"
              />
              <p className="text-white">Figma</p>
            </div>

            <div className="flex flex-col p-4 md:p-4 md:py-16 items-center justify-center gap-4">
              <Image
                src="/images/figma.png"
                alt="figma logo"
                width={160}
                height={160}
                className="w-[clamp(2.75rem,2.083rem+2.846vw,5rem)]"
              />
              <p className="text-white">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
