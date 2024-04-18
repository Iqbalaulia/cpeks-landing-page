import Image from "next/image";
import React from "react";
import innovationIcon from "public/icons/innovation.svg";
import collaborationIcon from "public/icons/collaboration.svg";
import empathyIcon from "public/icons/empathy.svg";

type Props = {};
type CoreValueType = {
  key: string;
  label: string;
  description: string;
  icons: string;
};

const CoreValues = (props: Props) => {
  const coreValueItems: CoreValueType[] = [
    {
      key: "innovation",
      label: "Innovation",
      description: `Amet id urna lacus praesent. Consequat senectus blandit at
            scelerisque enim lacus et eget id. Duis tempus id sed ut in.
            Tristique faucibus consectetur.`,
      icons: innovationIcon,
    },
    {
      key: "collaboration",
      label: "Collaboration",
      description: `Mi eu risus adipiscing adipiscing varius vivamus neque. 
      Auctor pellentesque fermentum quis pulvinar turpis proin et augue in. 
      Vulputate.`,
      icons: collaborationIcon,
    },
    {
      key: "empathy",
      label: "Empathy",
      description: `Fringilla faucibus fringilla porttitor et ac in. 
      Cursus at faucibus feugiat eget eget eget netus consectetur. 
      Vulputate ut tempor pellentesque leo.`,
      icons: empathyIcon,
    },
    {
      key: "excellence",
      label: "Excellence",
      description: `Cursus tristique faucibus et velit.
       Natoque tortor odio morbi pulvinar interdum curabitur.
       Nulla sed amet tincidunt pellentesque tristique aliquet lacus.`,
      icons: innovationIcon,
    },
    {
      key: "adaptability",
      label: "Adaptability",
      description: `At blandit leo purus mollis tortor pharetra mollis etiam.
       Tempus sagittis magnis nulla nam bibendum vitae sed diam.
       Gravida auctor neque id eu purus.`,
      icons: collaborationIcon,
    },
    {
      key: "accountability",
      label: "Accountability",
      description: `Massa tortor ac erat eu eu.
       Pretium purus imperdiet mauris imperdiet scelerisque aliquet ornare.
       Et et eget quam sed. Sit pellentesque cursus.`,
      icons: empathyIcon,
    },
  ];

  return (
    <div className="font-kanit pt-[clamp(5rem,4.629rem+1.581vw,6.25rem)] px-[clamp(1rem,-0.186rem+5.059vw,5rem)] pb-[clamp(5rem,4.074rem+3.953vw,8.125rem)] bg-primary-blue">
      <div className="layout">
        <div className="text-center">
          <div className="mx-4 lg:mx-auto">
            <h3 className="text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium text-white mb-4">
              Our Core <span className=" text-primary-purple">Values</span>
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-[clamp(2rem,1.111rem+3.794vw,5rem)]">
          {coreValueItems.map((item) => (
            <CoreItem key={item.key} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CoreItem = ({ data }: { data: CoreValueType }) => {
  return (
    <div className="flex flex-col items-center text-center text-white">
      <div className="bg-primary-purple w-[clamp(5rem,4.629rem+1.581vw,6.25rem)] h-[clamp(5rem,4.629rem+1.581vw,6.25rem)] rounded-full mb-8 flex justify-center items-center">
        <Image
          src={data.icons}
          alt="innovation"
          width={56}
          height={56}
          className="w-[clamp(3rem,2.852rem+0.632vw,3.5rem)]"
        />
      </div>
      <div className="mb-2 md:mb-4 text-[clamp(1.5rem,1.352rem+0.632vw,2rem)]">
        {data.label}
      </div>
      <p className="opacity-80 text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] font-proxima-nova-400">
        {data.description}
      </p>
    </div>
  );
};

export default CoreValues;
