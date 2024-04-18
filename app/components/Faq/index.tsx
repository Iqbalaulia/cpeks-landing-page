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

const Faq = (props: Props) => {
  const [collapse, setCollapse] = useState<ProcessCollapseItems[]>([
    {
      isOpen: false,
      title: "What does your UI/UX Design process look like?",
      description: `Ornare et velit libero sed tristique sit ullamcorper. Suspendisse ac cras neque aenean. Egestas gravida nunc nibh auctor elementum. Diam orci sit turpis pharetra. Ultricies id ut libero convallis volutpat pretium fermentum scelerisque rhoncus. Quis feugiat sem volutpat nulla mauris. Nibh sagittis eget massa non suscipit fermentum scelerisque elit. Felis enim sagittis adipiscing gravida quam aenean vestibulum nascetur molestie. Sed sit erat mi purus elementum eget vel eget urna. Urna lectus tortor tristique augue porttitor habitant condimentum. Proin.`,
    },
    {
      isOpen: false,
      title: "How long does a UI & UX design project take?",
      description: `Ornare et velit libero sed tristique sit ullamcorper. Suspendisse ac cras neque aenean. Egestas gravida nunc nibh auctor elementum. Diam orci sit turpis pharetra. Ultricies id ut libero convallis volutpat pretium fermentum scelerisque rhoncus. Quis feugiat sem volutpat nulla mauris. Nibh sagittis eget massa non suscipit fermentum scelerisque elit. Felis enim sagittis adipiscing gravida quam aenean vestibulum nascetur molestie. Sed sit erat mi purus elementum eget vel eget urna. Urna lectus tortor tristique augue porttitor habitant condimentum. Proin.`,
    },
    {
      isOpen: false,
      title: "Can you help us with the UI UX redesign?",
      description: `Ornare et velit libero sed tristique sit ullamcorper. Suspendisse ac cras neque aenean. Egestas gravida nunc nibh auctor elementum. Diam orci sit turpis pharetra. Ultricies id ut libero convallis volutpat pretium fermentum scelerisque rhoncus. Quis feugiat sem volutpat nulla mauris. Nibh sagittis eget massa non suscipit fermentum scelerisque elit. Felis enim sagittis adipiscing gravida quam aenean vestibulum nascetur molestie. Sed sit erat mi purus elementum eget vel eget urna. Urna lectus tortor tristique augue porttitor habitant condimentum. Proin.`,
    },
    {
      isOpen: false,
      title: "How much does a UI/UX design project cost?",
      description: `Ornare et velit libero sed tristique sit ullamcorper. Suspendisse ac cras neque aenean. Egestas gravida nunc nibh auctor elementum. Diam orci sit turpis pharetra. Ultricies id ut libero convallis volutpat pretium fermentum scelerisque rhoncus. Quis feugiat sem volutpat nulla mauris. Nibh sagittis eget massa non suscipit fermentum scelerisque elit. Felis enim sagittis adipiscing gravida quam aenean vestibulum nascetur molestie. Sed sit erat mi purus elementum eget vel eget urna. Urna lectus tortor tristique augue porttitor habitant condimentum. Proin.`,
    },
    {
      isOpen: false,
      title:
        "Do you provide ongoing support after completing the UI UX design project?",
      description: `Ornare et velit libero sed tristique sit ullamcorper. Suspendisse ac cras neque aenean. Egestas gravida nunc nibh auctor elementum. Diam orci sit turpis pharetra. Ultricies id ut libero convallis volutpat pretium fermentum scelerisque rhoncus. Quis feugiat sem volutpat nulla mauris. Nibh sagittis eget massa non suscipit fermentum scelerisque elit. Felis enim sagittis adipiscing gravida quam aenean vestibulum nascetur molestie. Sed sit erat mi purus elementum eget vel eget urna. Urna lectus tortor tristique augue porttitor habitant condimentum. Proin.`,
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
    <div className="bg-primary-blue pt-[clamp(5rem,4.629rem+1.581vw,6.25rem)] px-[clamp(1rem,-0.927rem+8.221vw,7.5rem)] pb-[clamp(5rem,3.907rem+4.664vw,8.688rem)]">
      <div className="layout-narrow">
        <div className="text-center pb-[clamp(2rem,1.111rem+3.794vw,5rem)]">
          <h1 className="text-[clamp(2rem,1.296rem+3.004vw,4.375rem)] font-medium mb-4 text-white flex flex-col justify-center md:justify-normal gap-2 md:gap-0 leading-[clamp(1.875rem,1.097rem+3.32vw,4.5rem)]">
            <div>Frequently</div>
            <div>
              <span className="text-primary-purple">Asked</span> Question
            </div>
          </h1>
        </div>
        <div className="text-white [&>*:not(:first-child)]:pt-[clamp(2rem,1.704rem+1.265vw,3rem)] [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-b-white [&>*:not(:last-child)]:border-opacity-20">
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
    <div className="pb-[clamp(2rem,1.704rem+1.265vw,3rem)]">
      <div className="flex items-center justify-between w-full gap-6">
        <div className="flex items-center">
          <div className="text-[clamp(1.5rem,1.352rem+0.632vw,2rem)] font-medium">
            {props.title}
          </div>
        </div>
        <div
          onClick={props.onToggle}
          className={`flex min-h-11 min-w-11 items-center justify-center rounded-full transition-all
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
        <div className="mt-6 text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] opacity-80 font-proxima-nova-400">{props.description}</div>
      </Collapse>
    </div>
  );
};

export default Faq;
