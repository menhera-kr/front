import React from "react";

import { Root } from "./TaskBarPanel.styles";
import { Typography } from "@mui/material";

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
