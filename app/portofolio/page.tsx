import React from "react";
import CommitedStaying from "../components/CommitedStaying";
import OurPopular from "../components/OurPopular";
import LetsCollaborate from "../components/LetsCollaborate";
import Hero from "../components/Hero";
import OurAwesomeWork from "../components/OurAwesomeWork";
import StandAware from "../components/StandAware";

type Props = {};


const PortofolioPage = (props: Props) => {
  return (
    <div>
      <Hero type="Portofolio" />
      <CommitedStaying />
      <OurPopular />
      <OurAwesomeWork />
      <StandAware />
      <LetsCollaborate />
    </div>
  );
};

export default PortofolioPage;
