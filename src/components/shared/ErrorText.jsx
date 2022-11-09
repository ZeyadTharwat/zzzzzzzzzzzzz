import { Typography } from "@mui/material";
import React from "react";

const ErrorText = ({ message }) => {
    return (
        <Typography
            sx={{
                marginTop: "6px",
                color: "errorRed",
                display: message ? "block" : "hidden",
                fontFamily: "Overpass",
                textAlign: "start",
                paddingLeft: "4px",
            }}
        >
            {message}
        </Typography>
    );
};

export default ErrorText;
