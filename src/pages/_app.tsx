import { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material";

import { Layout } from "@components/Layout";

import { theme } from "@styles/theme";

export default function App({ pageProps, Component }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
