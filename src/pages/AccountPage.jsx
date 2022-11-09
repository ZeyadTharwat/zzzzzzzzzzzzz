// @ts-nocheck
import {
    Box,
    CircularProgress,
    Container,
    FormControl,
    Grid,
    MenuItem,
    Select,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Button from 'components/shared/Button';
import { Swiper } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    modifyUserInfo,
    getAllPlans,
    getUserDetails,
    getPlansForHomeScreen,
    getAllCountries,
    getCityByName,
    getStateByName,
    getCityByStateName,
} from "lib/api";
import { SwiperCard } from "components/shared/SwiperCard";
import { Controller, useForm } from "react-hook-form";
import ErrorText from "components/shared/ErrorText";
import SubscribedPlanCard from "components/shared/SubscribedPlanCard";
import PrevButton from "../assets/images/swiper-prev-button.png";
import NextButton from "../assets/images/swiper-next-button.png";
import { Navigation } from "swiper";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Typography>{children}</Typography>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const AccountPage = () => {
    const [value, setValue] = React.useState(0);

    const userId = useSelector((state) => state.id);
    const token = useSelector((state) => state.token);
    const [submitError, setSubmitError] = useState("");
    const queryClient = useQueryClient();
    const [countryValue, setCountryValue] = useState();
    const [cityValue, setCityValue] = useState();
    const [stateValue, setStateValue] = useState();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    const { data: plansData } = useQuery(["plans"], getPlansForHomeScreen);

    const { data: userDetailsData, isLoading } = useQuery(
        ["userDetails", userId],
        () => getUserDetails({ id: userId, token: token })
    );

    const { data: homeScreenPlansData } = useQuery(
        ["plans"],
        getPlansForHomeScreen
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

    const { mutate, error, isError, isSuccess, data } = useMutation(
        modifyUserInfo,
        {
            onSuccess(d, v, c) {
                queryClient.invalidateQueries(["userDetails"]);
                toast.success("Info Updated", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            },
            onError(error) {
                setSubmitError(error.response.data.errorMessage);
            },
        }
    );

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({});

    const onSubmit = (data) => {
        let newData = {
            ...data,
            id: userId,
            userRole: userDetailsData?.userRole,
            registered: userDetailsData?.registered,
            modify: userDetailsData?.modify,
            city: data?.city || userDetailsData?.city,
            country: data?.country || userDetailsData?.country,
            email: data?.email || userDetailsData?.email,
            firstName: data?.firstName || userDetailsData?.firstName,
            lastName: data?.lastName || userDetailsData?.lastName,
            phoneNumber: data?.phoneNumber || userDetailsData?.phoneNumber,
            postalCode: data?.postalCode || userDetailsData?.postalCode,
            state: data?.state || userDetailsData?.state,
            streetOne: data?.streetOne || userDetailsData?.streetOne,
            streetTwo: data?.streetTwo || userDetailsData?.streetTwo,
        };

        mutate(newData);
    };

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token]);

    useEffect(() => {
        if (!isLoading) {
            reset({
                firstName: userDetailsData?.firstName,
                lastName: userDetailsData?.lastName,
                email: userDetailsData?.email,
                country: userDetailsData?.country,
                city: userDetailsData?.city,
                streetOne: userDetailsData?.streetOne,
                streetTwo: userDetailsData?.streetTwo,
                state: userDetailsData?.state,
                postalCode: userDetailsData?.postalCode,
                phoneNumber: userDetailsData?.phoneNumber,
            });
            setCountryValue(userDetailsData?.country);
            setCityValue(userDetailsData?.city);
            setStateValue(userDetailsData?.state);
        }
    }, [isLoading]);

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
        <div className="w-full px-4 md:px-10 lg:px-20 xl:px-100px lg:container">
            <Box sx={{ borderBottom: 1, borderColor: "darkGrey" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="Your Plans" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex justify-center items-center  "
                >
                    <div className="flex flex-col w-full pt-3">
                        <div className="flex ">
                            <div className="flex flex-col mr-5 w-1/2 ">
                                <Controller
                                    name="firstName"
                                    control={control}
                                    rules={{
                                        required: "First name is required",
                                    }}
                                    defaultValue={userDetailsData?.firstName}
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
                                            defaultValue={
                                                userDetailsData?.firstName
                                            }
                                            className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray mb-3 "
                                            value={value}
                                            onChange={onChange}
                                            placeholder="First Name"
                                        />
                                    )}
                                />{" "}
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
                                    defaultValue={userDetailsData?.lastName}
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
                                            defaultValue={
                                                userDetailsData?.lastName
                                            }
                                            className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray mb-3"
                                            value={value}
                                            onChange={onChange}
                                            placeholder="Last Name"
                                        />
                                    )}
                                />{" "}
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
                            defaultValue={userDetailsData?.email}
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
                                    defaultValue={userDetailsData?.email}
                                    className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray mb-3 mr-5"
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
                            name="streetOne"
                            control={control}
                            defaultValue={userDetailsData?.streetOne}
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
                                    defaultValue={userDetailsData?.streetOne}
                                    className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray  mr-5"
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Street"
                                />
                            )}
                        />{" "}
                        <ErrorText
                            message={
                                errors?.streetOne?.message ||
                                submitError?.streetOne
                            }
                        />
                        <div className="flex my-3">
                            <div className="flex flex-col mr-5 w-1/2">
                                <div className="relative">
                                    <span
                                        className={`absolute z-50 top-1/2 transform -translate-y-1/2 left-21px text-gray-400 ${
                                            countryValue ? "hidden" : ""
                                        }`}
                                    >
                                        Country
                                    </span>
                                    <Controller
                                        name="country"
                                        control={control}
                                        rules={{
                                            required: "Country is required",
                                        }}
                                        defaultValue={userDetailsData?.country}
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
                                                sx={{
                                                    backgroundColor:
                                                        "ghostWhite",
                                                    boxShadow:
                                                        "0px 4px 4px rgba(0, 0, 0, 0.1)",
                                                    height: "35px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "20px",
                                                    flexGrow: "1",
                                                    color: "darkGrey",
                                                    marginRight: "20px",

                                                    width: {
                                                        xs: "100%",
                                                        md: "auto",
                                                    },
                                                    "& .MuiOutlinedInput-root":
                                                        {
                                                            border: 0,
                                                            boxShadow: "unset",
                                                            width: "100%",
                                                        },
                                                    "& .MuiInputBase-colorPrimary":
                                                        {
                                                            border: 0,
                                                            boxShadow: "unset",
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
                                                            value={country.name}
                                                            key={country.id}
                                                        >
                                                            {country.name}
                                                        </MenuItem>
                                                    )
                                                )}
                                            </Select>
                                        )}
                                    />
                                </div>
                                <ErrorText
                                    message={
                                        errors?.country?.message ||
                                        submitError?.country
                                    }
                                />
                            </div>
                            <div className="flex flex-col  w-1/2 ">
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
                                        defaultValue={userDetailsData?.state}
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
                                                    countryValue === "Canada"
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
                                                    justifyContent: "center",
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
                                                            boxShadow: "unset",
                                                            width: "100%",
                                                        },
                                                    "& .MuiInputBase-colorPrimary":
                                                        {
                                                            border: 0,
                                                            boxShadow: "unset",
                                                        },

                                                    "& .MuiOutlinedInput-notchedOutline":
                                                        {
                                                            border: 0,
                                                        },
                                                }}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
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
                                    />{" "}
                                </div>
                                <ErrorText
                                    message={
                                        errors?.state?.message ||
                                        submitError?.state
                                    }
                                />
                            </div>
                        </div>
                        <Controller
                            name="city"
                            control={control}
                            rules={{
                                required: "City is required",
                            }}
                            defaultValue={userDetailsData?.city}
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
                                    className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray  mr-5"
                                    value={value}
                                    onChange={onChange}
                                    placeholder="City"
                                />
                            )}
                        />
                        <ErrorText
                            message={errors?.city?.message || submitError?.city}
                        />
                        <Controller
                            name="postalCode"
                            control={control}
                            rules={{
                                required: "Postal code is required",
                            }}
                            defaultValue={userDetailsData?.postalCode}
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
                                    defaultValue={userDetailsData?.postalCode}
                                    className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray mb-3 mr-5"
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
                            defaultValue={userDetailsData?.phoneNumber}
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
                                    defaultValue={userDetailsData?.phoneNumber}
                                    className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray mb-3 mr-5"
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Phone Number"
                                />
                            )}
                        />{" "}
                        <ErrorText
                            message={
                                errors?.phoneNumber?.message ||
                                submitError?.phoneNumber
                            }
                        />
                        <Button
                            type="submit"
                            className="py-2.5 w-full  text-lg md:text-xl"
                        >
                            Confirm
                        </Button>
                    </div>
                </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div>
                    <Button className="flex py-7px mt-8 ml-auto px-34.5px  cursor-pointer">
                        <a
                            href="https://www.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Journalytix
                        </a>
                    </Button>
                    {userDetailsData?.userPlans?.length > 0 ? (
                        <Typography
                            variant="h1"
                            fontFamily="N27"
                            textAlign="center"
                            paddingTop={{
                                lg: "50px",
                                xs: "30px",
                            }}
                            paddingBottom={{ xs: "24px" }}
                        >
                            Subscribed Plan
                        </Typography>
                    ) : (
                        <Typography
                            variant="h1"
                            fontFamily="N27"
                            textAlign="center"
                            paddingTop={{
                                lg: "85px",
                                xs: "60px",
                            }}
                            paddingBottom={{ xs: "24px" }}
                        >
                            You're not subscribed to any plans
                        </Typography>
                    )}

                    <div className="">
                        <Swiper
                            direction="horizontal"
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.5,
                                },
                                768: {
                                    slidesPerView: 3.5,
                                },
                                992: {
                                    slidesPerView: 4,
                                },
                            }}
                            style={{
                                paddingBottom: "20px",
                            }}
                        >
                            <div className="grid md:grid-cols-2 gap-4">
                                {userDetailsData?.userPlans?.map((plan) => {
                                    return (
                                        <SubscribedPlanCard
                                            key={plan.id}
                                            cardBackgroundColor="ghostWhite"
                                            cost={plan.cost}
                                            costIntervalInDays={
                                                plan.costIntervalInDays
                                            }
                                            maxContracts={plan.maxContracts}
                                            target={plan.target}
                                            maxDropdown={plan.maxDropdown}
                                            dailyLoss={plan.dailyLoss}
                                            value={plan.value}
                                            id={plan.id}
                                            expireDate={plan.expirationDate}
                                        />
                                    );
                                })}
                            </div>
                        </Swiper>
                    </div>
                </div>
                <div>
                    <Typography
                        variant="h1"
                        fontFamily="N27"
                        textAlign="center"
                        paddingTop={{
                            lg: "85px",
                            xs: "60px",
                        }}
                        paddingBottom={{ xs: "24px", md: "48px" }}
                    >
                        Our Plans
                    </Typography>

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
                            {/* <SwiperSlide zoom className="">
            <h1>1</h1>
          </SwiperSlide> */}
                            {homeScreenPlansData?.map((plan) => {
                                return (
                                    <SwiperCard
                                        id={plan.id}
                                        cardBackgroundColor="ghostWhite"
                                        cost={plan.cost}
                                        costIntervalInDays={
                                            plan.costIntervalInDays
                                        }
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
            </TabPanel>
        </div>
    );
};

export default AccountPage;
