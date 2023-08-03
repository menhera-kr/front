import React from "react";
import { Box, Hidden, Skeleton, Typography } from "@mui/material";

import { Content, Root } from "@components/PlaceList/Item.styles";

import { Place } from "@utils/types";

export interface PlaceListItemProps {
    place?: Place;
}

export function PlaceListItem({ place }: PlaceListItemProps) {
    let distanceText: React.ReactNode;
    let nameText: React.ReactNode;
    let addressText: React.ReactNode;
    let typeText: React.ReactNode;

    if (place) {
        let distance = Math.round(place.distance);
        let distanceUnit = "m";
        if (distance >= 1000) {
            distance /= 1000;
            distanceUnit = "km";
            distance = Math.round(distance * 10) / 10;
        }

        distanceText = `${distance}${distanceUnit}`;
        nameText = place["기관명"];
        addressText = [place["주소"]["area1"], place["주소"]["area2"], place["주소"]["area3"]].join(" ");
        typeText = place["기관구분"];
    } else {
        distanceText = <Skeleton width={40} />;
        nameText = <Skeleton width={300} />;
        addressText = <Skeleton width={200} />;
        typeText = <Skeleton width={100} />;
    }

    return (
        <Root data-testid="place-list-item" aria-disabled={!place}>
            <Content>
                <Box display="flex" alignItems="flex-start">
                    <Typography variant="body1" fontSize="1.25rem">
                        {nameText}
                    </Typography>
                    <Hidden mdDown>
                        <Box flex="1 1 auto" />
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            data-testid="distance"
                            sx={{ width: "auto !important" }}
                        >
                            {distanceText}
                        </Typography>
                    </Hidden>
                </Box>
                <Box>
                    <Typography variant="body2" color="text.secondary" fontSize="1rem">
                        {addressText}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontSize="1rem" sx={{ mt: 2 }}>
                        {typeText}
                    </Typography>
                    <Hidden lgUp>
                        <Typography variant="body1" color="text.secondary" data-testid="distance">
                            {distanceText}
                        </Typography>
                    </Hidden>
                </Box>
            </Content>
        </Root>
    );
}
