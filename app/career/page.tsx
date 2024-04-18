import React from "react";
import JoinOurTeam from "../components/JoinOurTeam";
import OurProcess from "../components/OurProcess";
import CoreValues from "../components/CoreValues";
import About from "../components/About";
import CurrentOpening from "../components/CurrentOpening";
import LetsCollaborate from "../components/LetsCollaborate";
import Hero from "../components/Hero";
import OurTeammate from "../components/OurTeammate";

type Props = {};

const CareerPage = (props: Props) => {
  return (
    <div>
      <Hero type="Career" />
      <JoinOurTeam />
      <CoreValues />
      <OurTeammate />
      <About />
      <CurrentOpening />
      <LetsCollaborate />
    </div>
  );
};

export default CareerPage;
