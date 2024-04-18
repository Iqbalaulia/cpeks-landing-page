import React from "react";
import WorkedWithRunning from "../WorkedWithRunning";

type Props = {};

const ProudlyWorked = (props: Props) => {
  return (
    <div className="relative overflow-visible">
      <div className="h-24 bg-gradient-to-b from-primary-purple to-transparent opacity-30 hidden lg:block" />
      <div className="layout">
        <div className="text-center font-kanit">
          <div className="mx-4 lg:mx-auto pt-16 ">
            <h3 className="text-[clamp(2rem,1.481rem+2.213vw,3.75rem)] font-medium text-primary-blue mb-4">
              <span className=" text-primary-purple">Proudly</span> Worked With
            </h3>
            <p className="text-[clamp(1rem,0.926rem+0.316vw,1.25rem)] font-normal">
              Aenean dui lectus ornare lectus tristique ac ante et. Proin eu
              donec arcu.
            </p>
          </div>
        </div>
        <div className="mt-[clamp(2rem,1.111rem+3.794vw,5rem)] mb-[clamp(4rem,3.407rem+2.53vw,6rem)]">
          <WorkedWithRunning />
        </div>
      </div>
    </div>
  );
};

export default ProudlyWorked;
