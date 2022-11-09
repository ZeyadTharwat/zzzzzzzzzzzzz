import { createTheme, experimental_sx as sx } from "@mui/material";

import N27 from "../assets/fonts/N27-Regular.woff2";
import OverPass from "../assets/fonts/Overpass-Regular.woff2";

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 992,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: "#FBF2EC",
      mainGradient:
        "linear-gradient(62.08deg, rgba(240, 223, 164, 0.67) 12.58%, rgba(255, 255, 255, 0) 88.41%);",
    },
    secondary: {
      main: "#C6C3F2",
      mainGradient:
        "linear-gradient(61.77deg, rgba(198, 195, 242, 0.67) 4.83%, rgba(255, 255, 255, 0) 90.88%)",
    },
    mintGreen: "#9EC9A6",
    lightPink: "#F5E6E9",
    northStar: "#F0DFA4",
    white: "#FFFFFF",
    ghostWhite: "#F1F1F5",
    black: "#000000",
    darkGrey: "#4D4E50",
    errorRed: "#f02849",
  },
  MuiCssBaseline: {
    styleOverrides: `
           @font-face {
             font-family: 'N27';
             font-weight: normal;
             font-style: normal;
             font-display: swap;
             src: url(${N27}) format('woff2'),
             url(${N27}) format('woff');
        }
         @font-face {
             font-family: 'Overpass';
             font-weight: normal;
             font-style: normal;
             font-display: swap;
             src: url(${OverPass}) format('woff2'),
             url(${OverPass}) format('woff');
        }
      `,
  },
});

export const theme = createTheme({
  ...defaultTheme,
  typography: {
    fontSize: 16,

    h1: {
      fontSize: 28,
      letterSpacing: 0,
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: 24,
      },
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: 20,
      },
    },
    cardTitle: {
      fontSize: 20,
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: 18,
      },
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: 16,
      },
    },
    subtitle1: {
      fontSize: 18,
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: 16,
      },
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: 14,
      },
      letterSpacing: 0,
    },
    button: {
      fontSize: 16,
      textTransform: "none",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: 14,
      },
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: 14,
      },
      letterSpacing: 0,
    },
    body1: {
      fontSize: 16,
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: 12,
      },
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
      letterSpacing: 0,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: defaultTheme.typography.button,
          borderRadius: 20,
          height: 35,
          width: 105,
          textTransform: "capitalize",
          fontWeight: 400,
          lineHeight: "normal",
          fontFamily: "Overpass",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: defaultTheme.palette.white,
            boxShadow: "none",
          },
        },
      },

      variants: [
        {
          props: {
            variant: "contained",
            color: "northStar",
          },
          style: {
            backgroundColor: defaultTheme.palette.northStar,
            border: `2px solid ${defaultTheme.palette.northStar}`,
            color: defaultTheme.palette.black,
            width: 99,
          },
        },
        {
          props: {
            variant: "contained",
            color: "northStar",
            size: "large",
          },
          style: {
            backgroundColor: defaultTheme.palette.northStar,
            border: `2px solid ${defaultTheme.palette.northStar}`,
            color: defaultTheme.palette.black,
            width: 175,
          },
        },
        {
          props: {
            variant: "contained",
            color: "secondary",
            size: "large",
          },
          style: {
            backgroundColor: defaultTheme.palette.secondary.main,
            border: `2px solid ${defaultTheme.palette.secondary.main}`,
            color: defaultTheme.palette.white,
            "&:hover": {
              color: defaultTheme.palette.black,
            },
            width: 175,
          },
        },
        {
          props: {
            variant: "contained",
            color: "mintGreen",
            size: "large",
          },
          style: {
            backgroundColor: defaultTheme.palette.mintGreen,
            border: `2px solid ${defaultTheme.palette.mintGreen}`,
            color: defaultTheme.palette.white,
            "&:hover": {
              color: defaultTheme.palette.black,
            },
            width: 175,
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          [defaultTheme.breakpoints.up("xs")]: {
            maxWidth: 1190,
          },

          paddingLeft: 35,
          paddingRight: 35,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 300,
          textTransform: "capitalize",
          fontFamily: "Overpass",
          textDecoration: "none",
          fontSize: defaultTheme.typography.button,
          color: defaultTheme.palette.black,
          opacity: 0.54,
          paddingRight: 16,
          "&:last-child": {
            paddingRight: 0,
          },
          "&:hover": {
            opacity: 1,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 20,
          padding: "16px 18px",
          paddingBottom: 0,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          padding: 0,
          textAlign: "center",
        },
        title: sx({
          fontSize: defaultTheme.typography.subtitle1,
          color: defaultTheme.palette.darkGrey,
          fontFamily: "Overpass",
        }),

        subheader: sx({
          fontSize: defaultTheme.typography.subtitle1,
          color: defaultTheme.palette.black,
          fontFamily: "Overpass",
          textTransform: "capitalize",
          fontWeight: "500",
        }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          padding: 0,
          paddingLeft: 12,
        },
      },
    },
  },
});
