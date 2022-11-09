import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import JigsawIcon from "../../assets/images/jigsaw.png";
import NinjaTraders from "../../assets/images/ninja-trader-image.png";
import Rithmic from "../../assets/images/rithmic-image.png";
import StripeIcon from "components/Icons/StripeIcon";
import Stripe from "../../assets/images/stripe-icon.png";
import PrevButton from "../../assets/images/swiper-prev-button.png";
import NextButton from "../../assets/images/swiper-next-button.png";
import AlfcoinIcon from "../../assets/images/alfcoin-svg.svg";
import { Navigation } from "swiper";
const PartnersSection = () => {
    return (
        <>
            <h1 className=" font-mukta font-medium text-project-black text-40px xl:text-5xl pb-60px pt-[50px] text-center">
                Our partners
            </h1>
            <div className="lg:container flex items-center  px-21px md:px-[44.9px] lg:px-[80px] xl:px-100px">
                <img
                    src={PrevButton}
                    alt="prev button"
                    className="icon-arrow-long-left review-swiper-button-prev-2 pr-2 cursor-pointer "
                ></img>
                <Swiper
                    navigation={{
                        nextEl: ".review-swiper-button-next-2",
                        prevEl: ".review-swiper-button-prev-2",
                    }}
                    direction="horizontal"
                    spaceBetween={20}
                    modules={[Navigation]}
                    slidesPerView={1}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        744: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                    style={{
                        paddingBottom: "20px",
                    }}
                >
                    <SwiperSlide className="flex justify-center items-center ">
                        <div className="flex justify-center items-center">
                            <img
                                src={Stripe}
                                className=" w-3/4 object-contain h-[170px]"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <img
                                src={JigsawIcon}
                                className=" w-3/4 object-contain h-[170px]"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                        <div className="flex justify-center items-center ">
                            <img
                                src={NinjaTraders}
                                className=" w-3/4 flex justify-center items-center object-contain h-[170px]"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <img
                                src={Rithmic}
                                className=" w-3/4 object-contain h-[170px]"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                        <img
                            src={AlfcoinIcon}
                            className=" w-3/4 object-contain h-[170px]"
                        />
                    </SwiperSlide>
                </Swiper>
                <img
                    src={NextButton}
                    alt="next button"
                    className="icon-arrow-long-right review-swiper-button-next-2 pl-2 cursor-pointer "
                ></img>
            </div>
        </>
    );
};

export default PartnersSection;
