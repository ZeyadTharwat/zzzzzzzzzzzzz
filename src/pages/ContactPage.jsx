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
import { Controller, useForm } from "react-hook-form";
import ContactImage from "../assets/images/contact-us.png";
import { contactUs } from "lib/api";
import ErrorText from "components/shared/ErrorText";
import Button from 'components/shared/Button';

const ContactPage = () => {
    const [submitError, setSubmitError] = useState("");
    const [submitSuccess, setSubmitSuccess] = useState("");
    const { mutate } = useMutation(contactUs, {
        onSuccess(d, v, c) {
            setSubmitError("");
            setSubmitSuccess(d);
            reset();
        },
        onError(error) {
            setSubmitError(error.response.data.errorDetails);
        },
    });

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            subject: "",
            email: "",
            body: "",
        },
    });

    const onSubmit = (data) => {
        mutate(data);
    };

    if (true)
        return (
            <div className="container flex flex-col px-4 md:px-[186px] lg:px-[175px] xl:px-[238px] text-center py-20 md:py-[180px]">
                <h1 className="font-mukta font-normal text-[30px] text-project-purple pb-20 md:pb-[120px] xl:pb-[74px]">
                    Contact Us
                </h1>
                <div className="flex flex-col-reverse lg:flex-row justify-between">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex justify-center items-center lg:w-1/2 lg:mr-14"
                    >
                        <div className="flex flex-col w-full ">
                            <p className="mb-4 font-mukta text-mint-green">
                                {submitSuccess}
                            </p>
                            <div className="flex mb-3 w-full">
                                <div className="flex flex-col mr-5 w-1/2">
                                    <ErrorText
                                        message={
                                            errors?.firstName?.message ||
                                            submitError?.firstName
                                        }
                                    />
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
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <ErrorText
                                        message={
                                            errors?.lastName?.message ||
                                            submitError?.lastName
                                        }
                                    />
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
                                </div>
                            </div>
                            <ErrorText
                                message={
                                    errors?.email?.message || submitError?.email
                                }
                            />
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
                                        className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray mb-3 mr-5"
                                        value={value}
                                        onChange={onChange}
                                        placeholder="Email Address"
                                    />
                                )}
                            />
                            <ErrorText
                                message={
                                    errors?.subject?.message ||
                                    submitError?.subject
                                }
                            />
                            <Controller
                                name="subject"
                                control={control}
                                rules={{
                                    required: "Subject is required",
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
                                        className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray mb-3 mr-5"
                                        value={value}
                                        onChange={onChange}
                                        placeholder="Subject"
                                    />
                                )}
                            />
                            <ErrorText
                                message={
                                    errors?.body?.message || submitError?.body
                                }
                            />
                            <Controller
                                name="body"
                                control={control}
                                rules={{
                                    required: "Body is required",
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
                                    // <input
                                    //   className=" rounded-20px py-2.5 pl-21px w-full h-max bg-project-gray mb-3 mr-5"
                                    //   value={value}
                                    //   onChange={onChange}
                                    //   placeholder="Body"
                                    // />
                                    <textarea
                                        rows="5"
                                        className="bg-project-gray rounded-20px py-2.5 pl-21px w-full h-max mb-6 mr-5"
                                        placeholder="Body"
                                        value={value}
                                        onChange={onChange}
                                    ></textarea>
                                )}
                            />

                            <Button
                                type="submit"
                                className="py-2.5 w-full flex justify-center items-center text-lg md:text-xl "
                            >
                                Send
                            </Button>
                        </div>
                    </form>
                    <div className="flex justify-center items-center">
                        <img
                            src={ContactImage}
                            className="mb-[54px] max-w-[232px] md:max-w-[350px] lg:max-w-[500px] "
                        />
                    </div>
                </div>
            </div>
        );

};

export default ContactPage;
