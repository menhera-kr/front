import React from "react";
import { Box, Typography } from "@mui/material";
import { Content, Root } from "@components/PlaceList/Item.styles";
import { Place } from "@utils/types";

export interface PlaceListItemProps {
    place: Place;
}

export function PlaceListItem({ place }: PlaceListItemProps) {
    let distance = Math.round(place.distance);
    let distanceUnit = "m";
    if (distance >= 1000) {
        distance /= 1000;
        distanceUnit = "km";
        distance = Math.round(distance * 10) / 10;
    }

    return (
        <Root data-testid="place-list-item">
            <Content>
                <Box display="flex" alignItems="center">
                    <Typography variant="body1" fontSize="1.25rem">
                        {place["기관명"]}
                    </Typography>
                    <Box flex="1 1 auto" />
                    <Typography variant="body1" color="text.secondary" data-testid="distance">
                        {distance}
                        {distanceUnit}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Typography variant="body2" color="text.secondary" fontSize="1rem">
                        {[place["주소"]["area1"], place["주소"]["area2"], place["주소"]["area3"]].join(" ")}
                    </Typography>
                </Box>
            </Content>
        </Root>
    );
}
