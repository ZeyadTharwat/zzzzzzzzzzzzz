/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "372px",
            md: "744px",
            lg: "1280px",
            xl: "1440px",
        },
        container: {
            center: true,
        },
        extend: {
            spacing:{
                '34.5px': '34.5px',
                '7px':'7px',
                '110px':'110px',
                '31px':'31px',
                '35px':'35px',
                '30px':'30px',
                '7.5px':'7.5px',
                '18px':'18px',
                '60px':'60px',
                '100px':'100px',
                '21px':'21px',
            },
            borderRadius:{
                '20px':'20px',
            },
            opacity: {
                54: ".54",
            },
            colors: {
                "light-purple": "#C686C4",
                "light-blue": "#799EC7",
                "project-purple": "#586B9D",
                "project-black": "#4D4E50",
                "project-green": "#9EC9A6",
                "project-gray": "#F1F1F5",
                "project-blue": "#83ADDF",
                "project-light-purple": "#C686C4",
                "project-light-gray": "#0E0E10",
                "error-red": "#f02849",
                "mint-green": "#9EC9A6",
            },
            fontFamily: {
                overpass: ["Overpass"],
                mukta: ["Overpass"],
            },

            letterSpacing: {
                0.165: "0.165em",
            },
            fontSize: {
                "32px": "2rem",
                "44px": "2.75rem",
                "22px": "1.375rem",
                "28px": "1.75rem",
                "26px": "1.625rem",
                '40px':'2.5rem',

            },
        },
    },
    plugins: [],
};
