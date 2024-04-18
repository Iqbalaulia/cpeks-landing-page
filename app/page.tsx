import RunningText from "./components/RunningText";
import ProudlyWorked from "./components/ProudlyWorked";
import OurPartners from "./components/OurPartners";
import WhatPeopleSays from "./components/WhatPeopleSays";
import About from "./components/About";
import LetsCollaborate from "./components/LetsCollaborate";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import AwesomeWorks from "./components/AwesomeWorks";
import StandAware from "./components/StandAware";
import OurBlog from "./components/OurBlog";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero type="Home" />
      <RunningText />
      <ProudlyWorked />
      <About />
      <OurPartners />
      <OurServices />
      <AwesomeWorks type="Home" />
      <WhatPeopleSays />
      <Faq />
      <OurBlog />
      <StandAware />
      <LetsCollaborate />
    </div>
  );
}
