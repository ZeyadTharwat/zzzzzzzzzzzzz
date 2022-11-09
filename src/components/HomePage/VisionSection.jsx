import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import VisionImage from "../../assets/images/vision-image.png";

const VisionSection = () => {
    return (
        <div
            id="vision"
            className="container flex justify-between items-center lg:px-[127px] xl:px-[101px] py-10  flex-col-reverse lg:flex-row scroll-my-28"
        >
            <div className="flex flex-col lg:w-1/2 text-center">
                <p className=" font-mukta tracking-0.165 text-center lg:text-start text-32px md:text-44px xl:text-32px font-medium pb-2 md:pb-3  text-project-black">
                    Vision
                </p>
                <p className="font-mukta font-normal text-center lg:text-start text-base md:text-lg xl:text-xl px-4 lg:px-0 mb-3 md:mb-4 lg:mb-3 text-project-black">
                    Made by traders for traders 20 years of experience
                    Partnership with industry leaders Propfirm 2.0 : first of
                    his kind ecosystem : A prop firm, a hedge fund, a crypto
                    token and its community
                </p>
                <p className="font-mukta font-normal text-center lg:text-start text-base md:text-lg xl:text-xl px-4 lg:px-0 mb-3 md:mb-4 lg:mb-3 text-project-black">
                    Serinity traders is not just a Propfirm like any others, its
                    part of an ecosystem and community:
                </p>
                <p className="font-mukta font-normal text-center lg:text-start text-base md:text-lg xl:text-xl px-4 lg:px-0 mb-3 md:mb-4 lg:mb-3 text-project-black">
                    – Hedge fund : Serinity Traders manages funds for our hedge
                    fund “Armoni” based and regulated by Grand Duchy of
                    Luxembourg
                </p>
                <p className="font-mukta font-normal text-center lg:text-start text-base md:text-lg xl:text-xl px-4 lg:px-0 mb-3 md:mb-4 lg:mb-3 text-project-black">
                    – Token and crypto community : Investment community and its
                    token “Alfcoin” registered under Alfgroup in Dubaï.
                </p>
            </div>
            <div className="lg:w-1/2 lg:pl-[139px] mb-10">
                <img
                    className="h-auto bounce-animation max-w-[282px] md:max-w-[494px] lg:max-w-[383px] xl:max-w-[525px] "
                    src={VisionImage}
                    alt="vision"
                />
            </div>
        </div>
    );
};

export default VisionSection;
