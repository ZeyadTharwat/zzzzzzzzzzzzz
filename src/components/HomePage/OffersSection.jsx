import CheckIcon from "components/Icons/CheckIcon";
import React from "react";
import OffersImage from "../../assets/images/offers-image.png";

const OffersSection = () => {
  return (
    <div
      id="offers"
      className="container  justify-center items-center pb-60px lg:pb-[120px] px-[35px] lg:px-[175px] xl:px-[205px] scroll-my-28"
    >
      <h1 className="font-mukta font-medium text-project-purple text-40px xl:text-5xl pb-[58px] text-center">
        Offers
      </h1>
      <div className="flex w-full flex-col-reverse lg:flex-row">
        <div className="flex flex-col lg:w-1/2 justify-center items-center lg:items-start">
          <h3 className="font-mukta font-medium text-project-purple text-3xl xl:text-32px pb-[35px] xl:pb-[32px]">
            Innovative products
          </h3>
          <div className="flex flex-col">
            <div className="flex items-center pb-4">
              <div className="w-[12px] h-[12px]">
                <CheckIcon />
              </div>
              <p className="pl-4 font-mukta font-normal text-lg xl:text-xl text-project-black">
                Several plans to choose from to meet all your needs.
              </p>
            </div>
            <div className="flex items-center pb-4">
              <div className="w-[12px] h-[12px]">
                <CheckIcon />
              </div>
              <p className="pl-4 font-mukta font-normal text-lg xl:text-xl text-project-black">
                70/30 split profit with the scaling option of doubling{" "}
                <br className="hidden lg:block" />
                the traded account every month.
              </p>
            </div>
            <div className="flex items-center pb-4">
              <div className="w-[12px] h-[12px]">
                <CheckIcon />
              </div>
              <p className="pl-4 font-mukta font-normal text-lg xl:text-xl text-project-black">
                More flexible max drawdowns than competitors.
              </p>
            </div>
            <div className="flex items-center pb-4">
              <div className="w-[12px] h-[12px]">
                <CheckIcon />
              </div>
              <p className="pl-4 font-mukta font-normal text-lg xl:text-xl text-project-black">
                Competitive pricing.
              </p>
            </div>
            <div className="flex items-center pb-4">
              <CheckIcon />
              <p className="pl-4 font-mukta font-normal text-lg xl:text-xl text-project-black">
                In House former and university.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="flex justify-center items-center pb-10 lg:pb-0">
            <img
              src={OffersImage}
              className="spin-animation max-w-[306px] md:max-w-[402px] lg:max-w-[455px] xl:max-w-[473px]  lg:pl-[68px] xl:pl-[104px]"
              alt="offers"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
