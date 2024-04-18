import React from "react";
import OurExpertise from "../components/OurExpertise";
import OurProcess from "../components/OurProcess";
import WhatPeopleSays from "../components/WhatPeopleSays";
import About from "../components/About";
import Faq from "../components/Faq";
import LetsCollaborate from "../components/LetsCollaborate";
import Hero from "../components/Hero";
import BestExperience from "../components/BestExperience";
import AwesomeWorks from "../components/AwesomeWorks";
import TechStack from "../components/TechStack";
import RelatedService from "../components/RelatedService";
import StandAware from "../components/StandAware";

type Props = {};

const ServicePage = (props: Props) => {
  return (
    <div>
      <Hero type='Service' />
      <BestExperience />
      <OurExpertise />
      <OurProcess />
      <AwesomeWorks type="Home" />
      <WhatPeopleSays />
      <TechStack />
      <About />
      <Faq />
      <RelatedService />
      <StandAware />
      <LetsCollaborate />
    </div>
  );
};

export default ServicePage;
