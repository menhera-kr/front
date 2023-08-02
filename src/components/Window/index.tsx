import React from "react";
import useMeasure from "react-use-measure";
import { mergeRefs } from "react-merge-refs";
import Image from "next/image";

import { Box, Typography } from "@mui/material";
import { useDraggable } from "@dnd-kit/core";

import { CloseButton, Content, FloatRoot, Icon, InnerContent, Root, TitleBar } from "@components/Window/index.styles";
import { useWindow } from "@components/Window/context";

export interface WindowProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    title: string;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "static" | "float";
    x?: number;
    y?: number;
    z?: number;
    onClose?(): void;
    hidden?: boolean;
    onMeasure?(width: number, height: number): void;
}

export function Window({
    title,
    children,
    maxWidth,
    variant = "float",
    id,
    onClose,
    onMeasure,
    x = 0,
    y = 0,
    z = 0,
    ...rest
}: React.PropsWithChildren<WindowProps>) {
    const RootComponent = variant === "float" ? FloatRoot : Root;
    const currentId = id ?? "fixed";
    const [measureRef, { width, height }] = useMeasure();
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: currentId,
    });

    const lastSize = React.useRef({ width, height });

    const { setFocus, focusedId } = useWindow();

    const posX = x + (transform?.x ?? 0);
    const posY = y + (transform?.y ?? 0);

    React.useEffect(() => {
        if (!onMeasure) {
            return;
        }

        const oldSize = lastSize.current;
        if (oldSize.width === width && oldSize.height === height) {
            return;
        }

        onMeasure(width, height);
        lastSize.current = { width, height };
    }, [width, height, onMeasure]);

    const handleClose = React.useCallback(
        (e: React.MouseEvent) => {
            if (onClose) {
                onClose();
            }

            e.preventDefault();
            e.stopPropagation();
        },
        [onClose],
    );

    const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const moveWindowFocus = React.useCallback(() => {
        if (currentId === focusedId) {
            return;
        }

        setFocus(currentId);
    }, [currentId, setFocus, focusedId]);

    return (
        <RootComponent
            ref={mergeRefs([setNodeRef, measureRef])}
            data-testid="window"
            maxWidth={maxWidth}
            onFocus={moveWindowFocus}
            onMouseDown={moveWindowFocus}
            isFocused={currentId === focusedId}
            zIndex={z}
            {...rest}
            style={{ top: posY, left: posX, ...rest.style }}
        >
            <TitleBar {...listeners} {...attributes}>
                <Icon />
                <Typography variant="body1" color="primary.main" lineHeight={1} sx={{ ml: 1 }}>
                    {title}
                </Typography>
                <Box flex="1 1 auto" />
                {onClose && (
                    <CloseButton onClick={handleClose} data-testid="close" onMouseDown={handleMouseDown}>
                        <Image src="/assets/window-buttons.png" alt="닫기" width={20} height={20} />
                    </CloseButton>
                )}
            </TitleBar>
            <Content>
                {variant === "static" && <InnerContent>{children}</InnerContent>}
                {variant === "float" && children}
            </Content>
        </RootComponent>
    );
}
