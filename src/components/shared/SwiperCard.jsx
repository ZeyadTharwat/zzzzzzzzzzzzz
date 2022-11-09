// @ts-nocheck
import {
    Box,
    button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Typography,
} from "@mui/material";
import CheckIcon from "components/Icons/CheckIcon";
import React from "react";
import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from '../shared/Button';

export const SwiperCard = ({
    cardBackgroundColor,
    cost,
    costIntervalInDays,
    maxContracts,
    target,
    maxDropdown,
    dailyLoss,
    value,
    id,
    single,
}) => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const userId = useSelector((state) => state.id);

    return (
        <SwiperSlide
            onClick={() => {
                navigate({
                    pathname: token && userId ? "/payment" : "/register",
                    search: userId
                        ? `?userId=${userId}&id=${id}&cost=${cost}`
                        : `?id=${id}&cost=${cost}`,
                });
            }}
            style={{ cursor: "pointer" }}
        >
            <div className="flex flex-col py-10 px-18px font-mukta text-center text-project-black rounded-20px bg-project-gray max-w-[265px] xl:max-w-[294px] mx-auto md:min-h-[400px]">
                <span className="font-normal text-lg xl:text-xl pb-3">
                    {`> ${value} $`}
                </span>
                <span className="font-medium text-[22px] xl:text-2xl text-black ">{`Express ${costIntervalInDays} Days ${cost}`}</span>
                <hr className="border-project-green my-2 border-t-[1px]" />
                <div className="flex items-center pb-2 pl-3">
                    <div className="w-3 h-3 flex justify-center items-center">
                        <CheckIcon />
                    </div>
                    <p className="pl-2 font-mukta font-normal text-base xl:text-xl ">
                        {`TARGET ${target}`}
                    </p>
                </div>
                <div className="flex items-center pb-2 pl-3">
                    <div className="w-3 h-3 flex justify-center items-center">
                        <CheckIcon />
                    </div>
                    <p className="pl-2 font-mukta font-normal text-base xl:text-xl text-start">
                        {maxDropdown === 0
                            ? `NO Drawdown`
                            : `MAX ${maxDropdown}$ Drawdown`}
                    </p>
                </div>
                <div className="flex items-center pb-2 pl-3">
                    <div className="w-3 h-3 flex justify-center items-center">
                        <CheckIcon />
                    </div>
                    <p className="pl-2 font-mukta font-normal text-base xl:text-xl ">
                        {dailyLoss === 0 || !dailyLoss
                            ? `No Daily Loss`
                            : `${dailyLoss} Daily Loss`}
                    </p>
                </div>
                <div className="flex items-center pb-6 pl-3">
                    <div className="w-3 h-3 flex justify-center items-center">
                        <CheckIcon />
                    </div>
                    <p className="pl-2 font-mukta font-normal text-base xl:text-xl ">
                        {`Max ${maxContracts} Contracts`}
                    </p>
                </div>
                <Button className="mt-auto py-7.5px px-30px mx-auto xl:px-14 w-[159px] xl:w-[175px] whitespace-nowrap ">
                    Join Now
                </Button>
            </div>
        </SwiperSlide>
    );
};

SwiperCard.displayName = "SwiperSlide";
