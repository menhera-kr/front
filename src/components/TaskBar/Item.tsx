import React from "react";

import { TaskBarButton, ButtonProps } from "@components/TaskBar/Button";
import { Root } from "@components/TaskBar/Item.styles";

export interface TaskBarIconProps extends Omit<ButtonProps, "startIcon" | "minWidth" | "maxWidth"> {
    children: string;
}

export function TaskBarItem(props: TaskBarIconProps) {
    return <TaskBarButton startIcon={<Root />} minWidth={200} maxWidth={200} {...props} />;
}
