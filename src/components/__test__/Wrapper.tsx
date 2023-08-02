import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@styles/theme";
import { WindowProvider } from "@components/Window/Provider";

export function Wrapper({ children }: React.PropsWithChildren) {
    return (
        <ThemeProvider theme={theme}>
            <WindowProvider>{children}</WindowProvider>
        </ThemeProvider>
    );
}
