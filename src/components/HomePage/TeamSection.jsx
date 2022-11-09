import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AvatarFirst from "../../assets/images/avatar-1.png";
import { useQuery } from "@tanstack/react-query";
import { getTeamMembers } from "lib/api";
import MemberCard from "components/shared/MemberCard";
import Logo from "../../assets/images/avatar-1.png";

const TeamSection = () => {
    const { isLoading, error, data } = useQuery(
        ["teamMembers"],
        getTeamMembers
    );

    return (
        <Container
            id="team"
            sx={{
                scrollMargin: 120,
                marginBottom: 15,
            }}
        >
            <Typography
                variant="h1"
                fontFamily="N27"
                textAlign="center"
                paddingBottom={{ xs: "24px", md: "48px" }}
            >
                Team
            </Typography>
            <Grid
                container
                spacing={3}
                sx={{
                    justifyContent: "center",
                }}
            >
                {data?.map((member) => {
                    return (
                        <MemberCard
                            key={member.id}
                            fullname={member.fullName}
                            title={member.title}
                            //   photo={member.photo}
                            photo={Logo}
                        />
                    );
                })}
            </Grid>
        </Container>
    );
};

export default TeamSection;
