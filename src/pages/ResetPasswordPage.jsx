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
import { useSearchParams } from "react-router-dom";
import { resetPassword } from "../lib/api";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Button from 'components/shared/Button';

const ResetPasswordPage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let token = searchParams?.get("token");
    let email = searchParams?.get("email");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorDetails, setErrorDetails] = useState("");
    const [submitErrorMessage, setSubmitErrorMessage] = useState("");

    const { mutate, isLoading } = useMutation(resetPassword, {
        onSuccess(d) {
            setErrorDetails("");
            navigate("/login");
            toast.success(`Password was successfully changed.`, {
                position: toast.POSITION.TOP_RIGHT,
            });
        },
        onError(error) {
            setErrorDetails(error.response.data.errorDetails);
        },
    });

    // useEffect(() => {
    //   mutate({ token: token });
    // }, [token, mutate]);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            newPassword: "",
        },
    });

    const onSubmit = (data) => {
        let newData = {
            ...data,
            passwordToken: token,
            email: email,
        };

        mutate(newData);
    };

    if (isLoading)
        return (
            <Container>
                <Typography
                    variant="h1"
                    fontFamily="N27"
                    textAlign="center"
                    paddingBottom={{ xs: "24px" }}
                >
                    <CircularProgress color="black" />
                </Typography>
            </Container>
        );

    return (
        <div className="container flex flex-col px-4 md:px-[186px] lg:px-[175px] xl:px-[238px] text-center py-20 md:py-[180px]">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex justify-center items-center lg:mr-14"
            >
                <div className="flex flex-col w-full ">
                    <ErrorText message={errors?.newPassword?.message} />
                    <Controller
                        name="newPassword"
                        control={control}
                        rules={{ required: "New Password is required" }}
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                            fieldState: { invalid, isTouched, isDirty, error },
                            formState,
                        }) => (
                            <input
                                className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray mb-6 "
                                value={value}
                                onChange={onChange}
                                placeholder="New Password"
                            />
                        )}
                    />

                    <Button
                        type="submit"
                        className="py-2.5 w-full text-lg md:text-xl "
                    >
                        Reset Password
                    </Button>
                </div>
            </form>
        </div>
    );

};

export default ResetPasswordPage;
