import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AvatarFirst from "../../assets/images/avatar-1.png";

const MemberCard = ({ fullname, title, photo }) => {
  return (
    <Grid item xs={12} md={4} lg={3}>
      <Box>
        <Box
          bgcolor="primary.main"
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingY={{ xs: "35px" }}
          borderRadius="20px"
        >
          <Box>
            <Box
              component="img"
              sx={{
                width: { xs: "57px", md: "92px" },
                height: { xs: "57px", md: "92px" },
              }}
              alt="avatar1"
              src={photo ? photo : AvatarFirst}
            />
          </Box>
        </Box>
        <Typography
          variant="subtitle1"
          fontFamily="N27"
          paddingTop={{ xs: "13px" }}
          paddingBottom={{ xs: "8px" }}
          textAlign="center"
        >
          {fullname}
        </Typography>
        <Typography
          variant="subtitle1"
          fontFamily="N27"
          textAlign="center"
          color="darkGrey"
        >
          {title}
        </Typography>
      </Box>
    </Grid>
  );
};

export default MemberCard;
