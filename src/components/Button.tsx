import React from "react";

import { Typography } from "@mui/material";

import { Root } from "@components/Button.styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

export function Button({ children, ...rest }: ButtonProps) {
    return (
        <Root {...rest}>
            <Typography component="span" variant="body1" color="text.primary">
                {children}
            </Typography>
        </Root>
    );
}
