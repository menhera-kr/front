import { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material";

import { Layout } from "@components/Layout";
import { WindowProvider } from "@components/Window/Provider";

import { theme } from "@styles/theme";

export default function App({ pageProps, Component }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <WindowProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </WindowProvider>
        </ThemeProvider>
    );
}
