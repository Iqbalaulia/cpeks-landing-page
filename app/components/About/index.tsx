import React from "react";
import Image from "next/image";

const cardContent = [
  {
    title: "C",
    word: "Creativity",
    description:
      "Signifies the company's dedication to Creativity, where innovative ideas come to life",
  },
  {
    title: "P",
    word: "Patience",
    description:
      "Underscores the team's meticulous approach and commitment to delivering precise and polished solutions",
  },
  {
    title: "E",
    word: "Expertise",
    description:
      "Team adeptly navigates web development's dynamic landscape with deep expertise and a sharp eye on emerging trends.",
  },
  {
    title: "K",
    word: "Knowledge",
    description:
      "Stands for Knowledge, emphasizing the continuous pursuit of Expertise to stay at the forefront of the industry.",
  },
  {
    title: "S",
    word: "Success",
    description:
      "Embodies the company's relentless pursuit of Success, both for its clients and as a testament to its own achievements.",
  },
];

export default function About() {
  return (
    <div className="relative about-section overflow-hidden text-[#1E1E42]">
      <div className="relative layout">
        <Image
          alt="About us"
          className="w-[800px] xl:w-[1000px] md:block hidden absolute left-2 md:left-28 mt-44 md:mt-6 z-0"
          src="/images/about-bubble.png"
          width={2096}
          height={2096}
          quality={100}
        />
        <Image
          alt="About us"
          className="w-full block md:hidden absolute mt-64 z-0"
          src="/images/about-bubble-mobile.png"
          width={750}
          height={1090}
          quality={100}
        />
        <div className="section-circle w-96 h-96 absolute blur-[90px] bottom-0 left-0 -translate-x-1/3 translate-y-1/3"></div>
        <div className="px-[clamp(1rem,-0.186rem+5.059vw,5rem)] pt-[clamp(5rem,4.629rem+1.581vw,6.25rem)] pb-[clamp(-4.375rem,-7.024rem+11.304vw,4.563rem)]">
          <div className="flex flex-col lg:flex-row relative z-10 justify-between gap-6">
            <div className="flex flex-col gap-[clamp(1.5rem,0.981rem+2.213vw,3.25rem)]">
              <div className="flex items-center gap-1 md:gap-3 min-w-max">
                <h2 className="text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium">
                  About
                </h2>
                <Image
                  alt="CPEKS logo"
                  className="w-[clamp(7.241rem,4.737rem+10.684vw,15.688rem)] ml-2 pt-[2px] 1xl:pt-2"
                  src="/images/cpeks-logo.png"
                  width={502}
                  height={104}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-medium text-[clamp(0.875rem,0.764rem+0.474vw,1.25rem)]">
                  FOUNDER OF CPEKS
                </p>
                <div className="flex -space-x-5">
                  <Image
                    alt="Founder"
                    className="rounded-full w-[clamp(3.25rem,2.287rem+4.111vw,6.5rem)]"
                    src="/images/founder-1.png"
                    width={104}
                    height={104}
                  />
                  <Image
                    alt="Founder"
                    className="rounded-full w-[clamp(3.25rem,2.287rem+4.111vw,6.5rem)]"
                    src="/images/founder-2.png"
                    width={104}
                    height={104}
                  />
                  <Image
                    alt="Founder"
                    className="rounded-full w-[clamp(3.25rem,2.287rem+4.111vw,6.5rem)]"
                    src="/images/founder-3.png"
                    width={104}
                    height={104}
                  />
                </div>
              </div>
            </div>
            <div className="w-fit max-w-[886px] lg:pl-8 1xl:pl-8">
              <p className="font-proxima-nova-400 text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] leading-[1.2] 1xl:leading-normal 2xl:leading-relaxed">
                Introducing CPEKS, a premier web design and development company
                with an exceptional team boasting over 18 years of collective
                Expertise in the digital realm. Founded on the principles of
                Creativity, Patience, Expertise, Knowledge, and Success, CPEKS
                brings a unique blend of skills and values to the forefront of
                the industry.
              </p>
              <br />
              <p className="font-proxima-nova-400 text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] hidden lg:block leading-[1.2]  1xl:leading-normal 2xl:leading-relaxed">
                Led by a seasoned team, CPEKS is more than just a service
                provider; it&apos;s a commitment to excellence in every aspect
                of web development. The &quot;C&quot; signifies the
                company&apos;s dedication to Creativity, where innovative ideas
                come to life. Patience, represented by the letter &quot;P,&quot;
                underscores the team&apos;s meticulous approach and commitment
                to delivering precise and polished solutions....
              </p>
              <br className="hidden md:block" />
              <div className="flex items-center gap-1 -translate-y-3">
                <p className="text-[#7855FF] font-semibold text-[clamp(1rem,0.926rem+0.316vw,1.25rem)]">
                  Read More
                </p>
                <Image
                  className="pt-1"
                  alt="Read more"
                  src="/icons/arrow-right-up.svg"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0 relative z-10 flex flex-col items-start md:items-center">
            <h1 className="text-white text-[clamp(4.5rem,3.055rem+6.166vw,9.375rem)] font-medium leading-none inline relative z-[9] translate-y-1/4 md:-translate-x-[55%]">
              We Are
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 relative z-20">
              {cardContent.map((content) => (
                <div
                  key={content.title}
                  className="about-card p-[clamp(1rem,0.852rem+0.632vw,1.5rem)] max-h-fit flex flex-col"
                >
                  <h2 className="text-[#1E1E42] font-semibold text-[clamp(2.75rem,2.454rem+1.265vw,3.75rem)] leading-[clamp(3.25rem,2.879rem+1.581vw,4.5rem)]">
                    {content.title}
                  </h2>
                  <hr className="border border-slate-300 my-4" />
                  <div className="flex flex-col gap-4">
                    <p className="font-semibold text-[#7855FF] text-[clamp(1.25rem,1.176rem+0.316vw,1.5rem)]">
                      {content.word}
                    </p>
                    <p className="font-proxima-nova-400 text-[clamp(0.875rem,0.801rem+0.316vw,1.125rem)] leading-normal flex-grow">
                      {content.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <h1 className="text-white text-[clamp(5rem,3.703rem+5.534vw,9.375rem)] font-medium leading-none inline relative z-10 md:z-[11] md:-translate-y-[30%] -translate-y-[350%] md:translate-x-[53%] translate-x-[50%]">
              CPEKS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
