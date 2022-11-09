import React from "react";
import HeroImage from "../../assets/images/hero-img.png";

const HeroSection = ({ data, isLoading }) => {
    console.log(data);
    const { title, description, photo } = data?.find(
        (section) => section.slug === "hero-section"
    );

    return (
        <div className="container flex justify-between items-center lg:px-[127px] xl:px-[110px] py-10 md:py-20 flex-col-reverse lg:flex-row ">
            <div className="flex flex-col lg:w-1/2 ">
                {/* <p className="font-mukta tracking-0.165 text-center lg:text-start text-32px md:text-44px xl:text-6xl font-medium pb-2 md:pb-0 xl:leading-snug">
          Trade & Earn
          <br /> like never before
        </p> */}
                <p className="font-mukta tracking-0.165 text-center lg:text-start text-32px md:text-44px xl:text-6xl font-medium pb-2 md:pb-0 xl:leading-snug max-w-[307px] md:max-w-[422px] lg:max-w-[576px] xl:max-w-[576] mx-auto xl:mx-0">
                    {title}
                </p>
                {/* <p className="font-mukta font-normal text-center lg:text-start text-lg md:text-22px xl:text-2xl px-4 lg:px-0 text-[#494949]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dumm unknown
          printer
        </p> */}
                <p className="font-mukta font-normal text-center lg:text-start text-lg md:text-22px xl:text-2xl px-4 lg:px-0 text-[#494949]">
                    {description}
                </p>
            </div>
            <div className="lg:w-1/2 lg:pl-[139px] mb-10">
                <img
                    className="h-auto spin-animation max-w-[282px] md:max-w-[494px] lg:max-w-[383px] xl:max-w-[525px] "
                    src={photo}
                    alt="hero"
                />
            </div>
        </div>
    );
};

export default HeroSection;
