import React from "react";

import shopifyIcon from "public/icons/brands/shopify.png";
import reactIcon from "public/icons/brands/react.png";
import ajaxIcon from "public/icons/brands/ajax.png";
import javascriptIcon from "public/icons/brands/javascript.png";
import prestashopIcon from "public/icons/brands/prestashop.png";
import figmaIcon from "public/icons/brands/figma.png";
import awsIcon from "public/icons/brands/aws.png";
import jsonIcon from "public/icons/brands/json.png";
import pythonIcon from "public/icons/brands/python.png";
import jqueryIcon from "public/icons/brands/jquery.png";
import symfonyIcon from "public/icons/brands/symfony.png";
import aiIcon from "public/icons/brands/ai.png";
import bootstrapIcon from "public/icons/brands/bootstrap.png";
import wordpressIcon from "public/icons/brands/wordpress.png";
import phpIcon from "public/icons/brands/php.png";
import photoshopIcon from "public/icons/brands/photoshop.png";
import Image from "next/image";

type Props = {};

const OurPartners = (props: Props) => {
  return (
    <div className="font-kanit mt-[clamp(5rem,4.629rem+1.581vw,6.25rem)] mx-[clamp(1rem,-0.186rem+5.059vw,5rem)] mb-[clamp(5rem,4.259rem+3.162vw,7.5rem)] overflow-hidden">
      <div className="layout grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
        <div className="col-span-1 lg:col-span-5 text-center lg:text-left">
          <h1 className="text-[clamp(2rem,1.481rem+2.213vw,3.75rem)] font-medium mb-4">
            Our <span className="text-primary-purple">Partners</span>
          </h1>
          <p className="text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] font-normal font-proxima-nova-400">
            Justo facilisis laoreet commodo netus venenatis et mi sed. Dui nisl
            viverra augue ac sed scelerisque.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-7 grid grid-cols-2 lg:grid-cols-4 place-items-center gap-x-20 gap-y-8 *:py-3">
          <Image alt="brand icon" src={shopifyIcon} />
          <Image alt="brand icon" src={reactIcon} />
          <Image alt="brand icon" src={ajaxIcon} />
          <Image alt="brand icon" src={javascriptIcon} />
          <Image alt="brand icon" src={prestashopIcon} />
          <Image alt="brand icon" src={figmaIcon} />
          <Image alt="brand icon" src={awsIcon} />
          <Image alt="brand icon" src={jsonIcon} />
          <Image alt="brand icon" src={pythonIcon} />
          <Image alt="brand icon" src={jqueryIcon} />
          <Image alt="brand icon" src={symfonyIcon} />
          <Image alt="brand icon" src={aiIcon} />
          <Image alt="brand icon" src={bootstrapIcon} />
          <Image alt="brand icon" src={wordpressIcon} />
          <Image alt="brand icon" src={phpIcon} />
          <Image alt="brand icon" src={photoshopIcon} />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
