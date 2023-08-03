import React from "react";
import { Stack } from "@mui/material";

import { Place } from "@utils/types";
import { PlaceListItem } from "@components/PlaceList/Item";

interface ListProps {
    places?: Place[];
    count: number;
}

export function PlaceList({ places, count }: ListProps) {
    const items: Array<Place | null> = places ?? new Array(count).fill(null);

    return (
        <Stack spacing={2} data-testid="place-list">
            {items.map((place, index) => {
                if (!place) {
                    return <PlaceListItem key={index} />;
                }

                return <PlaceListItem key={place["기관명"]} place={place} />;
            })}
        </Stack>
    );
}
