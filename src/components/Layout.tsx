import React from "react";

import { Global } from "@emotion/react";

import { GlobalStyles, Root } from "@components/Layout.styles";

export interface LayoutProps {}

export function Layout({ children }: React.PropsWithChildren<LayoutProps>) {
    return (
        <Root>
            <Global styles={GlobalStyles} />
            {children}
        </Root>
    );
}
