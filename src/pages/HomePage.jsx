import { Box, CircularProgress, Container, Typography } from "@mui/material";
import CareerSection from "components/HomePage/CareerSection";

import DescriptionSection from "components/HomePage/DescriptionSection";
import HeroSection from "components/HomePage/HeroSection";
import OffersSection from "components/HomePage/OffersSection";
import PlansSection from "components/HomePage/PlansSection";
import StepsSection from "components/HomePage/StepsSection";
import TeamSection from "components/HomePage/TeamSection";
import TradingSection from "components/HomePage/TradingSection";
import VisionSection from "components/HomePage/VisionSection";
import PartnersSection from "components/HomePage/PartnersSection";
import React from "react";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from "@tanstack/react-query";
import { getSections } from "lib/api";
import NinjaTraders from "components/HomePage/NinjaTraders";

const HomePage = () => {
    const { isLoading, error, data } = useQuery(["sections"], getSections);
    if (isLoading) {
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
    }
    return (
        <>
            {!isLoading && (
                <>
                    <HeroSection data={data} isLoading={isLoading} />
                    <DescriptionSection />
                    <StepsSection />

                    <OffersSection />
                    <PlansSection />

                    <VisionSection />
                    <CareerSection />
                    <TradingSection />

                    <PartnersSection />
                    <NinjaTraders />
                </>
            )}
        </>
    );
};

export default HomePage;
