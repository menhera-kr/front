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
    isMeasured?: boolean;
}

export function WindowProvider({ children }: React.PropsWithChildren) {
    const [focusedId, setFocusedId] = React.useState<string | null>("fixed");
    const mouseSensor = useSensor(MouseSensor, {});
    const touchSensor = useSensor(TouchSensor, {});
    const keyboardSensor = useSensor(KeyboardSensor, {});
    const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
    const id = React.useId();
    const previousWindowCount = React.useRef(0);

    const [windows, setWindows] = React.useState<WindowItem<any>[]>([]);
    const openWindow = React.useCallback<WindowContextValues["openWindow"]>((component, title, ...rest) => {
        const id = nanoid();
        setWindows(prev => [...prev, { id, component, title, props: rest[0], x: 0, y: 0 }]);
        setFocusedId(id);
    }, []);

    const setFocusedWindow = React.useCallback((id: string) => {
        setWindows(prev => {
            // move focused window to the end of the array
            const index = prev.findIndex(window => window.id === id);
            if (index === -1) {
                return prev;
            }

            const window = prev[index];
            const newWindows = [...prev];
            newWindows.splice(index, 1);

            return [...newWindows, window];
        });

        setFocusedId(id);
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
        setFocusedId(prev => (prev === id ? null : prev));
    }, []);

    const handleMeasure = React.useCallback((id: string, width: number, height: number) => {
        setWindows(prev => {
            return prev.map(w => {
                if (w.id === id) {
                    return {
                        ...w,
                        x: window.innerWidth / 2 - width / 2,
                        y: window.innerHeight / 2 - height / 2,
                        isMeasured: true,
                    };
                }

                return w;
            });
        });
    }, []);

    const contextValue = React.useMemo(
        () => ({ focusedId, setFocus: setFocusedWindow, openWindow }),
        [focusedId, openWindow, setFocusedWindow],
    );

    React.useEffect(() => {
        if (focusedId === null && previousWindowCount.current !== windows.length) {
            if (windows.length > 0) {
                setFocusedId(windows[windows.length - 1].id);
            } else {
                setFocusedId("fixed");
            }
        }

        previousWindowCount.current = windows.length;
    }, [focusedId, windows]);

    return (
        <WindowContext.Provider value={contextValue}>
            <DndContext id={id} sensors={sensors} onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
                {children}
                {windows.map((window, index) => {
                    const { component: Component, x, y } = window;

                    return (
                        <Window
                            key={window.id}
                            title={window.title}
                            id={window.id}
                            x={x}
                            y={y}
                            z={index}
                            onClose={() => handleClose(window.id)}
                            onMeasure={(width, height) => handleMeasure(window.id, width, height)}
                            style={{ visibility: window.isMeasured ? undefined : "hidden" }}
                        >
                            <Component {...window.props} />
                        </Window>
                    );
                })}
            </DndContext>
        </WindowContext.Provider>
    );
}
