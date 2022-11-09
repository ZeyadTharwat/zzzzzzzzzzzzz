import { Box, Container, Typography } from "@mui/material";
import React from "react";

const CareerSection = () => {
    return (
        <div
            id="careers"
            className=" flex justify-center z-[1] relative items-center bg-gradient-to-r from-light-purple to-light-blue font-mukta scroll-my-28 
            before:transition-all before:ease-in before:duration-500 
            before:absolute
            before:content-[''] 
            before:top-0 before:bottom-0 before:left-0 before:right-0
            before:z-[-1] before:opacity-0
            before:bg-gradient-to-l
            hover:before:opacity-100
"
        >
            <div className=" px-[35px] container py-5 md:py-10 text-center text-white ">
                <h1 className="text-2xl md:text-[26px] xl:text-[28px] pb-3 md:pb-6">
                    Career opportunities
                </h1>
                <p className="max-w-[726px] mx-auto">
                    Funded Serenity traders access to our trading rooms in Dubai
                    and Athens in most professional working environment and
                    psychological support from our in house psychologist, also
                    extra bonus for the best traders of the floor Pictures +
                    Description <br /> <br /> Well being and money management
                    support : <br /> <br /> Serenity Traders provides
                    psychological support from our in house psychologist
                </p>
            </div>
        </div>
    );
};

export default CareerSection;
