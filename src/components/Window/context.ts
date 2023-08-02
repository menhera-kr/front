import React from "react";

type RequiredFieldsOnly<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};

export type OpenWindowArgs<TProps> = keyof RequiredFieldsOnly<TProps> extends never ? [] : [props: TProps];
export interface WindowContextValues {
    openWindow<TProps>(component: React.ComponentType<TProps>, title: string, ...rest: OpenWindowArgs<TProps>): void;
    setFocus(id: string): void;
    focusedId: string | null;
}

export const WindowContext = React.createContext<WindowContextValues | null>(null);

export function useWindow() {
    const context = React.useContext(WindowContext);
    if (!context) {
        throw new Error("useWindow must be used within a <WindowProvider />");
    }

    return context;
}
