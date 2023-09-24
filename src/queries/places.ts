import { APIRouteMap, Fetcher, Route } from "@utils/fetcher";
import { Place } from "@utils/types";
import { getCurrentLocation } from "@utils/geolocation";

interface PlaceAPIRoutes extends APIRouteMap {
    "/api/places": Route<
        {},
        { items: Place[]; address: { area1: string; area2: string; area3: string } },
        { lat: number; lng: number; count: number }
    >;
}

export async function getPlaces(count: number) {
    const localFetcher = new Fetcher<PlaceAPIRoutes>("");
    const { latitude, longitude } = await getCurrentLocation();

    const { items: places, address } = await localFetcher.fetchJson("/api/places", {
        method: "GET",
        query: { lat: latitude, lng: longitude, count },
    });

    const addressResult = [address.area1, address.area2, address.area3].filter(Boolean).join(" ");

    return { places, address: addressResult };
}
