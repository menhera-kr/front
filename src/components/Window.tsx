import React from "react";

import Image from "next/image";

import { Content, Icon, InnerContent, Root, TitleBar } from "@components/Window.styles";
import { Box, Hidden, Typography } from "@mui/material";

export interface WindowProps {
    title: string;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
    contentAware?: boolean;
}

export function Window({ title, children, maxWidth, contentAware = true }: React.PropsWithChildren<WindowProps>) {
    const titleBar = (
        <TitleBar>
            <Icon />
            <Typography variant="body1" color="primary.main" lineHeight={1} sx={{ ml: 1 }}>
                {title}
            </Typography>
            <Box flex="1 1 auto" />
            <Image src="/assets/window-buttons.png" alt="" width={68} height={20} />
        </TitleBar>
    );

    return (
        <>
            <Hidden mdDown>
                <Root maxWidth={maxWidth}>
                    {titleBar}
                    <Content>
                        {contentAware && <InnerContent>{children}</InnerContent>}
                        {!contentAware && children}
                    </Content>
                </Root>
            </Hidden>
            <Hidden mdUp>
                <>
                    {titleBar}
                    <Box bgcolor="#fff" pt={4}>
                        {children}
                    </Box>
                </>
            </Hidden>
        </>
    );
}
