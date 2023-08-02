import { APIRouteMap, Fetcher, Route } from "@utils/fetcher";

interface PlaceAPIRoutes extends APIRouteMap {
    "/api/places": Route<{}, never, { lat: number; lng: number; count: number }>;
}

export function getPlaces(lat: number, lng: number, count: number) {
    const fetcher = new Fetcher<PlaceAPIRoutes>("");

    return fetcher.fetchJson("/api/places", {
        method: "GET",
        query: { lat, lng, count },
    });
}
