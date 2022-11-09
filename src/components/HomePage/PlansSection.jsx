// @ts-nocheck
import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";
import { Swiper } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import { getPlansForHomeScreen } from "lib/api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SwiperCard } from "components/shared/SwiperCard";
import { Navigation } from "swiper";
import PrevButton from "../../assets/images/swiper-prev-button.png";
import NextButton from "../../assets/images/swiper-next-button.png";

const PlansSection = () => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);

    const { isLoading, error, data } = useQuery(
        ["plans"],
        getPlansForHomeScreen
    );
    return (
        <div
            className="container justify-center items-center py-60px lg:pb-[120px] px-21px md:px-[44.9px] lg:px-20 xl:px-100px "
            id="plans"
        >
            <h1 className="font-mukta font-medium text-project-purple text-40px xl:text-5xl pb-[58px] text-center">
                Our Plans
            </h1>
            <div className="flex items-center">
                <img
                    src={PrevButton}
                    alt="prev button"
                    className="icon-arrow-long-left review-swiper-button-prev pr-2 cursor-pointer lg:hidden"
                ></img>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        744: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                    navigation={{
                        nextEl: ".review-swiper-button-next",
                        prevEl: ".review-swiper-button-prev",
                    }}
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    params={{
                        zoom: {
                            enabled: true,
                        },
                    }}
                >
                    {data?.map((plan) => {
                        return (
                            <SwiperCard
                                id={plan.id}
                                cardBackgroundColor="ghostWhite"
                                cost={plan.cost}
                                costIntervalInDays={plan.costIntervalInDays}
                                maxContracts={plan.maxContracts}
                                target={plan.target}
                                maxDropdown={plan.maxDropdown}
                                dailyLoss={plan.dailyLoss}
                                value={plan.value}
                            />
                        );
                    })}
                </Swiper>
                <img
                    src={NextButton}
                    alt="next button"
                    className="icon-arrow-long-right review-swiper-button-next pl-2 cursor-pointer lg:hidden"
                ></img>
            </div>
        </div>
    );
};

export default PlansSection;
