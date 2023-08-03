import { APIRouteMap, Fetcher, Route } from "@utils/fetcher";
import { Place } from "@utils/types";

interface PlaceAPIRoutes extends APIRouteMap {
    "/api/places": Route<{}, Place[], { lat: number; lng: number; count: number }>;
}

export function getPlaces(lat: number, lng: number, count: number) {
    const fetcher = new Fetcher<PlaceAPIRoutes>("");

    return fetcher.fetchJson("/api/places", {
        method: "GET",
        query: { lat, lng, count },
    });
}
