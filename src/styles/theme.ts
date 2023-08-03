import { createTheme } from "@mui/material";
import localFont from "next/font/local";

const font = localFont({
    src: "./font.woff2",
});

export const theme = createTheme({
    typography: {
        fontFamily: [font.style.fontFamily, "sans-serif"].join(","),
    },
    palette: {
        primary: {
            main: "#4c21c9",
        },
        text: {
            primary: "#4c21c9",
        },
    },
    components: {
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                },
            },
        },
    },
});
