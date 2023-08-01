import React from "react";

import { Button } from "@components/Button";
import { Root } from "@components/TaskBarItem.styles";

export interface TaskBarIconProps {
    children: string;
    active?: boolean;
}

export function TaskBarItem({ children, active }: TaskBarIconProps) {
    return (
        <Button startIcon={<Root />} minWidth={200} maxWidth={200} active={active}>
            {children}
        </Button>
    );
}
