import React from "react";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";
import { Box, Hidden, Skeleton, Stack, Typography } from "@mui/material";

import { DitheredBackground } from "@components/DitheredBackground";
import { Button } from "@components/Button";
import { PlaceList } from "@components/PlaceList";
import { PinIcon } from "@components/PinIcon";
import { CreditDialog } from "@components/CreditDialog";

import { getPlaces } from "@queries/places";

import { getErrorMessage } from "@utils/errors";

export default function Index() {
    const [count] = React.useState(30);
    const [fetchCount, setFetchCount] = React.useState(0);
    const [creditDialogOpen, setCreditDialogOpen] = React.useState(false);
    const { data, isFetching, error } = useQuery({
        queryKey: ["places", fetchCount],
        queryFn: () => getPlaces(count),
        enabled: fetchCount > 0,
    });

    const handleGeolocationSearchClick = async () => {
        setFetchCount(prev => prev + 1);
    };

    const handleCreditClick = React.useCallback(() => {
        setCreditDialogOpen(true);
    }, []);

    const handleCreditClose = React.useCallback(() => {
        setCreditDialogOpen(false);
    }, []);

    const loading = isFetching;
    const buttons = (
        <>
            <Button onClick={handleCreditClick}>누가 만들었나요?</Button>
            <Button disabled={loading} onClick={handleGeolocationSearchClick}>
                내 위치에서 찾아보기
            </Button>
        </>
    );

    return (
        <Box py={8} position="relative">
            <DitheredBackground />
            <Box position="relative" zIndex={1}>
                <Typography variant="h2" textAlign="center" style={{ textShadow: "4px 4px 0 rgba(0, 0, 0, 0.25)" }}>
                    mental.menhera.kr
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="body1" textAlign="center">
                        내 주변 정신건강 시설 정보 찾기.
                    </Typography>
                </Box>
                <Box maxWidth="sm" px={2} mx="auto" mt={4}>
                    <Hidden mdUp>
                        <Stack spacing={1} alignItems="center">
                            {buttons}
                        </Stack>
                    </Hidden>
                    <Hidden mdDown>
                        <Stack direction="row" spacing={1} justifyContent="center">
                            {buttons}
                        </Stack>
                    </Hidden>
                </Box>
            </Box>
            {!error && (
                <Box maxWidth="md" mx="auto" mt={8} px={1}>
                    {loading && (
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <Skeleton width="100%" />
                        </Typography>
                    )}
                    {!loading && data?.address && (
                        <Box display="flex" alignItems="center" mb={1}>
                            <PinIcon />
                            <Typography variant="body1" sx={{ ml: 1 }}>
                                <Typography component="span" color="primary.main">
                                    {`'${data.address}'`}
                                </Typography>
                                &nbsp;주변 정신건강 시설
                            </Typography>
                        </Box>
                    )}
                    {(data || loading) && <PlaceList places={data?.places} count={count} />}
                </Box>
            )}
            {!!error && (
                <Box maxWidth="md" mx="auto" mt={8} px={1}>
                    <Box display="flex" justifyContent="center">
                        <Image src="/assets/pien.webp" alt="" width={256} height={256} />
                    </Box>
                    <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mt: 2 }}>
                        {getErrorMessage(error)}
                    </Typography>
                </Box>
            )}
            <CreditDialog open={creditDialogOpen} onClose={handleCreditClose} />
        </Box>
    );
}
