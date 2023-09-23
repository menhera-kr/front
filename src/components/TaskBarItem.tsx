import React from "react";

import { TaskBarButton, ButtonProps } from "@components/TaskBarButton";
import { Root } from "@components/TaskBarItem.styles";

export interface TaskBarIconProps extends Omit<ButtonProps, "startIcon" | "minWidth" | "maxWidth"> {
    children: string;
}

export function TaskBarItem(props: TaskBarIconProps) {
    return <TaskBarButton startIcon={<Root />} minWidth={200} maxWidth={200} {...props} />;
}
