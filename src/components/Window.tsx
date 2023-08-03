import React from "react";

import { Content, Icon, InnerContent, Root, TitleBar } from "@components/Window.styles";
import { Box, Hidden, Typography } from "@mui/material";
import Image from "next/image";

export interface WindowProps {
    title: string;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

export function Window({ title, children, maxWidth }: React.PropsWithChildren<WindowProps>) {
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
                        <InnerContent>{children}</InnerContent>
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
