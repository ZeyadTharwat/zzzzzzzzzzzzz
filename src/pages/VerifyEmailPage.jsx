// @ts-nocheck

import {
    Box,
    Button,
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
import { verifyUserEmail } from "../lib/api";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";

const VerifyEmailPage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let token = searchParams?.get("token");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorDetails, setErrorDetails] = useState("");
    const [submitErrorMessage, setSubmitErrorMessage] = useState("");

    const { mutate, isLoading } = useMutation(verifyUserEmail, {
        onSuccess(d) {
            console.log("ok");
            setErrorDetails("");
            localStorage.setItem("token", d?.token);
            navigate({
                pathname: "/payment",
                search: `?userId=${d?.id}&id=${d?.registeredPlan}&email=${d?.email}&token=${d?.token}`,
            });
        },
        onError(error) {
            setErrorDetails(error.response.data.errorDetails);
        },
    });

    useEffect(() => {
        mutate({ token: token });
    }, [token, mutate]);

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
            {errorDetails && (
                <h1 className="font-mukta font-normal text-[30px] text-project-purple pb-20 md:pb-[120px] xl:pb-[74px]">
                    Your token is invalid , please try registering again
                </h1>
            )}
        </div>
    );
};

export default VerifyEmailPage;
