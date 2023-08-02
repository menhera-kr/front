import React from "react";
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
}

export function Window({
    title,
    children,
    maxWidth,
    variant = "float",
    id,
    onClose,
    x = 0,
    y = 0,
    z = 0,
    ...rest
}: React.PropsWithChildren<WindowProps>) {
    const RootComponent = variant === "float" ? FloatRoot : Root;
    const currentId = id ?? "fixed";
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: currentId,
    });

    const { setFocus, focusedId } = useWindow();

    const posX = x + (transform?.x ?? 0);
    const posY = y + (transform?.y ?? 0);

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
            ref={setNodeRef}
            data-testid="window"
            maxWidth={maxWidth}
            style={{ top: posY, left: posX }}
            onFocus={moveWindowFocus}
            onMouseDown={moveWindowFocus}
            isFocused={currentId === focusedId}
            zIndex={z}
            {...rest}
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
