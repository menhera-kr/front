import React from "react";

import { Box, Typography } from "@mui/material";

import { Root } from "@components/TaskBarButton.styles";

export type ButtonVariant = "centered" | "default";

export interface ButtonProps {
    children: string;
    startIcon?: React.ReactNode;
    variant?: ButtonVariant;
    minWidth?: number;
    maxWidth?: number;
    active?: boolean;
}

export function TaskBarButton({ children, startIcon, variant = "default", minWidth, maxWidth, active }: ButtonProps) {
    return (
        <Box component={Root} minWidth={minWidth} maxWidth={maxWidth} aria-pressed={active}>
            {startIcon && (
                <Box ml={variant === "default" ? 0.75 : 0} mr={1}>
                    {startIcon}
                </Box>
            )}
            <Typography
                minWidth={0}
                variant="body1"
                lineHeight={1}
                fontSize="1.1rem"
                textAlign={variant === "centered" ? "center" : "left"}
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                sx={{ width: "100%" }}
            >
                {children}
            </Typography>
        </Box>
    );
}
