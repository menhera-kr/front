import React from "react";
import Image from "next/image";

import { Box, Typography } from "@mui/material";

import { Content, Icon, InnerContent, Root, TitleBar } from "@components/Window.styles";

export interface WindowProps {
    title: string;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function Window({ title, children, maxWidth }: React.PropsWithChildren<WindowProps>) {
    return (
        <Root data-testid="window" maxWidth={maxWidth}>
            <TitleBar>
                <Icon />
                <Typography variant="body1" color="primary.main" lineHeight={1} sx={{ ml: 1 }}>
                    {title}
                </Typography>
                <Box flex="1 1 auto" />
                <Image src="/assets/window-buttons.png" alt="" width={68} height={20} />
            </TitleBar>
            <Content>
                <InnerContent>{children}</InnerContent>
            </Content>
        </Root>
    );
}
