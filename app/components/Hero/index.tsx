"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRightUp,
  Community,
  FadeBackground,
  Globe,
  Project,
  Stamp,
  Star,
  ThumbsUp,
  StampArrow,
} from "@/public/icons/hero";
import { CubeOne, CubeTwo, CubeThree, VioletBall, Earth } from "@/public/images";
import useWindowHeight from "@/app/hooks/useWindowHeight";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import Loading from "../Loading";

type Props = {
  type: "Home" | "Service" | "Portofolio" | "Career";
};

const StarRating = ({ count }: { count: number }) => {
  const stars = Array.from({ length: count }, (_, index) => (
    <Image key={index} src={Star} alt="" width={18} height={18} />
  ));

  return <div className="flex justify-between">{stars}</div>;
};

const imageUrls = [
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
];

const cubes = [CubeOne, CubeTwo, CubeThree];

const Hero = (props: Props) => {
  const windowHeight = useWindowHeight();
  const windowWidth = useWindowWidth();
  const [loading, setLoading] = useState(true);
  const [showViolet, setShowViolet] = useState(true);
  const [isFlexWrap, setIsFlexWrap] = useState(false);
  useEffect(() => {
    if (windowHeight) {
      setLoading(false);
    }
    if (windowHeight <= 690 || windowWidth <= 1024) {
      setShowViolet(false);
    } else {
      setShowViolet(true);
    }
    if (windowHeight <= 800) {
      setIsFlexWrap(true);
    } else {
      setIsFlexWrap(false);
    }
  }, [windowHeight, windowWidth]);

  if (loading) return <Loading />;
  const { type } = props;
  switch (type) {
    case "Home":
      return (
        <section
          className={`bg-gradient-to-tr max-md:min-h-[841px] md:max-h-[878px] h-[calc(100vh-114px)] xl:h-[calc(100vh-138px)] from-[#E4A8F2] via-[#D7C5EF] sm:via-[#E2D7F7] to-[#D0E4F6] sm:to-[#A2DFF1] relative overflow-x-clip pl-[clamp(1rem,-0.186rem+5.059vw,5rem)] py-[32px] sm:pt-[clamp(1rem,0.611rem+1.66vw,2.313rem)]`}
        >
          <div className="layout relative h-full">
            <Image
              src={FadeBackground}
              alt=""
              width={812}
              height={831}
              className="absolute -right-[clamp(12.5rem,6.942rem+23.715vw,31.25rem)] top-[520px] sm:top-0 w-[clamp(18.75rem,10.413rem+35.573vw,46.875rem)]"
            />
            <div className="absolute right-0 2xl:right-10 z-10 rotate-90 top-[40%] transform -translate-y-1/2 xl:block hidden">
              <div className="flex items-center gap-4">
                <p className="text-lg text-white">Scroll Down</p>
                <div className="border px-3 py-2 rounded-full border-white">
                  <Image
                    src={ArrowDown}
                    alt=""
                    width={24}
                    height={24}
                    className="-rotate-90"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full justify-around">
              {/* FIX */}
              <div className={`font-semibold text-[clamp(2.625rem,1.365rem+5.375vw,6rem)] flex ${isFlexWrap ? "flex-wrap items-center" : "flex-col"} w-fit leading-none text-primary-blue pb-[clamp(1rem,0.629rem+1.581vw,2.25rem)]`}>
                <h1 className="max-w-fit">Transforming&nbsp;</h1>
                <h1 className="flex gap-[clamp(0.75rem,0.602rem+0.632vw,1.25rem)] items-center max-w-fit">
                  ideas into
                  <Image
                    src={Earth}
                    alt=""
                    width={90}
                    height={90}
                    className="w-[clamp(2.5rem,1.574rem+3.953vw,5.625rem)] bg-transparent"
                  />
                </h1>
                <h1 className="text-primary-purple max-w-fit">
                  Digital Brilliance_
                </h1>
              </div>
              <div className="relative ml-6">
                <div className="relative w-fit h-fit">
                  <Image
                    src={Stamp}
                    alt=""
                    width={214}
                    height={215}
                    className="lg:block hidden animate-spin-slow w-44"
                  />
                  <Image
                    src={StampArrow}
                    alt=""
                    width={140}
                    height={140}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28"
                  />
                </div>
                <div className="flex -translate-x-9 xl:-translate-x-3 -space-x-3 lg:absolute left-60 2xl:left-52 top-1/2 transform lg:-translate-y-1/2 z-30">
                  {cubes.map((cube, idx) => (
                    <Image
                      key={idx}
                      src={cube}
                      alt=""
                      width={499}
                      height={499}
                      className="w-[clamp(7.734rem,5.395rem+9.98vw,15.625rem)]"
                    />
                  ))}
                </div>
              </div>
              <div className="pt-[clamp(1rem,0.555rem+1.897vw,2.5rem)] flex flex-col-reverse xl:flex-row xl:gap-[clamp(1.25rem,0.138rem+4.743vw,5rem)] z-[1]">
                <div className="max-sm:grid grid-cols-1 xs:grid-cols-2 max-xl:pt-[clamp(1.5rem,3.148rem-2.767vw,0.313rem)] flex gap-x-[clamp(1.25rem,0.879rem+1.581vw,2.5rem)] gap-y-4">
                  <div className="flex flex-col w-fit">
                    <p className="font-medium text-4xl py-2">135+</p>
                    <div className="text-clamp-16-18 flex gap-1">
                      <Image src={Community} alt="" width={24} height={24} />
                      <p>Worldwide Happy Clients</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-fit">
                    <p className="font-medium text-4xl py-2">185+</p>
                    <div className="text-clamp-16-18 flex gap-1">
                      <Image src={Project} alt="" width={24} height={24} />
                      <p>Completed Project</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-fit">
                    <p className="font-medium text-4xl py-2">100%</p>
                    <div className="text-clamp-16-18 flex gap-1">
                      <Image src={ThumbsUp} alt="" width={24} height={24} />
                      <p>Client Satisfaction</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row lg:items-center gap-[clamp(2rem,2.945rem-1.897vw,1rem)]">
                  <div className="flex items-center gap-12">
                    <div className="py-3 px-6 bg-primary-cyan rounded-full w-fit h-fit font-medium text-sm sm:text-lg text-white flex items-center gap-2">
                      Let&apos;s Discuss{" "}
                      <Image src={ArrowRightUp} alt="" width={24} height={24} />
                    </div>
                    <div className="lg:hidden block relative w-fit h-fit">
                      <Image
                        src={Stamp}
                        alt=""
                        width={100}
                        height={100}
                        className="animate-spin-slow"
                      />
                      <Image
                        src={StampArrow}
                        alt=""
                        width={68}
                        height={68}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex -space-x-5 sm:-space-x-4 overflow-hidden text-white">
                      {imageUrls.map((url, index) => (
                        <Image
                          key={index}
                          src={url}
                          alt=""
                          width={48}
                          height={48}
                          className="inline-block w-12 h-12 rounded-full border border-white"
                        />
                      ))}
                      <div className="w-12 h-12 rounded-full border border-white bg-primary-cyan flex items-center justify-center">
                        <p>189+</p>
                      </div>
                    </div>
                    <div className="flex flex-col relative w-fit h-fit">
                      <StarRating count={5} />
                      <p className="font-medium text-primary-blue">
                        Client Review
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                showViolet ? "block" : "hidden"
              } absolute -bottom-[-55px] translate-y-full left-[220px] 2xl:left-[430px]`}
            >
              <Image
                alt="violet-ball"
                src={VioletBall}
                width={279}
                height={277}
                className="w-[clamp(12.5rem,11.203rem+5.534vw,16.875rem)]"
              />
            </div>
          </div>
        </section>
      );
    case "Service":
      return (
        <section className="bg-gradient-to-tr from-[#E5B2F4] via-[#E0BEF0] to-[#D4D8F9] sm:to-[#A8C5FF] relative overflow-hidden pt-[clamp(2.875rem,1.875rem+4.269vw,6.25rem)] pl-[clamp(1rem,-0.186rem+5.059vw,5rem)] pr-8 lg:pr-0 min-h-[611px] max-h-[729px] h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)]">
          <Image
            src={FadeBackground}
            alt=""
            width={812}
            height={831}
            className="absolute transform -translate-y-1/2 z-10 top-[clamp(12.5rem,9.35rem+13.439vw,23.125rem)] -right-[clamp(12.5rem,8.239rem+18.182vw,26.875rem)] w-[clamp(18.75rem,11.709rem+30.04vw,42.5rem)]"
          />
          <div className="layout relative">
            <div className="flex flex-col gap-[52px] w-fit">
              <div className="max-w-[664px] flex flex-col gap-6">
                <div className="font-semibold text-[clamp(2.625rem,1.55rem+4.585vw,6.25rem)] flex flex-col w-fit leading-none text-primary-blue">
                  <h1>Web Design</h1>
                  <h1 className="text-primary-purple">Service</h1>
                </div>
                <p className="text-[clamp(0.875rem,0.764rem+0.474vw,1.25rem)] text-primary-blue">
                  Neque donec libero condimentum imperdiet elementum porta lacus
                  in. Turpis enim in dui sit. Neque donec libero condimentum
                  imperdiet{" "}
                </p>
              </div>
              <div className="py-3 px-6 bg-primary-purple rounded-full w-fit h-fit font-medium text-[clamp(0.875rem,0.801rem+0.316vw,1.125rem)] text-white flex items-center gap-2">
                Let&apos;s Discuss{" "}
                <Image src={ArrowRightUp} alt="" width={24} height={24} />
              </div>
              <Image
                src={CubeOne}
                alt=""
                width={499}
                height={499}
                className="absolute right-[clamp(-3.5rem,-5.279rem+7.589vw,2.5rem)] top-64 sm:top-48 md:top-44 lg:top-28 xl:top-0 2xl:-top-24 w-[clamp(17.5rem,9.718rem+33.202vw,43.75rem)] z-30"
              />
            </div>
          </div>
        </section>
      );
    case "Portofolio":
      return (
        <section className="bg-gradient-to-tr from-[#D2C8ED] via-[#DBD8F2] to-[#D0DFF6] relative overflow-hidden pt-[clamp(2.875rem,1.875rem+4.269vw,6.25rem)] pl-[clamp(1rem,-0.186rem+5.059vw,5rem)] pr-8 lg:pr-0 min-h-[611px] max-h-[729px] h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)]">
          <Image
            src={FadeBackground}
            alt=""
            width={812}
            height={831}
            className="absolute -translate-y-1/2 z-10 top-[clamp(12.5rem,9.35rem+13.439vw,23.125rem)] -right-[clamp(12.5rem,8.239rem+18.182vw,26.875rem)] w-[clamp(18.75rem,11.709rem+30.04vw,42.5rem)]"
          />
          <div className="layout relative">
            <div className="flex flex-col gap-[52px] w-fit">
              <div className="max-w-[664px] flex flex-col gap-6">
                <div className="font-semibold text-[clamp(2.625rem,1.55rem+4.585vw,6.25rem)] flex flex-col w-fit leading-none text-primary-blue">
                  <h1>Our Work</h1>
                  <h1 className="text-primary-purple">Portofolio</h1>
                </div>
                <p className="font-proxima-nova-400 text-[clamp(0.875rem,0.764rem+0.474vw,1.25rem)] text-primary-blue">
                  Neque donec libero condimentum imperdiet elementum porta lacus
                  in. Turpis enim in dui sit. Neque donec libero condimentum
                  imperdiet{" "}
                </p>
              </div>
              <div className="opacity-0 py-3 px-6 bg-[#7855FF] rounded-full w-fit h-fit font-medium text-[clamp(0.875rem,0.801rem+0.316vw,1.125rem)] text-white flex items-center gap-2">
                Let&apos;s Discuss{" "}
                <Image src={ArrowRightUp} alt="" width={24} height={24} />
              </div>
              <Image
                src={CubeThree}
                alt=""
                width={499}
                height={499}
                className="absolute right-[clamp(-3.5rem,-5.279rem+7.589vw,2.5rem)] top-64 sm:top-48 md:top-44 lg:top-28 xl:top-0 2xl:-top-24 w-[clamp(17.5rem,9.718rem+33.202vw,43.75rem)] z-30"
              />
            </div>
          </div>
        </section>
      );
    case "Career":
      return (
        <section className="bg-gradient-to-tr from-[#DBBFEF] via-[#E1CBF1] to-[#DEDFF4] relative overflow-hidden pt-[clamp(2.875rem,1.875rem+4.269vw,6.25rem)] pl-[clamp(1rem,-0.186rem+5.059vw,5rem)] pr-8 lg:pr-0 min-h-[611px] max-h-[729px] h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)]">
          <Image
            src={FadeBackground}
            alt=""
            width={812}
            height={831}
            className="absolute transform -translate-y-1/2 z-10 top-[clamp(12.5rem,9.35rem+13.439vw,23.125rem)] -right-[clamp(12.5rem,8.239rem+18.182vw,26.875rem)] w-[clamp(18.75rem,11.709rem+30.04vw,42.5rem)]"
          />
          <div className="layout relative">
            <div className="flex flex-col gap-[52px] w-fit">
              <div className="max-w-[664px] flex flex-col gap-6">
                <div className="font-semibold text-[clamp(2.625rem,1.55rem+4.585vw,6.25rem)] flex flex-col w-fit leading-none text-primary-blue">
                  <h1>Be Part Of</h1>
                  <h1 className="text-primary-purple">Our Mission</h1>
                </div>
                <p className="text-[clamp(0.875rem,0.764rem+0.474vw,1.25rem)] text-primary-blue">
                  Neque donec libero condimentum imperdiet elementum porta lacus
                  in. Turpis enim in dui sit. Neque donec libero condimentum
                  imperdiet{" "}
                </p>
              </div>
              <div className="opacity-0 py-3 px-6 bg-primary-purple rounded-full w-fit h-fit font-medium text-[clamp(0.875rem,0.801rem+0.316vw,1.125rem)] text-white flex items-center gap-2">
                Let&apos;s Discuss{" "}
                <Image src={ArrowRightUp} alt="" width={24} height={24} />
              </div>
              <Image
                src={CubeTwo}
                alt=""
                width={499}
                height={499}
                className="absolute right-[clamp(-3.5rem,-5.279rem+7.589vw,2.5rem)] top-64 sm:top-48 md:top-44 lg:top-28 xl:top-0 2xl:-top-24 w-[clamp(17.5rem,9.718rem+33.202vw,43.75rem)] z-30"
              />
            </div>
          </div>
        </section>
      );
  }
};

export default Hero;
