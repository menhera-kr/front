import { Box, Typography } from "@mui/material";

import { Window } from "@components/Window";

export default function Index() {
    return (
        <Window title="mehera.kr">
            <Box py={8}>
                <Typography variant="h2" textAlign="center">
                    menhera.kr
                </Typography>
                <Typography variant="body1" textAlign="center">
                    내 주변 정신건강의학과 정보 찾기.
                </Typography>
            </Box>
        </Window>
    );
}
