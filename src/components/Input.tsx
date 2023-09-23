import React from "react";

import { Control, Root } from "./Input.styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
    return (
        <Root>
            <Control {...props} />
        </Root>
    );
}
