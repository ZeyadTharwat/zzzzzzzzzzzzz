// @ts-nocheck

import {
    Box,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import SignupImage from "../assets/images/sign-up.png";
import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setId, removeId } from "store/userSlice";
import { useForm, Controller } from "react-hook-form";
import { signIn } from "../lib/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import ErrorText from "components/shared/ErrorText";
import { forgotPassword } from "../lib/api";
import Button from 'components/shared/Button';

const ForgotPasswordPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [submitErrorDetails, setSubmitErrorDetails] = useState("");
    const [submitErrorMessage, setSubmitErrorMessage] = useState("");
    const [submitError, setSubmitError] = useState("");

    const { mutate, isSuccess } = useMutation(forgotPassword, {
        onSuccess(d) {
            setSubmitErrorDetails("");
        },
        onError(error) {
            setSubmitErrorDetails(error.response.data.errorDetails);
            setSubmitError(error.response.data.errorDetails);
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
        let newData = {
            ...data,
            redirectURL: `${window.location.origin}/reset-password`,
        };
        mutate(newData);
    };

    if (isSuccess)
        return (
            <div className="container flex flex-col px-4 md:px-[186px] lg:px-[175px] xl:px-[238px] text-center py-20 md:py-[180px]">
                <h1 className="font-mukta font-normal text-[30px] text-project-purple pb-20 md:pb-[120px] xl:pb-[74px]">
                    Password Reset
                </h1>
                <p className="font-mukta text-base md:text-xl">
                    Please check your email for details on how to reset your
                    password.
                </p>
            </div>
        );

    return (
        <div className="container flex flex-col px-4 md:px-[186px] lg:px-[175px] xl:px-[238px] text-center py-20 md:py-[180px]">
            <h1 className="font-mukta font-normal text-[30px] text-project-purple pb-20 md:pb-[120px] xl:pb-[74px]">
                Reset Password
            </h1>
            <div className="flex flex-col-reverse lg:flex-row justify-between">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex justify-center items-center lg:w-1/2 lg:mr-14"
                >
                    <div className="flex flex-col w-full ">
                        <div
                            className={`${
                                submitErrorDetails === "string"
                                    ? "flex"
                                    : "hidden"
                            } pt-2 ml-2`}
                        >
                            <ErrorText
                                message={
                                    typeof submitErrorDetails === "string"
                                        ? `${submitErrorDetails}`
                                        : ""
                                }
                            />
                        </div>
                        <ErrorText
                            message={
                                errors?.email?.message ||
                                submitErrorDetails?.email
                            }
                        />
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Email is required",
                            }}
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: {
                                    invalid,
                                    isTouched,
                                    isDirty,
                                    error,
                                },
                                formState,
                            }) => (
                                <input
                                    className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray mb-3 mr-5"
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Email Address"
                                />
                            )}
                        />

                        <Button
                            type="submit"
                            className="py-2.5 w-full text-lg md:text-xl"
                        >
                            Reset Password
                        </Button>
                    </div>
                </form>
                <div className="flex justify-center items-center lg:w-1/2">
                    <img
                        src={SignupImage}
                        className="mb-[54px] max-w-[280px] md:max-w-[368px] lg:max-w-[551px] xl:max-w-[502px] "
                    />
                </div>
            </div>
        </div>
    );

};

export default ForgotPasswordPage;
