import React from "react";

import { Root } from "@components/TaskBar/Divider.styles";

export interface TaskBarDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TaskBarDivider(props: TaskBarDividerProps) {
    return <Root {...props} />;
}
