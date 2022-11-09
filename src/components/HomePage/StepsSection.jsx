import React from "react";

import RegistrationVector from "../../assets/images/registration-vector.png";
import PlatformsConnectionsVector from "../../assets/images/platforms-connections-vector.png";
import EvaluationPhaseVector from "../../assets/images/evaluation-phase-vector.png";
import GetFundedVector from "../../assets/images/get-funded-vector.png";

const StepsSection = () => {
  return (
    <div className="container flex justify-center items-center flex-col px-[56px] md:px-10 lg:px-20 xl:px-100px">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-20 lg:gap-x-5">
        <div className="flex flex-col items-center md:items-start mb-14 md:mb-14">
          <img
            src={RegistrationVector}
            className="max-w-[75px] xl:max-w-[85px] mb-[28px] xl:mb-10px"
            alt="registration"
          />
          <h3 className="font-mukta text-project-purple text-22px md:text-26px xl:text-28px pb-2">
            Registration
          </h3>
          <p className="font-mukta text-project-black text-sm lg:text-base xl:text-lg text-center md:text-start">
            Register on our platform and choose your plan.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start mb-14 md:mb-14">
          <img
            src={PlatformsConnectionsVector}
            className="max-w-[75px] xl:max-w-[85px] mb-[28px] xl:mb-10px"
            alt="platforms connections"
          />
          <h3 className="font-mukta text-project-purple text-22px md:text-26px xl:text-28px pb-2">
            Platforms Connections
          </h3>
          <p className="font-mukta text-project-black text-sm lg:text-base xl:text-lg text-center md:text-start">
            Download and install your preferred trading platform among our
            partners NinjaTrader, Jigsaw Trading and Rithmic.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start mb-14 md:mb-14">
          <img
            src={EvaluationPhaseVector}
            className="max-w-[75px] xl:max-w-[85px] mb-[28px] xl:mb-10px"
            alt="evaluation phase"
          />
          <h3 className="font-mukta text-project-purple text-22px md:text-26px xl:text-28px pb-2">
            Evalution Phase
          </h3>
          <p className="font-mukta text-project-black text-sm lg:text-base xl:text-lg text-center md:text-start">
            Build your strategy and put it in motion following our guidelines to
            reach your plan’s target.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start mb-14 md:mb-14">
          <img
            src={GetFundedVector}
            className="max-w-[75px] xl:max-w-[85px] mb-[28px] xl:mb-10px"
            alt="get funded"
          />
          <h3 className="font-mukta text-project-purple text-22px md:text-26px xl:text-28px pb-2">
            Get Funded
          </h3>
          <p className="font-mukta text-project-black text-sm lg:text-base xl:text-lg text-center md:text-start">
            Become an Armoni Management’s funded trader and start earning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
