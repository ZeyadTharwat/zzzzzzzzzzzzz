// @ts-nocheck
import {
    Box,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import AvatarFirst from "../../assets/images/avatar-1.png";
import { getNotify } from "lib/api";
import { Controller, useForm } from "react-hook-form";
import Button from "components/shared/Button";
const TradingSection = () => {
    const [submitError, setSubmitError] = useState("");
    const [submitSuccess, setSubmitSuccess] = useState("");

    const { mutate, error, isError, isSuccess, data } = useMutation(getNotify, {
        onSuccess(d, v, c) {
            setSubmitError("");
            setSubmitSuccess(d);
        },
        onError(error, v, c) {
            setSubmitError(error.response.data.errorMessage);
        },
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
        },
    });
    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <div
            id="trading"
            className="scroll-my-28  z-[1] relative mt-60px bg-gradient-to-r from-light-purple to-light-blue md:mx-10 lg:mx-20 xl:mx-40 md:rounded-20px
            before:transition-all before:ease-in before:duration-500 
            before:absolute
            before:content-[''] 
            before:rounded-20px 
            before:top-0 before:bottom-0 before:left-0 before:right-0
            before:z-[-1] before:opacity-0
            before:bg-gradient-to-l
            hover:before:opacity-100
            "
        >
            <div className=" pt-[33px] pb-20 md:pb-60px lg:pb-[51px]  px-4 md:px-12 lg:px-[75px] flex flex-col lg:flex-row font-mukta  w-full">
                <div className="flex flex-col lg:w-1/2 lg:pr-[67px] xl:pr-[109px]">
                    <h1 className="text-white font-medium text-2xl md:text-3xl xl:text-[32px] pb-3 md:pb-1">
                        Trading University
                    </h1>
                    <p className="text-white font-normal text-sm md:text-base lg:text-lg leading-[27px] pb-6 ">
                        Complete course engineered by professional traders with
                        20 years of experience
                    </p>
                    <div className="flex flex-col md:flex-row lg:flex-col mb:mb-35px lg:mb-0  ">
                        <div className="border border-white border-solid py-2.5 px-[38px] text-white rounded-[28px] mb-[26px] flex justify-center items-center w-max mr-10 whitespace-nowrap">
                            Coming Soon
                        </div>{" "}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full "
                        >
                            <span className="text-error-red my-4">
                                {submitError}
                            </span>
                            <span className="text-mint-green my-4">
                                {submitSuccess}
                            </span>
                            <div className="mr-30px mb-35px relative flex max-w-[313px]">
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({
                                        field: {
                                            onChange,
                                            onBlur,
                                            value,
                                            name,
                                            ref,
                                        },
                                        fieldState: {
                                            invalid,
                                            isTouched,
                                            isDirty,
                                            error,
                                        },
                                        formState,
                                    }) => (
                                        <input
                                            className=" zbr rounded-20px py-7px pl-21px  w-full h-max"
                                            value={value}
                                            onChange={onChange}
                                            placeholder="Email Address"
                                        />
                                    )}
                                />
                                {/* <input className=" rounded-20px py-[7px] pl-21px w-full h-max" /> */}
                                <Button
                                    type="submit"
                                    className="text-base py-1 px-21px mt-[5px] whitespace-nowrap absolute right-0 mr-1 hover:bg-gradient-to-l"
                                >
                                    get notify
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col lg:w-1/2 justify-center invisible">
                    <div className="flex p-[14px] bg-project-blue mb-5 rounded-r-20px rounded-tl-20px md:max-w-[455px]">
                        <img src={AvatarFirst} className="pr-18px h-max" />
                        <p className="pt-[14px] text-white font-mukla">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo.
                        </p>
                    </div>
                    <div className="flex p-[14px] bg-project-light-purple mb-5 rounded-r-20px rounded-tl-20px md:max-w-[455px] ml-auto">
                        <p className="pt-[14px] text-white font-mukla">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo.
                        </p>
                        <img src={AvatarFirst} className="pl-3 h-max" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradingSection;
