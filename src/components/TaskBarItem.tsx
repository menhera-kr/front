import React from "react";

import { Button, ButtonProps } from "@components/Button";
import { Root } from "@components/TaskBarItem.styles";

export interface TaskBarIconProps extends Omit<ButtonProps, "startIcon" | "minWidth" | "maxWidth"> {
    children: string;
}

export function TaskBarItem(props: TaskBarIconProps) {
    return <Button startIcon={<Root />} minWidth={200} maxWidth={200} {...props} />;
}
