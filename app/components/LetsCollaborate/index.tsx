import React from "react";
import Image from "next/image";
import ArrowRightUp from "@/public/icons/micro-component/arrow-right-up.svg";
import Bubble from "@/public/images/lets-collaborate.png";

export default function LetsCollaborate() {
  return (
    <main className="bg-gradient-to-b from-[#D2D4FE] via-[#B8D1FF] to-[#D3DDFF] py-[clamp(5rem,4.704rem+1.265vw,6rem)] px-[clamp(1rem,-0.186rem+5.059vw,5rem)] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-6 layout relative">
        <Image
          src={Bubble}
          alt=""
          width={988}
          height={988}
          className="absolute -bottom-52 md:-bottom-72 lg:-bottom-96 -left-36 md:-left-10 min-w-[608px] min-h-[608px]"
        />
        <div className="relative z-10">
          <div className="flex flex-col text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium text-primary-blue leading-none gap-2">
            <h1>Let&apos;s</h1>
            <h1 className="text-[#7855FF]">Collaborate</h1>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-6 text-lg relative z-10 w-full lg:w-[600px] 2xl:mr-[200px]">
          <div className="flex flex-col text-[#1E1E42] w-full row-start-1 col-span-full">
            <p className="font-medium">Full Name</p>
            <input
              type="text"
              placeholder="Input your name"
              className="bg-transparent w-full py-3 border-b border-primary-blue focus:outline-none sm:text-base placeholder:text-[#62668C]"
            />
          </div>
          <div className="flex flex-col text-[#1E1E42] w-full row-start-2 col-span-full sm:col-span-5">
            <p className="font-medium">Company Name</p>
            <input
              type="text"
              placeholder="Input your company name"
              className="bg-transparent w-full py-3 border-b border-primary-blue focus:outline-none sm:text-base placeholder:text-[#62668C]"
            />
          </div>
          <div className="flex flex-col text-[#1E1E42] w-full row-start-3 sm:row-start-2 col-span-full sm:col-span-5">
            <p className="font-medium">Email</p>
            <input
              type="text"
              placeholder="Input your email"
              className="bg-transparent w-full py-3 border-b border-primary-blue focus:outline-none sm:text-base placeholder:text-[#62668C]"
            />
          </div>
          <div className="flex flex-col text-primary-blue w-full row-start-4 sm:row-start-3 col-span-full sm:col-span-5">
            <p className="font-medium">Project budget</p>
            <select
              name=""
              id=""
              className="bg-transparent w-full py-3 border-b border-primary-blue focus:outline-none sm:text-base"
              defaultValue={"default"}
            >
              <option value="default" disabled hidden>
                Select your range
              </option>
            </select>
          </div>
          <div className="flex flex-col text-primary-blue w-full row-start-5 sm:row-start-3 col-span-full sm:col-span-5">
            <p className="font-medium">How did you find us</p>
            <select
              name=""
              id="mySelect"
              className="bg-transparent w-full py-3 border-b border-primary-blue focus:outline-none sm:text-base"
              defaultValue={"default"}
            >
              <option value="default" disabled hidden>
                Google
              </option>
              <option value="a">a</option>
            </select>
          </div>
          <div className="flex flex-col text-primary-blue w-full row-start-6 sm:row-start-4 col-span-full">
            <p className="font-medium">Project Description</p>
            <input
              type="text"
              placeholder="Tell us about your project"
              className="bg-transparent w-full py-3 border-b border-primary-blue focus:outline-none sm:text-base placeholder:text-[#62668C]"
            />
          </div>
          <div className="rounded-full bg-black row-start-8 sm:row-start-6 col-span-full w-fit flex items-center gap-[10px] py-3 px-6 text-white">
            <p className="text-[clamp(1rem,0.963rem+0.158vw,1.125rem)] font font-medium">
              Send Inquiry
            </p>
            <Image src={ArrowRightUp} alt="" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </main>
  );
}
