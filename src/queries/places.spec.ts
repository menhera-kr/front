import { Fetcher } from "@utils/fetcher";
import { getPlaces } from "./places";

describe("getPlaces()", () => {
    let fetchJson: jest.Mock;
    let getCurrentPosition: jest.Mock;

    beforeEach(() => {
        fetchJson = jest.fn();
        getCurrentPosition = jest.fn();
        Object.defineProperty(Fetcher.prototype, "fetchJson", { value: fetchJson });
        Object.defineProperty(navigator, "geolocation", {
            value: { getCurrentPosition },
            configurable: true,
        });
    });

    it("should fetch places data", async () => {
        getCurrentPosition.mockImplementationOnce(success =>
            success({ coords: { latitude: 37.5326, longitude: 127.024612 } }),
        );

        fetchJson.mockResolvedValueOnce({ address: "서울특별시 강남구 역삼동" }).mockResolvedValueOnce([]);

        await getPlaces(10);

        expect(fetchJson).toBeCalledWith("/api/places", {
            method: "GET",
            query: { lat: 37.5326, lng: 127.024612, count: 10 },
        });
    });
});
