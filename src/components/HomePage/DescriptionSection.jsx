import React from "react";
import DescriptionImage from "../../assets/images/desc-img.png";

const DescriptionSection = () => {
    return (
        <div className="container flex justify-center items-center flex-col">
            <div className="mb-10 md:mb-6 lg:mb-10 xl:mb-4 px-[35px]">
                <img
                    className="h-auto up-and-down-animation max-w-[306px] md:max-w-[402px] pb-10 md:pb-6 lg:pb-10 xl:pb-4"
                    src={DescriptionImage}
                    alt="description"
                />
            </div>
            <h1 className="font-mukta font-medium text-center leading-9 text-project-purple text-2xl md:text-3xl xl:text-32px ">
                “Propfirm 2.0 : Community <br className="md:hidden" /> end to
                end trading”
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-[27px] pb-11 md:pt-4 md:-pb-[70px] lg:pt-10 lg:pb-[168px] lg:gap-x-6 xl:gap-x-36 px-[35px] md:px-100px lg:px-20  xl:px-[110px]">
                <p className="mb-5 text-project-black font-normal text-sm font-overpass">
                    As the demand for funding programs grows, we see a lot of
                    Propfirm coming to life all around the world, offering
                    almost the same subscriptions and standards. We know them
                    very well, we’ve been funded traders for the most of them.
                    But the truth is: after monitoring the markets and their
                    institutions for the past 20 years, we believe we can do
                    better and offer improved products, opportunities and
                    support for the growing trader community.
                </p>
                <p className="mb-5 text-project-black font-normal text-sm font-overpass">
                    Being a home Propfirm trader is a solitary task which can be
                    tough and sometimes have negative impact on trader’s mental
                    and results. We, at Serinity Traders, want to support and
                    advise our traders whenever they wish to by offering them
                    innovative solutions and working environment, real career
                    opportunities as well as professional well being and money
                    management support.
                </p>
                <p className="mb-5 text-project-black font-normal text-sm font-overpass">
                    “Together - Learn - Upgrade ”
                </p>
                <p className="mb-5 text-project-black font-normal text-sm font-overpass">
                    Empowering Community bonding
                </p>
                <p className="mb-5 text-project-black font-normal text-sm font-overpass">
                    Through our socials and interfaces, we will do our best to
                    connect people together and facilitate exchanges around
                    their passion : trading.
                </p>
                <p className="mb-5 text-project-black font-normal text-sm font-overpass">
                    Certified trainer and courses at your disposal
                </p>
                <p className="mb-5 text-project-black font-normal text-sm font-overpass">
                    Our users will have access to our “Trading University” to
                    complete their knowledge as they see fit and will also be
                    able to join regular classes with our certified trainer to
                    address specific areas of improvement.
                </p>
                <p className="mb-5 text-project-black font-normal text-sm font-overpass">
                    Real career opportunity in our Hedge Fund Armoni Management
                </p>
                <p className="mb-5 text-project-black font-normal text-sm font-overpass">
                    Among our certified trainers, our management will identify
                    and mentor the most willing and promising traders to give
                    them access to Armoni Management trading rooms in Dubai and
                    Athens, in most professional working environment and provide
                    psychological support from our in house psychologist.
                </p>
                <p className=" text-project-black font-normal text-sm font-overpass">
                    The best traders of the floor will be entitled to extra
                    bonus and will have the opportunity to sign a long term
                    contract as professional trader with Armoni Management Hedge
                    Fund in Luxembourg
                </p>
            </div>
        </div>
    );
};

export default DescriptionSection;
