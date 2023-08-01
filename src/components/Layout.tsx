import React from "react";

import { Global } from "@emotion/react";

import { TaskBar } from "@components/TaskBar";
import { GlobalStyles, Main, Root } from "@components/Layout.styles";

export interface LayoutProps {}

export function Layout({ children }: React.PropsWithChildren<LayoutProps>) {
    return (
        <Root>
            <Global styles={GlobalStyles} />
            <Main>{children}</Main>
            <TaskBar />
        </Root>
    );
}
