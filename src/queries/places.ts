import { APIRouteMap, Fetcher, Route } from "@utils/fetcher";
import { Place } from "@utils/types";
import { getCurrentLocation } from "@utils/geolocation";

interface PlaceAPIRoutes extends APIRouteMap {
    "/api/places": Route<{}, Place[], { lat: number; lng: number; count: number }>;
    "/api/geolocation": Route<{}, { address: string }, { lat: number; lng: number }>;
}

export async function getPlaces(count: number) {
    const fetcher = new Fetcher<PlaceAPIRoutes>("");
    const { latitude, longitude } = await getCurrentLocation();

    const places = await fetcher.fetchJson("/api/places", {
        method: "GET",
        query: { lat: latitude, lng: longitude, count },
    });

    const { address } = await fetcher.fetchJson("/api/geolocation", {
        method: "GET",
        query: { lat: latitude, lng: longitude },
    });

    return { places, address };
}
