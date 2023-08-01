import React from "react";

import { Root } from "./Divider.styles";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Divider(props: DividerProps) {
    return <Root {...props} />;
}
