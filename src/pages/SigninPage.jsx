// @ts-nocheck

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
import Button from 'components/shared/Button';


const SigninPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [submitErrorDetails, setSubmitErrorDetails] = useState("");
    const [submitErrorMessage, setSubmitErrorMessage] = useState("");
    const { mutate } = useMutation(signIn, {
        onSuccess(d) {
            dispatch(setToken(d?.token));
            dispatch(setId(d?.id));
            localStorage.setItem("token", d?.token);
            navigate("/");
        },
        onError(error) {
            setSubmitErrorDetails(error.response.data.errorDetails);
            setSubmitErrorMessage(error.response.data.errorMessage);
        },
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <div className="container flex flex-col px-4 md:px-[186px] lg:px-[175px] xl:px-[238px] text-center py-20 md:py-[180px]">
            <h1 className="font-mukta font-normal text-[30px] text-project-purple pb-20 md:pb-[120px] xl:pb-[74px]">
                Login To Your Account
            </h1>
            <div className="flex flex-col-reverse lg:flex-row justify-between">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex justify-center items-center lg:w-1/2 lg:mr-14 "
                >
                    <div className="flex flex-col w-full gap-y-3">
                        <ErrorText message={submitErrorDetails} />
                        {/* <ErrorText message={submitErrorDetails ? submitErrorDetails : ""} /> */}
                        <ErrorText
                            message={
                                errors?.email?.message ||
                                submitErrorDetails?.email
                            }
                        />
                        <Controller
                            name="email"
                            control={control}
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
                                    className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray "
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Email Address"
                                />
                            )}
                        />
                        <ErrorText
                            message={
                                errors?.password?.message ||
                                submitErrorDetails?.password
                            }
                        />
                        <Controller
                            name="password"
                            control={control}
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
                                    type="password"
                                    className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray "
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Password"
                                />
                            )}
                        />
                        <div className="flex justify-between mb-30px">
                            <RouterNavLink
                                to="/forgot-password"
                                className="font-overpass text-[#494949] text-xs ml-auto"
                            >
                                <span className="">Forgot Your Password?</span>
                            </RouterNavLink>
                        </div>
                        <Button
                            type="submit"
                            className="py-2.5 w-full   text-lg md:text-xl "
                        >
                            Log In
                        </Button>
                    </div>
                </form>
                <div className="flex justify-center items-center lg:w-1/2">
                    <img
                        src={SignupImage}
                        className=" mb-[54px] max-w-[280px] md:max-w-[368px] lg:max-w-[551px] xl:max-w-[502px] "
                    />
                </div>
            </div>
        </div>
    );
};

export default SigninPage;
