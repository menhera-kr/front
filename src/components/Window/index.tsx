import React from "react";
import Image from "next/image";

import { Box, Typography } from "@mui/material";
import { useDraggable } from "@dnd-kit/core";

import { CloseButton, Content, FloatRoot, Icon, InnerContent, Root, TitleBar } from "@components/Window/index.styles";

export interface WindowProps {
    id?: string;
    title: string;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "static" | "float";
    x?: number;
    y?: number;
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
}: React.PropsWithChildren<WindowProps>) {
    const RootComponent = variant === "float" ? FloatRoot : Root;
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id ?? "fixed",
    });

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

    return (
        <RootComponent ref={setNodeRef} data-testid="window" maxWidth={maxWidth} style={{ top: posY, left: posX }}>
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
