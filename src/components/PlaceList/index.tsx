import React from "react";
import { Stack } from "@mui/material";

import { Place } from "@utils/types";
import { PlaceListItem } from "@components/PlaceList/Item";

interface ListProps {
    places: Place[];
}

export function PlaceList({ places }: ListProps) {
    return (
        <Stack spacing={2} data-testid="place-list">
            {places.map(place => (
                <PlaceListItem key={place["기관명"]} place={place} />
            ))}
        </Stack>
    );
}
