import { Fetcher } from "@utils/fetcher";
import { getPlaces } from "./places";

describe("getPlaces()", () => {
    let fetchJson: jest.Mock;

    beforeEach(() => {
        fetchJson = jest.fn();
        Object.defineProperty(Fetcher.prototype, "fetchJson", { value: fetchJson });
    });

    it("should fetch places data", () => {
        getPlaces(37.5326, 127.024612, 10);

        expect(fetchJson).toBeCalledWith("/api/places", {
            method: "GET",
            query: { lat: 37.5326, lng: 127.024612, count: 10 },
        });
    });
});
