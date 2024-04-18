import React from "react";
import Image from "next/image";
import {
  Download,
  Facebook,
  Instagram,
  Plus,
  Send,
  Twitter,
} from "@/public/icons/footer";

export const Footer = () => {
  return (
    <main className="w-full bg-[#1E1E42] text-white pt-[52px] pb-8 lg:py-[52px] px-4 lg:px-20">
      <div className="layout">
        <div className="grid grid-cols-12 pb-[52px] lg:pb-24 gap-y-[52px]">
          <div className="row-start-1 xl:col-start-1 xl:col-end-7 col-span-full">
            <div className="xl:max-w-[464px] flex flex-col gap-6">
              <p className="text-[clamp(1.5rem,1.352rem+0.632vw,2rem)] font-medium">
                Subscribe to our newsletter to stay in touch with the latest
              </p>
              <div className="flex justify-between items-center gap-3">
                <input
                  type="text"
                  className="bg-transparent border border-white/20 py-3 px-6 rounded-full w-[80%] sm:w-[90%] placeholder:text-lg placeholder:text-white"
                  placeholder="Your email address"
                />
                <div className="bg-gradient-to-r from-[#8F7DF4] to-[#8454FF] rounded-full w-12 h-12 xl:w-[52px] xl:h-[52px] flex justify-center items-center">
                  <Image src={Send} alt="" width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="row-start-2 col-span-full xl:row-start-1 xl:col-start-7 xl:col-end-13 grid grid-cols-4 xl:grid-cols-5 text-[clamp(1rem,0.852rem+0.632vw,1.5rem)]">
            <div className="col-span-2">
              <ul className="font-medium space-y-5">
                <li>Our services</li>
                <li>Our work</li>
                <li>Career</li>
                <li>About us</li>
              </ul>
            </div>
            <div className="col-span-2 xl:col-span-3">
              <ul className="font-medium space-y-5">
                <li className="font-normal">Email</li>
                <li>hello@cpeks.com</li>
                <li className="font-normal">Contact</li>
                <li>+1&#40;213&#41; 555 - 5555</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-8 border-y border-white/20">
          <p className="font-medium text-[clamp(1rem,0.852rem+0.632vw,1.5rem)]">Show all services</p>
          <div className="w-[44px] h-[44px] border border-white rounded-full flex justify-center items-center">
            <Image src={Plus} alt="" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-8 justify-between items-center pt-8">
          <div className="flex gap-3">
            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
              <Image src={Download} alt="" width={20} height={20} />
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-[clamp(1rem,0.963rem+0.158vw,1.125rem)]">Brand Guidelines</p>
              <p className="text-white/60 text-[clamp(0.875rem,0.838rem+0.158vw,1rem)]">PDF, 2.2 MB</p>
            </div>
          </div>
          <p className="text-[clamp(0.875rem,0.764rem+0.474vw,1.25rem)]">
            &#169; 2023 CPEKS, All Right Reserved
          </p>
          <div className="flex gap-4">
            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
              <Image src={Facebook} alt="" width={20} height={20} />
            </div>
            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
              <Image src={Twitter} alt="" width={20} height={20} />
            </div>
            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
              <Image src={Instagram} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
