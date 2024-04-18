import React from "react";
import Image from "next/image";
import ArrowRightUp from "@/public/icons/micro-component/arrow-right-up.svg";

const jobs = [
  {
    title: "UI/UX Designer",
    descriptions: ["Full Time", "Remote Friendly", "February 4, 2023"],
  },
  {
    title: "Product Designer",
    descriptions: ["Full Time", "Remote Friendly", "February 4, 2023"],
  },
  {
    title: "Project Manager",
    descriptions: ["Full Time", "Remote Friendly", "February 4, 2023"],
  },
  {
    title: "Graphic Designer",
    descriptions: ["Full Time", "Remote Friendly", "February 4, 2023"],
  },
  {
    title: "Product Designer",
    descriptions: ["Full Time", "Remote Friendly", "February 4, 2023"],
  },
  {
    title: "Project Manager",
    descriptions: ["Full Time", "Remote Friendly", "February 4, 2023"],
  },
  {
    title: "Graphic Designer",
    descriptions: ["Full Time", "Remote Friendly", "February 4, 2023"],
  },
];

export default function CurrentOpening() {
  return (
    <main className="bg-white flex items-center justify-center py-[clamp(5rem,4.629rem+1.581vw,6.25rem)] px-[clamp(1rem,-0.186rem+5.059vw,5rem)]">
      <div className="lg:w-[980px] w-full flex flex-col items-center justify-center gap-[clamp(2rem,1.111rem+3.794vw,5rem)]">
        <h1 className="text-primary-blue text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium text-center">
          Current <span className="text-primary-purple">Opening</span> Jobs
        </h1>
        <div className="flex flex-col w-full max-w-[980px]">
          {jobs.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start md:items-center justify-between py-[clamp(1.5rem,1.129rem+1.581vw,2.75rem)] ${
                jobs.length - 1 !== idx && "border-b"
              } border-primary-blue/20 group`}
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-primary-blue font-medium text-[clamp(1.5rem,1.352rem+0.632vw,2rem)]">
                  {item.title}
                </h1>
                <div className="flex max-md:flex-col md:items-center gap-2 md:gap-4 text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] text-primary-blue/70">
                  {item.descriptions?.map((desc, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <p>{desc}</p>
                      {item.descriptions.length - 1 !== index && (
                        <div className="max-md:hidden w-2 h-2 rounded-full bg-primary-blue/70"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-primary-blue group-hover:bg-primary-blue rounded-full w-[clamp(2.5rem,2.129rem+1.581vw,3.75rem)] h-[clamp(2.5rem,2.129rem+1.581vw,3.75rem)] flex items-center justify-center">
                <Image
                  src={ArrowRightUp}
                  alt=""
                  width={24}
                  height={24}
                  className="group-hover:invert-0 invert"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
