import { AppProps } from "next/app";

import { Layout } from "@components/Layout";

export default function App({ pageProps, Component }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
