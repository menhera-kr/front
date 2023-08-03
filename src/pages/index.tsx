import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { Box, Stack, Typography } from "@mui/material";

import { DitheredBackground } from "@components/DitheredBackground";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { PlaceList } from "@components/PlaceList";

import { getPlaces } from "@queries/places";

import { getCurrentLocation } from "@utils/geolocation";

export default function Index() {
    const [count] = useState(30);
    const [isGettingLocation, setIsGettingLocation] = useState(false);
    const [coords, setCoords] = useState<[number, number] | null>(null); // [latitude, longitude];
    const [fetchCount, setFetchCount] = useState(0);
    const { data, isFetching, error } = useQuery({
        queryKey: ["places", coords?.[0], coords?.[1], fetchCount],
        queryFn: () => getPlaces(coords?.[0] ?? 0, coords?.[1] ?? 0, count),
        enabled: !!coords,
    });

    const handleGeolocationSearchClick = async () => {
        setIsGettingLocation(true);
        const { latitude, longitude } = await getCurrentLocation();

        setCoords([latitude, longitude]);
        setIsGettingLocation(false);

        setFetchCount(prev => prev + 1);
    };

    const loading = isGettingLocation || isFetching;

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
                </Box>
                <Box maxWidth="sm" px={2} mx="auto" mt={6}>
                    <Input spellCheck="false" placeholder="주소 입력..." />
                </Box>
                <Box maxWidth="sm" px={2} mx="auto" mt={1}>
                    <Stack direction="row" spacing={1} justifyContent="center">
                        <Button disabled={loading}>주소로 검색</Button>
                        <Button disabled={loading} onClick={handleGeolocationSearchClick}>
                            내 위치로 검색
                        </Button>
                    </Stack>
                </Box>
            </Box>
            <Box maxWidth="md" mx="auto" mt={8} px={1}>
                {(data || loading) && <PlaceList places={data} count={count} />}
            </Box>
        </Box>
    );
}
