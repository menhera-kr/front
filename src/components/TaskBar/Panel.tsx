import React from "react";

import { Typography } from "@mui/material";

import { Root } from "@components/TaskBar/Panel.styles";

export interface TaskBarPanelProps {
    children: string;
}

export function TaskBarPanel({ children }: TaskBarPanelProps) {
    return (
        <Root>
            <Typography color="inherit">{children}</Typography>
        </Root>
    );
}
