import React from "react";
import Image from "next/image";

const teammates = [
  {
    icon: "/icons/innovation.svg",
    alt: "innovation",
    title: "Accelerate Growth",
    description:
      "Diam in enim fermentum vitae arcu faucibus neque euismod. Interdum pharetra mattis leo duis vivamus nam non.",
  },
  {
    icon: "/icons/collaboration.svg",
    alt: "collaboration",
    title: "Versatile Experience",
    description:
      "Proin nisi tellus est pellentesque non dis. Volutpat purus sit tellus egestas. Orci ut nisi libero sit amet maecenas nisl nisi et.",
  },
  {
    icon: "/icons/empathy.svg",
    alt: "supportive community",
    title: "Supportive Community",
    description:
      "Feugiat integer lobortis sit magna mi commodo viverra quis. Leo nisi eget non purus neque elementum vulputate amet.",
  },
  {
    icon: "/icons/gear.svg",
    alt: "Future-Focused",
    title: "Recognition",
    description:
      "Convallis at lectus nibh arcu nibh vel mauris viverra. Diam id elit massa viverra faucibus lacus tempor faucibus ornare.",
  },
  {
    icon: "/icons/empathy.svg",
    alt: "supportive community",
    title: "Shared Success",
    description:
      "Feugiat integer lobortis sit magna mi commodo viverra quis. Leo nisi eget non purus neque elementum vulputate amet.",
  },
  {
    icon: "/icons/gear.svg",
    alt: "Future-Focused",
    title: "Future-Focused",
    description:
      "Convallis at lectus nibh arcu nibh vel mauris viverra. Diam id elit massa viverra faucibus lacus tempor faucibus ornare.",
  },
];

export default function OurTeammate() {
  return (
    <div className="bg-white py-[clamp(5rem,4.629rem+1.581vw,6.25rem)] px-[clamp(1rem,-0.186rem+5.059vw,5rem)] text-primary-blue">
      <div className="layout">
        <div className="flex flex-col gap-[clamp(5rem,4.629rem+1.581vw,6.25rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-0">
            <div className="lg:col-span-7">
              <h2 className="text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium text-center md:text-left">
                Being Our <span className="text-primary-purple">Teammate</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex justify-center items-center">
              <p className="w-full text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] text-center md:text-left 1xl:pl-8 1xl:mr-8">
                Eget bibendum tortor sed magnis gravida maecenas ut. Fermentum
                elementum id hac tempor. Venenatis.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teammates.map((teammate, index) => (
              <div
                className="flex flex-col gap-1 items-center justify-center md:items-start"
                key={index}
              >
                <div className="w-[clamp(5rem,4.629rem+1.581vw,6.25rem)] h-[clamp(5rem,4.629rem+1.581vw,6.25rem)] flex items-center justify-center bg-primary-purple rounded-full">
                  <Image
                    src={teammate.icon}
                    alt={teammate.alt}
                    width={56}
                    height={56}
                    className="w-[clamp(3rem,2.852rem+0.632vw,3.5rem)]"
                  />
                </div>
                <h5 className="text-[clamp(1.5rem,1.352rem+0.632vw,2rem)] mt-7">
                  {teammate.title}
                </h5>
                <p className="font-proxima-nova-400 text-center md:text-left opacity-80 leading-normal mt-2 md:leading-[1.6] text-[clamp(1rem,0.926rem+0.316vw,1.25rem)]">
                  {teammate.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
