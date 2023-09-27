import React from "react";

import { Global } from "@emotion/react";

import { Window } from "@components/Window";
import { TaskBar } from "@components/TaskBar";
import { GlobalStyles, Main, Root } from "@components/Layout.styles";
import { Hidden } from "@mui/material";
import Head from "next/head";

export interface LayoutProps {}

export function Layout({ children }: React.PropsWithChildren<LayoutProps>) {
    return (
        <Root>
            <Head>
                <title>mental.menhera.kr</title>
                <meta name="description" content="내 주변 정신건강 시설 정보 찾기." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#4c21c9" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mental.menhera.kr" />
                <meta property="og:title" content="mental.menhera.kr" />
                <meta property="og:image" content="https://mental.menhera.kr/assets/og.png" />
                <meta property="og:description" content="내 주변 정신건강 시설 정보 찾기." />
                <meta property="og:site_name" content="mental.menhera.kr" />
                <meta property="og:locale" content="ko_KR" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <Global styles={GlobalStyles} />
            <Main>
                <Window title="mental.menhera.kr" maxWidth="lg">
                    {children}
                </Window>
            </Main>
            <Hidden mdDown>
                <TaskBar />
            </Hidden>
        </Root>
    );
}
