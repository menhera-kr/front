import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@styles/theme";

export function Wrapper({ children }: React.PropsWithChildren) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
