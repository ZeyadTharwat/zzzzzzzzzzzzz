// @ts-nocheck
import { Box, Typography, CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import styled from "@emotion/styled";
import { Swiper } from "swiper/react";
import { SwiperCard } from "components/shared/SwiperCard";
import { useDispatch } from "react-redux";
import {
    addPlanToUser,
    // @ts-ignore
    getPlanById,
    getUserDetails,
    makePayment,
    // @ts-ignore
} from "lib/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
// @ts-ignore
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setToken } from "store/userSlice";
// @ts-ignore
import ErrorText from "components/shared/ErrorText";
import PlanCard from "components/shared/PlanCard";
import StripeIcon from "components/Icons/StripeIcon";
import PoweredByStripeIcon from "components/Icons/PoweredByStripe";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import Button from 'components/shared/Button';

const PaymentPage = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isLoadingRefresh, setIsLoadingRefresh] = useState(false);
    const [loadingPurchase, setLoadingPurchase] = useState(false);

    // @ts-ignore
    const [submitError, setSubmitError] = useState("");
    const [isPurchased, setIsPurchased] = useState(false);

    // @ts-ignore
    const token = useSelector((state) => state.token);
    const [paymentSuccessful, setPaymentSuccessful] = useState();

    // @ts-ignore
    let [searchParams, setSearchParams] = useSearchParams();
    let id = searchParams?.get("id");
    const dispatch = useDispatch();
    let userId = searchParams?.get("userId");
    let email = searchParams?.get("email");
    let userToken = searchParams?.get("token");

    const { data: plansData, isLoading } = useQuery(["planData", id], () =>
        getPlanById(id)
    );

    const { data: userDetailsData } = useQuery(
        ["userDetails", userId],
        () => getUserDetails({ id: userId, token: token || userToken })
        // { enabled: userId ? true : false }
    );

    const { mutate } = useMutation(addPlanToUser, {
        // @ts-ignore
        onSuccess(d, v, c) {
            toast.success("Purcahse completed successfully", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 4000,
            });
            setIsPurchased(true);
            setSubmitError("");
        },
        onError(error) {
            // setSubmitError(error.response.data.errorMessage);
            // @ts-ignore
            setSubmitError(error.response.data.errorDetails);
        },
    });

    const { mutate: mutatePayment, isLoading: paymentLoading } = useMutation(
        makePayment,
        {
            // @ts-ignore
            onSuccess(d, v, c) {
                // @ts-ignore
                setPaymentSuccessful(true);
                setSubmitError("");
                setLoadingPurchase(true);
                let newData = {
                    userId: userId,
                    planId: id,
                    token: userToken ? userToken : token,
                };
                // mutate(newData);
                fetch(
                    `https://api.serenitytraders.com/serenity-traders/api/user/${userId}/${id}`,
                    {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Authorization: userToken
                                ? `Bearer ${userToken}`
                                : `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        setLoadingPurchase(false);
                        toast.success("Purcahse completed successfully", {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 4000,
                        });
                        setIsPurchased(true);
                        setSubmitError("");
                    });
            },
            onError(error) {
                // setSubmitError(error.response.data.errorMessage);
                // @ts-ignore
                setSubmitError(error.response.data.errorDetails);
            },
        }
    );

    useEffect(() => {
        if (userToken) {
            dispatch(setToken(userToken));
        }
    }, []);

    const CardElementContainer = styled.div`
        height: 40px;
        display: flex;
        align-items: center;
        margin-top: 20px;
        width: 100%;
        justify-content: center;
        padding: 10px;
        & .StripeElement {
            width: 100%;
            border-radius: 20px;
            height: 35px;
            margin-top: 18px;
        }
    `;

    const handlePayment = async () => {
        if (elements === null || stripe === null) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            console.error("Card element not initialized");
            return;
        }

        const stripeToken = await stripe?.createToken(cardElement);
        if (stripeToken?.error) {
            setSubmitError(
                stripeToken?.error?.message ||
                    "Something went wrong , please try again"
            );
            return;
        }

        mutatePayment({
            amount: plansData?.cost,
            stripeToken: stripeToken?.token?.id,
            userEmail: email || userDetailsData?.email,
        });
    };

    if (isLoading || paymentLoading || loadingPurchase)
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
        <>
            {isPurchased ? (
                <div
                    className="flex items-center"
                    style={{
                        height: "calc(100vh - 514px)",
                    }}
                >
                    <span class="font-medium text-[22px] xl:text-2xl text-black mt-6 text-center max-w-[70%] mx-auto ">
                        Thank you for joining serenity traders
                        <br />
                        <br /> We are now setting up your account with our
                        partners, you should receive an email with your
                        credentials shortly.
                        <br />
                        <br /> Please note that it might take up to an 1 hour to
                        finish setting up your account.
                    </span>
                </div>
            ) : (
                <div className="flex flex-col">
                    <h1 className="text-center font-mukta mb-[27px] text-[30px] md:text-[40px] text-project-purple">
                        You're about to buy this plan
                    </h1>

                    <div className="flex flex-col md:flex-row px-[55px] md:px-100px lg:px-[365px] justify-center items-center">
                        <div className="md:mr-5 md:w-1/2 mb-[35px] md:mb-0 max-w-[265px] lg:max-w-[295px]">
                            <PlanCard
                                key={plansData?.id}
                                cardBackgroundColor="ghostWhite"
                                cost={plansData?.cost}
                                costIntervalInDays={
                                    plansData?.costIntervalInDays
                                }
                                maxContracts={plansData?.maxContracts}
                                target={plansData?.target}
                                maxDropdown={plansData?.maxDropdown}
                                dailyLoss={plansData?.dailyLoss}
                                value={plansData?.value}
                                id={plansData?.id}
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col justify-center items-center  max-w-[450px]">
                                <ErrorText message={submitError} />

                                <CardElementContainer>
                                    <CardElement />
                                </CardElementContainer>
                                <div className="flex">
                                    <div className="w-max">
                                        <PoweredByStripeIcon />
                                    </div>
                                    <Button
                                        onClick={handlePayment}
                                        className="mt-1 py-1.5 px-11  text-base"
                                    >
                                        Buy
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PaymentPage;
