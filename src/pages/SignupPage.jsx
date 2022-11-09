// @ts-nocheck
import { Container, MenuItem, Select, Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
    signUp,
    getPlanById,
    getAllCountries,
    getCityByName,
    getStateByName,
    getCityByStateName,
} from "lib/api";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Swiper } from "swiper/react";
import { SwiperCard } from "components/shared/SwiperCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoggedIn } from "store/userSlice";
import SignupImage from "../assets/images/sign-up.png";
// import ErrorText from "components/shared/ErrorText";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";
import CardPaymentComponent from "components/shared/CardPaymentComponent";
import country_list from "lib/country_list";
import { ErrorMessage } from "@hookform/error-message";
import ErrorText from "components/shared/ErrorText";
import PlanCard from "components/shared/PlanCard";
import PoweredByStripeIcon from "components/Icons/PoweredByStripe";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import Button from 'components/shared/Button';

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

const SignupPage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let id = searchParams?.get("id");
    const navigate = useNavigate();
    const [countryValue, setCountryValue] = useState();
    const [cityValue, setCityValue] = useState();
    const [stateValue, setStateValue] = useState();

    const { data: plansData, isLoading } = useQuery(["planData", id], () =>
        getPlanById(id)
    );

    const { data: countriesData, isLoading: isLoadingCountries } = useQuery(
        ["countries"],
        getAllCountries
    );

    const { data: cityData, isLoading: isLoadingCity } = useQuery(
        ["city", countryValue],
        () => getCityByName(countryValue),
        {
            enabled:
                countryValue !== "Canada" && countryValue !== "United States"
                    ? true
                    : false,
        }
    );

    const { data: stateData, isLoading: isLoadingState } = useQuery(
        ["state", countryValue],
        () => getStateByName(countryValue),
        {
            enabled:
                countryValue === "Canada" || countryValue === "United States"
                    ? true
                    : false,
        }
    );

    const { data: cityDataByState } = useQuery(
        ["cityByState", countryValue],
        () => getCityByStateName(stateValue),
        {
            enabled:
                (countryValue === "Canada" ||
                    countryValue === "United States") &&
                stateValue
                    ? true
                    : false,
        }
    );

    useEffect(() => {
        if (!id) {
            navigate("/");
        }
    }, []);

    const [submitError, setSubmitError] = useState("");
    const [registerSuccess, setRegisterSuccess] = useState();

    const { mutate, isSuccess } = useMutation(signUp, {
        onSuccess(d, v, c) {
            setSubmitError(d?.errorDetails || "");
            if (!d?.errorDetails) {
                setRegisterSuccess(true);
            }
        },
        onError(error) {
            setSubmitError(error.response.data.errorDetails);
        },
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            streetOne: "",
            state: "",
            postalCode: "",
            phoneNumber: "",
            city: "",
        },
    });

    const onSubmit = async (data) => {
        let newData = {
            ...data,
            planId: id,
            redirectUrl: `${window.location.origin}/verify-email`,
            country: countryValue,
        };

        mutate(newData);
    };

    if (registerSuccess) {
        return (
            <div className="container flex flex-col px-4 md:px-[186px] lg:px-[175px] xl:px-[238px] text-center py-20 md:py-[180px]">
                <h1 className="font-mukta font-normal text-[30px] text-project-purple pb-20 md:pb-[120px] xl:pb-[74px]">
                    Registration was successful
                </h1>
                <p className="font-mukta text-base md:text-xl">
                    Thanks you for joining , Please check the email sent to
                    verify your email.
                </p>
            </div>
        );
    }
    if (isLoading || isLoadingCountries)
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
        <div className="container flex flex-col px-4 md:px-[186px] lg:px-[175px] xl:px-[238px] py-20 md:py-[180px]">
            <h1 className="font-mukta font-normal text-[30px] text-project-purple pb-20 md:pb-[120px] xl:pb-[74px] mx-auto ">
                Sign Up
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col-reverse lg:flex-row justify-between">
                    <div className="flex justify-center items-center lg:w-1/2 lg:mr-14">
                        <div className="flex flex-col w-full gap-y-3">
                            {/* <ErrorText message={submitError} /> */}
                            <div className="flex">
                                <div className="flex flex-col mr-5 w-1/2">
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        rules={{
                                            required: "First name is required",
                                        }}
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
                                                className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray "
                                                value={value}
                                                onChange={onChange}
                                                placeholder="First Name"
                                            />
                                        )}
                                    />
                                    <ErrorText
                                        message={
                                            errors?.firstName?.message ||
                                            submitError?.firstName
                                        }
                                    />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <Controller
                                        name="lastName"
                                        control={control}
                                        rules={{
                                            required: "Last name is required",
                                        }}
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
                                                className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray "
                                                value={value}
                                                onChange={onChange}
                                                placeholder="Last Name"
                                            />
                                        )}
                                    />
                                    <ErrorText
                                        message={
                                            errors?.lastName?.message ||
                                            submitError?.lastName
                                        }
                                    />
                                </div>
                            </div>

                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: "Email is required",
                                }}
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
                                        className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray  mr-5"
                                        value={value}
                                        onChange={onChange}
                                        placeholder="Email Address"
                                    />
                                )}
                            />
                            <ErrorText
                                message={
                                    errors?.email?.message || submitError?.email
                                }
                            />

                            <Controller
                                name="password"
                                control={control}
                                rules={{
                                    required: "Password is required",
                                }}
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
                                        type="password"
                                        className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray  mr-5"
                                        value={value}
                                        onChange={onChange}
                                        placeholder="Password"
                                    />
                                )}
                            />
                            <ErrorText
                                message={
                                    errors?.password?.message ||
                                    submitError?.password
                                }
                            />

                            <Controller
                                name="streetOne"
                                control={control}
                                rules={{
                                    required: "Street is required",
                                }}
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
                                        className="rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray mr-5 "
                                        value={value}
                                        onChange={onChange}
                                        placeholder="Street"
                                    />
                                )}
                            />
                            <ErrorText
                                message={
                                    errors?.streetOne?.message ||
                                    submitError?.streetOne
                                }
                            />
                            <div className="flex ">
                                <div className="flex flex-col w-1/2">
                                    <Controller
                                        name="country"
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
                                            <div className="relative mr-5">
                                                <span
                                                    className={`absolute z-50 top-1/2 transform -translate-y-1/2 left-21px text-gray-400 ${
                                                        countryValue
                                                            ? "hidden"
                                                            : ""
                                                    }`}
                                                >
                                                    Country
                                                </span>
                                                <Select
                                                    sx={{
                                                        backgroundColor:
                                                            "ghostWhite",
                                                        boxShadow:
                                                            "0px 4px 4px rgba(0, 0, 0, 0.1)",
                                                        height: "35px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                        borderRadius: "20px",
                                                        flexGrow: "1",
                                                        color: "darkGrey",

                                                        width: {
                                                            xs: "100%",
                                                            md: "auto",
                                                        },
                                                        "& .MuiOutlinedInput-root":
                                                            {
                                                                border: 0,
                                                                boxShadow:
                                                                    "unset",
                                                                width: "100%",
                                                            },
                                                        "& .MuiInputBase-colorPrimary":
                                                            {
                                                                border: 0,
                                                                boxShadow:
                                                                    "unset",
                                                            },

                                                        "& .MuiOutlinedInput-notchedOutline":
                                                            {
                                                                border: 0,
                                                            },
                                                    }}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Country"
                                                    value={value}
                                                    onChange={(e) => {
                                                        onChange(e);
                                                        setCountryValue(
                                                            e.target.value
                                                        );
                                                    }}
                                                >
                                                    {countriesData?.map(
                                                        (country) => (
                                                            <MenuItem
                                                                value={
                                                                    country.name
                                                                }
                                                                key={country.id}
                                                            >
                                                                {country.name}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </Select>
                                            </div>
                                        )}
                                    />
                                    <ErrorText
                                        message={
                                            errors?.country?.message ||
                                            submitError?.country
                                        }
                                    />
                                </div>

                                <div className="flex flex-col w-1/2">
                                    <div className="relative">
                                        <span
                                            className={`absolute z-50 top-1/2 transform -translate-y-1/2 left-21px text-gray-400 ${
                                                stateValue ? "hidden" : ""
                                            }`}
                                        >
                                            State
                                        </span>
                                        <Controller
                                            name="state"
                                            control={control}
                                            rules={{
                                                required:
                                                    countryValue ===
                                                        "United States" ||
                                                    countryValue === "Canada"
                                                        ? "State is required"
                                                        : false,
                                            }}
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
                                                <Select
                                                    disabled={
                                                        countryValue ===
                                                            "United States" ||
                                                        countryValue ===
                                                            "Canada"
                                                            ? false
                                                            : true
                                                    }
                                                    sx={{
                                                        backgroundColor:
                                                            "ghostWhite",
                                                        boxShadow:
                                                            "0px 4px 4px rgba(0, 0, 0, 0.1)",
                                                        height: "35px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                        borderRadius: "20px",
                                                        flexGrow: "1",
                                                        color: "darkGrey",
                                                        marginRight: "20px",

                                                        width: {
                                                            xs: "100%",
                                                            md: "100%",
                                                        },
                                                        "& .MuiOutlinedInput-root":
                                                            {
                                                                border: 0,
                                                                boxShadow:
                                                                    "unset",
                                                                width: "100%",
                                                            },
                                                        "& .MuiInputBase-colorPrimary":
                                                            {
                                                                border: 0,
                                                                boxShadow:
                                                                    "unset",
                                                            },

                                                        "& .MuiOutlinedInput-notchedOutline":
                                                            {
                                                                border: 0,
                                                            },
                                                    }}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Country"
                                                    value={value}
                                                    onChange={(e) => {
                                                        onChange(e);
                                                        setStateValue(
                                                            e.target.value
                                                        );
                                                    }}
                                                >
                                                    {stateData?.map((state) => (
                                                        <MenuItem
                                                            value={state.name}
                                                            key={state.id}
                                                        >
                                                            {state.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            )}
                                        />
                                    </div>
                                </div>
                                <ErrorText
                                    message={
                                        errors?.state?.message ||
                                        submitError?.state
                                    }
                                />
                            </div>
                            <Controller
                                name="city"
                                control={control}
                                rules={{
                                    required: "City is required",
                                }}
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
                                        className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray  mr-5"
                                        value={value}
                                        onChange={onChange}
                                        placeholder="City"
                                    />
                                )}
                            />
                            <ErrorText
                                message={
                                    errors?.city?.message || submitError?.city
                                }
                            />
                            <Controller
                                name="postalCode"
                                control={control}
                                rules={{
                                    required: "Postal code is required",
                                }}
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
                                        className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray  mr-5"
                                        value={value}
                                        onChange={onChange}
                                        placeholder="Postal Code"
                                    />
                                )}
                            />
                            <ErrorText
                                message={
                                    errors?.postalCode?.message ||
                                    submitError?.postalCode
                                }
                            />

                            <Controller
                                name="phoneNumber"
                                control={control}
                                rules={{
                                    required: "Phone Number is required",
                                }}
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
                                        className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray  mr-5"
                                        value={value}
                                        onChange={onChange}
                                        placeholder="Phone Number"
                                    />
                                )}
                            />
                            <ErrorText
                                message={
                                    errors?.phoneNumber?.message ||
                                    submitError?.phoneNumber
                                }
                            />
                            <Button
                                type="submit"
                                className="py-2.5 w-full  text-lg md:text-xl "
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center lg:w-1/2">
                        <div className="flex flex-col w-full lg:ml-[63px] xl:ml-[123px] justify-center items-center mb-4 lg:mb-0">
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
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignupPage;
