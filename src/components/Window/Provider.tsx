import React from "react";
import { nanoid } from "nanoid";

import {
    DndContext,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

import { Window } from "@components/Window";
import { WindowContext, WindowContextValues } from "@components/Window/context";

export interface WindowItem<TProps> {
    id: string;
    title: string;
    component: React.ComponentType<TProps>;
    props?: TProps;
    x: number;
    y: number;
}

export function WindowProvider({ children }: React.PropsWithChildren) {
    const mouseSensor = useSensor(MouseSensor, {});
    const touchSensor = useSensor(TouchSensor, {});
    const keyboardSensor = useSensor(KeyboardSensor, {});
    const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
    const id = React.useId();

    const [windows, setWindows] = React.useState<WindowItem<any>[]>([]);
    const openWindow = React.useCallback<WindowContextValues["openWindow"]>((component, title, ...rest) => {
        setWindows(prev => [...prev, { id: nanoid(), component, title, props: rest[0], x: 0, y: 0 }]);
    }, []);

    const handleDragEnd = React.useCallback((event: DragEndEvent) => {
        setWindows(prev => {
            return prev.map(window => {
                if (window.id === event.active.id) {
                    return {
                        ...window,
                        x: window.x + event.delta.x,
                        y: window.y + event.delta.y,
                    };
                }

                return window;
            });
        });
    }, []);

    const handleClose = React.useCallback((id: string) => {
        setWindows(prev => prev.filter(window => window.id !== id));
    }, []);

    return (
        <WindowContext.Provider value={{ openWindow }}>
            <DndContext id={id} sensors={sensors} onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
                {children}
                {windows.map(window => {
                    const { component: Component, x, y } = window;

                    return (
                        <Window
                            key={window.id}
                            title={window.title}
                            id={window.id}
                            x={x}
                            y={y}
                            onClose={() => handleClose(window.id)}
                        >
                            <Component {...window.props} />
                        </Window>
                    );
                })}
            </DndContext>
        </WindowContext.Provider>
    );
}
