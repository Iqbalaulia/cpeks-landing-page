import React from "react";
import Image from "next/image";

export default function RelatedService() {
  return (
    <div className="bg-primary-blue py-[clamp(5rem,4.629rem+1.581vw,6.25rem)] px-[clamp(1rem,-0.186rem+5.059vw,5rem)] text-white">
      <div className="layout">
        <div className="flex flex-col gap-8 md:gap-16">
          <h2 className="text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium text-center md:text-left">
            Related <span className="text-primary-purple">Service</span>
          </h2>
          <div className="max-md:flex max-md:justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
            {RelatedServiceData.map((item, index) => (
              <div
                key={index}
                className="relative h-[clamp(15.875rem,13.114rem+11.779vw,25.188rem)] w-[clamp(10.313rem,6.903rem+14.545vw,21.813rem)]"
              >
                <Image
                  src="/images/trapesium.png"
                  alt="team collaborate"
                  width={698}
                  height={806}
                  className="w-full h-full"
                />
                <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-between py-[clamp(1rem,0.629rem+1.581vw,2.25rem)] px-[clamp(1rem,0.704rem+1.265vw,2rem)]">
                  <h5 className="text-[clamp(1.5rem,1.129rem+1.581vw,2.75rem)] font-medium !leading-[1.2]">
                    {/* if title have 2 word, make 2 line */}
                    {item.title.split(" ").length > 1 ? (
                      <span>
                        {item.title.split(" ")[0]} <br />{" "}
                        {item.title.split(" ")[1]}
                      </span>
                    ) : (
                      item.title
                    )}
                  </h5>
                  <div className="">
                    <p className="opacity-80 !font-normal text-[clamp(0.875rem,0.764rem+0.474vw,1.25rem)] font-public-sans !leading-relaxed md:max-xl:line-clamp-2">
                      {/* check html syntax */}
                      {item.description}{" "}
                      {index === 0 && (
                        <span className="hidden md:inline-block">
                          {" "}
                          Convallis.
                        </span>
                      )}
                      {index === 1 && (
                        <span className="hidden md:inline-block">
                          {" "}
                          Facilisis.
                        </span>
                      )}
                      {index === 3 && (
                        <span className="hidden md:inline-block">
                          {" "}
                          fringilla.
                        </span>
                      )}
                    </p>
                    <hr className="my-[clamp(1.5rem,1.204rem+1.265vw,2.5rem)]" />
                    <button className="bg-primary-purple flex items-center w-full text-sm justify-center px-4 py-[clamp(0.5rem,0.426rem+0.316vw,0.75rem)] rounded-full gap-2 !text-white">
                      <span className="text-[clamp(0.875rem,0.801rem+0.316vw,1.125rem)]">
                        Learn More
                      </span>
                      <Image
                        src="/icons/right-up-wht.svg"
                        alt="arrow up right"
                        width={24}
                        height={24}
                        className="w-4 md:w-6"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const RelatedServiceData = [
  {
    title: "UI/UX Designer",
    description: "Integer sem ac elementum pellentesque felis.",
  },
  {
    title: "Web Design",
    description: "Scelerisque faucibus sed pretium non nec.",
  },
  {
    title: "Branding",
    description: "Ultricies duis quis mattis habitant est diam dolor.",
  },
  {
    title: "Landing Page",
    description: "Iaculis ultrices quis sit in. Eu sem condimentum",
  },
];
