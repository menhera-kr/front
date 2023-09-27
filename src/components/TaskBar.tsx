import React from "react";
import Image from "next/image";

import { Box } from "@mui/material";

import { TaskBarButton } from "@components/TaskBarButton";
import { Divider } from "@components/Divider";
import { TaskBarItem } from "@components/TaskBarItem";
import { TaskBarClock } from "@components/TaskBarClock";
import { Root } from "@components/TaskBar.styles";

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
                <Divider />
            </Box>
            <TaskBarItem active>mental.menhera.kr</TaskBarItem>
            <Box flex="1 1 auto" />
            <TaskBarClock />
        </Root>
    );
}
