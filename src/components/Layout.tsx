import React from "react";

import { Global } from "@emotion/react";

import { Window } from "@components/Window";
import { TaskBar } from "@components/TaskBar";
import { GlobalStyles, Main, Root } from "@components/Layout.styles";
import { Hidden } from "@mui/material";

export interface LayoutProps {}

export function Layout({ children }: React.PropsWithChildren<LayoutProps>) {
    return (
        <Root>
            <Global styles={GlobalStyles} />
            <Main>
                <Window title="menhera.kr" maxWidth="lg">
                    {children}
                </Window>
            </Main>
            <Hidden mdDown>
                <TaskBar />
            </Hidden>
        </Root>
    );
}
