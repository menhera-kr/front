import React from "react";
import Image from "next/image";

import { Box } from "@mui/material";

import { TaskBarButton } from "@components/TaskBar/Button";
import { TaskBarItem } from "@components/TaskBar/Item";
import { TaskBarClock } from "@components/TaskBar/Clock";
import { TaskBarDivider } from "@components/TaskBar/Divider";
import { Root } from "@components/TaskBar/index.styles";

export interface TaskBarProps {}

export function TaskBar({}: TaskBarProps) {
    return (
        <Root data-testid="taskbar">
            <TaskBarButton
                variant="centered"
                minWidth={138}
                startIcon={<Image alt="Windows 98 Logo" src="/assets/win98.png" width={32} height={24} />}
            >
                시작
            </TaskBarButton>
            <Box mx={0.75}>
                <TaskBarDivider />
            </Box>
            <TaskBarItem active>Sophia Yamero</TaskBarItem>
            <Box flex="1 1 auto" />
            <TaskBarClock />
        </Root>
    );
}
