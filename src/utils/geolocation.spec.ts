import { getCurrentLocation } from "@utils/geolocation";

class GeolocationError extends Error {
    code: number;

    constructor(code: number) {
        super();
        this.code = code;
    }
}

describe("getCurrentLocation()", () => {
    let getCurrentPosition: jest.Mock;

    beforeEach(() => {
        getCurrentPosition = jest.fn();
        Object.defineProperty(navigator, "geolocation", {
            value: { getCurrentPosition },
            configurable: true,
        });
    });

    it("should throw error if geolocation is not supported", () => {
        Object.defineProperty(navigator, "geolocation", { value: null, configurable: true });

        expect(getCurrentLocation()).rejects.toThrowError("현재 브라우저에서 위치 정보 취득을 지원하지 않습니다.");
    });

    it("should return current geolocation data", async () => {
        const position = { coords: { latitude: 37.5326, longitude: 127.024612 } };
        getCurrentPosition.mockImplementationOnce(success => success(position));

        const result = await getCurrentLocation();
        expect(result).toEqual(position.coords);
    });

    it("should fallback to non-accurate geolocation data if accurate geolocation data is not available", async () => {
        const position = { coords: { latitude: 37.5326, longitude: 127.024612 } };
        getCurrentPosition.mockImplementation((success, error, options) => {
            if (options?.enableHighAccuracy) {
                error(new GeolocationError(2));
            } else {
                success(position);
            }
        });

        const result = await getCurrentLocation(true);
        expect(result).toEqual(position.coords);
    });

    it("should throw error if timed out", async () => {
        getCurrentPosition.mockImplementationOnce((success, error) => {
            error(new GeolocationError(3));
        });

        await expect(getCurrentLocation()).rejects.toThrowError("위치 정보를 가져오는데 시간이 너무 오래 걸렸습니다.");
    });

    it("should throw error if permission denied", async () => {
        getCurrentPosition.mockImplementationOnce((success, error) => {
            error(new GeolocationError(1));
        });

        await expect(getCurrentLocation()).rejects.toThrowError(
            "위치 정보 취득 권한이 없습니다. 권한 설정을 확인해주세요.",
        );
    });

    it("should throw error if position is unavailable", async () => {
        getCurrentPosition.mockImplementationOnce((success, error) => {
            error(new GeolocationError(2));
        });

        await expect(getCurrentLocation()).rejects.toThrowError("위치 정보를 가져오는데 실패했습니다.");
    });

    it("should throw error if unknown error occurred", async () => {
        getCurrentPosition
            .mockImplementationOnce((success, error) => {
                error(new GeolocationError(0));
            })
            .mockImplementationOnce((success, error) => {
                error({});
            });

        await expect(getCurrentLocation()).rejects.toThrowError("알 수 없는 오류가 발생했습니다.");
        await expect(getCurrentLocation()).rejects.toThrowError("알 수 없는 오류가 발생했습니다.");
    });
});
