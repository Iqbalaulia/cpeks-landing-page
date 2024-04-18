"use client";

import React, { ReactNode, useState } from "react";
import { Collapse } from "react-collapse";
import addIcon from "public/icons/add.svg";
import minusIcon from "public/icons/minus.svg";
import Image from "next/image";

type Props = {};
export type ProcessCollapseItems = {
  isOpen: boolean;
  title: string;
  index?: number;
  description: ReactNode | string;
};

const OurProcess = (props: Props) => {
  const [collapse, setCollapse] = useState<ProcessCollapseItems[]>([
    {
      isOpen: false,
      title: "Business Strategy",
      description: (
        <ul className="list-disc grid grid-rows-3 gap-5 grid-flow-col-dense">
          <li>Business Goals</li>
          <li>Mission</li>
          <li>Target Market</li>
          <li>Value Prepositions</li>
          <li>SWOT Analysis</li>
          <li>Business Model Canvas</li>
        </ul>
      ),
    },
    {
      isOpen: false,
      title: "Research",
      description: `Ultrices metus tempus elit nisl. Sit fames sed accumsan urna et diam
        sagittis eros. Auctor consequat amet hendrerit pellentesque duis.
        Dignissim ornare eleifend auctor faucibus. Eu volutpat erat magna
        accumsan. Diam libero sit Etiam integer fermentum at dolor porta
        interdum volutpat. Sociis at sed sapien commodo etiam diam tellus
        dignissim vitae. Tellus gravida et nec sagittis nisi facilisi.
        Pharetra pulvinar nibh amet ultrices id. Vitae cursus tellus ultricies
        tellus ut enim ultrices eget faucibus.`,
    },
    {
      isOpen: false,
      title: "Build & Test",
      description: `Ultrices metus tempus elit nisl. Sit fames sed accumsan urna et diam
        sagittis eros. Auctor consequat amet hendrerit pellentesque duis.
        Dignissim ornare eleifend auctor faucibus. Eu volutpat erat magna
        accumsan. Diam libero sit Etiam integer fermentum at dolor porta
        interdum volutpat. Sociis at sed sapien commodo etiam diam tellus
        dignissim vitae. Tellus gravida et nec sagittis nisi facilisi.
        Pharetra pulvinar nibh amet ultrices id. Vitae cursus tellus ultricies
        tellus ut enim ultrices eget faucibus.`,
    },
    {
      isOpen: false,
      title: "Launch",
      description: `Ultrices metus tempus elit nisl. Sit fames sed accumsan urna et diam
        sagittis eros. Auctor consequat amet hendrerit pellentesque duis.
        Dignissim ornare eleifend auctor faucibus. Eu volutpat erat magna
        accumsan. Diam libero sit Etiam integer fermentum at dolor porta
        interdum volutpat. Sociis at sed sapien commodo etiam diam tellus
        dignissim vitae. Tellus gravida et nec sagittis nisi facilisi.
        Pharetra pulvinar nibh amet ultrices id. Vitae cursus tellus ultricies
        tellus ut enim ultrices eget faucibus.`,
    },
    {
      isOpen: false,
      title: "Test & Iterate",
      description: `Ultrices metus tempus elit nisl. Sit fames sed accumsan urna et diam
        sagittis eros. Auctor consequat amet hendrerit pellentesque duis.
        Dignissim ornare eleifend auctor faucibus. Eu volutpat erat magna
        accumsan. Diam libero sit Etiam integer fermentum at dolor porta
        interdum volutpat. Sociis at sed sapien commodo etiam diam tellus
        dignissim vitae. Tellus gravida et nec sagittis nisi facilisi.
        Pharetra pulvinar nibh amet ultrices id. Vitae cursus tellus ultricies
        tellus ut enim ultrices eget faucibus.`,
    },
    {
      isOpen: false,
      title: "Maintenance",
      description: `Ultrices metus tempus elit nisl. Sit fames sed accumsan urna et diam
        sagittis eros. Auctor consequat amet hendrerit pellentesque duis.
        Dignissim ornare eleifend auctor faucibus. Eu volutpat erat magna
        accumsan. Diam libero sit Etiam integer fermentum at dolor porta
        interdum volutpat. Sociis at sed sapien commodo etiam diam tellus
        dignissim vitae. Tellus gravida et nec sagittis nisi facilisi.
        Pharetra pulvinar nibh amet ultrices id. Vitae cursus tellus ultricies
        tellus ut enim ultrices eget faucibus.`,
    },
  ]);

  const toggleCollapse = (index: number) => {
    setCollapse((prevState) => {
      const newState = [...prevState];
      newState[index].isOpen = !newState[index].isOpen;
      return newState;
    });
  };

  return (
    <div className="bg-primary-blue pt-[clamp(5rem,4.111rem+3.794vw,8rem)] px-[clamp(1rem,-0.186rem+5.059vw,5rem)] pb-[clamp(5rem,4.111rem+3.794vw,8rem)]">
      <div className="layout grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,0.814rem+5.059vw,6rem)]">
        <div className="col-span-1 lg:col-span-4 xl:col-span-5 text-center lg:text-left">
          <h1 className="text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium mb-4 text-white flex justify-center md:justify-normal gap-2 md:gap-0 flex-row md:flex-col">
            <div className="mb-0 md:-mb-4">Our</div>
            <div className="text-primary-purple">Process</div>
          </h1>
        </div>
        <div className="text-white col-span-1 lg:col-span-8 xl:col-span-7 [&>*:not(:first-child)]:pt-12 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-b-white [&>*:not(:last-child)]:border-opacity-20">
          {collapse.map((item, index) => (
            <ProcessDropdown
              key={item.title}
              index={index}
              isOpen={item.isOpen}
              description={item.description}
              title={item.title}
              onToggle={() => toggleCollapse(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type ProcessDropdownProps = {
  isOpen: boolean;
  title: string;
  description: ReactNode | string;
  index: number;
  onToggle: () => void;
};

const ProcessDropdown = (props: ProcessDropdownProps) => {
  return (
    <div className="pb-12">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3 md:gap-10 text-[clamp(1.5rem,1.204rem+1.265vw,2.5rem)]">
          <div className="flex h-[clamp(2.5rem,2.204rem+1.265vw,3.5rem)] w-[clamp(2.5rem,2.204rem+1.265vw,3.5rem)] items-center justify-center rounded-full bg-white text-primary-blue">
            {props.index + 1}
          </div>
          <div className="font-medium">{props.title}</div>
        </div>
        <div
          onClick={props.onToggle}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-all
          ${props.isOpen ? "bg-primary-purple" : "bg-none border border-white"}
          `}
        >
          {props.isOpen ? (
            <Image alt="pen tool icon" src={minusIcon} width={24} height={24} />
          ) : (
            <Image alt="pen tool icon" src={addIcon} width={24} height={24} />
          )}
        </div>
      </div>
      <Collapse isOpened={props.isOpen}>
        <div className="font-proxima-nova-400 ml-0 mr-0 md:ml-24 md:mr-24 mt-6 text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] opacity-80">
          {props.description}
        </div>
      </Collapse>
    </div>
  );
};

export default OurProcess;
