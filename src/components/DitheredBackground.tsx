import React from "react";
import { Box } from "@mui/material";

export interface DitheredBackgroundProps {}

export function DitheredBackground({}: DitheredBackgroundProps) {
    return (
        <Box
            data-testid="dithered-background"
            height={256}
            position="absolute"
            top={0}
            left={0}
            right={0}
            style={{ backgroundImage: "url(/assets/dithered-bg.png)", opacity: 0.5 }}
        />
    );
}
