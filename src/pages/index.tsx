import { useState } from "react";

import { Box, Stack, Typography } from "@mui/material";

import { DitheredBackground } from "@components/DitheredBackground";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { getCurrentLocation } from "@utils/geolocation";
import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "../queries/places";

enum FormState {
    Idle,
    Coords,
    Loading,
}

export default function Index() {
    const [formState, setFormState] = useState<FormState>(FormState.Idle);
    const [coords, setCoords] = useState<[number, number] | null>(null); // [latitude, longitude];
    const { data, isLoading, error } = useQuery({
        queryKey: ["places", coords?.[0], coords?.[1]],
        queryFn: () => getPlaces(coords?.[0] ?? 0, coords?.[1] ?? 0, 15),
        enabled: !!coords,
    });

    const handleGeolocationSearchClick = async () => {
        setFormState(FormState.Coords);
        const { latitude, longitude } = await getCurrentLocation();

        setCoords([latitude, longitude]);
        setFormState(FormState.Idle);
    };

    return (
        <Box py={8} position="relative">
            <DitheredBackground />
            <Box position="relative" zIndex={1}>
                <Typography variant="h2" textAlign="center" style={{ textShadow: "4px 4px 0 rgba(0, 0, 0, 0.25)" }}>
                    menhera.kr
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="body1" textAlign="center">
                        내 주변 정신건강의학과 정보 찾기.
                    </Typography>
                    <Typography
                        component="a"
                        href="#"
                        color="primary.main"
                        variant="body1"
                        textAlign="center"
                        sx={{ display: "block" }}
                    >
                        누가 만들었나요?
                    </Typography>
                </Box>
                <Box maxWidth="sm" px={2} mx="auto" mt={8}>
                    <Input spellCheck="false" placeholder="주소 입력..." />
                </Box>
                <Box maxWidth="sm" px={2} mx="auto" mt={1}>
                    <Stack direction="row" spacing={1} justifyContent="center">
                        <Button disabled={formState !== FormState.Idle}>주소로 검색</Button>
                        <Button disabled={formState !== FormState.Idle} onClick={handleGeolocationSearchClick}>
                            내 위치로 검색
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}
