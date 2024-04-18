import React from "react";
import Image from "next/image";

export default function StandAware() {
  return (
    <div className="relative pt-[clamp(5rem,4.629rem+1.581vw,6.25rem)] pb-[clamp(5rem,4.259rem+3.162vw,7.5rem)] px-[clamp(1rem,-0.927rem+8.221vw,7.5rem)] overflow-hidden">
      <Image
        src="/images/logo-trans-mobile.png"
        alt="logo transparent"
        width={750}
        height={1416}
        className="absolute top-0 right-0 h-fit w-full block lg:hidden"
      />
      <Image
        src="/images/logo-trans.png"
        alt="logo transparent"
        width={1532}
        height={1514}
        className="absolute top-0 right-0 h-full w-fit hidden lg:block"
      />
      <div className="layout">
        <div className="flex flex-col gap-[52px] text-primary-blue">
          <div className="">
            <h2 className="font-medium text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] leading-[1.3]">
              Stand Aware Of{" "}
              <span className="text-primary-purple">Accomplishments</span>,{" "}
              {` `}
              <br className="hidden md:block" />
              Stay Awake To Achieve More
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[52px]">
            {standAware.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 md:gap-6">
                <h3 className="text-[clamp(3.25rem,2.361rem+3.794vw,6.25rem)] leading-none font-medium">
                  {item.number}
                </h3>
                <div className="flex items-center gap-2">
                  <Image
                    src={item.icon}
                    alt="clients"
                    width={40}
                    height={40}
                    className="w-[clamp(1.75rem,1.528rem+0.949vw,2.5rem)]"
                  />
                  <p className="text-[clamp(1.25rem,1.028rem+0.949vw,2rem)] 1xl:text-3xl">
                    {item.title}
                  </p>
                </div>
                <p className="font-proxima-nova-400 opacity-80 font-public-sans text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] leading-normal xl:leading-[1.6] mr-4 1xl:mr-8 ">
                  Ornare et velit libero sed tristique sit ullamcorper.
                  Suspendisse ac cras neque aenean. Egestas gravida nunc nibh
                  auctor
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const standAware = [
  {
    number: "135+",
    title: "Worldwide Happy Clients",
    icon: "/icons/clients.svg",
  },
  {
    number: "185+",
    title: "Completed Projects",
    icon: "/icons/completed.svg",
  },
  {
    number: "100%",
    title: "Client Satisfaction",
    icon: "/icons/thumb-up.svg",
  },
];
