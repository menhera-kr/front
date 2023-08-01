import React from "react";
import Image from "next/image";

import { Box } from "@mui/material";

import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { Root } from "@components/TaskBar.styles";
import { TaskBarItem } from "@components/TaskBarItem";

export interface TaskBarProps {}

export function TaskBar({}: TaskBarProps) {
    return (
        <Root>
            <Button
                variant="centered"
                minWidth={138}
                startIcon={<Image alt="Windows 98 Logo" src="/assets/win98.png" width={32} height={24} />}
            >
                시작
            </Button>
            <Box mx={0.75}>
                <Divider />
            </Box>
            <TaskBarItem active>Index</TaskBarItem>
        </Root>
    );
}
