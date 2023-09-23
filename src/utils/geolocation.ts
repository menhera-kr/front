export async function getCurrentLocation(
    accurate: boolean = false,
    timeout: number = 5000,
): Promise<GeolocationCoordinates> {
    if (!("geolocation" in navigator) || !navigator.geolocation) {
        throw new Error("현재 브라우저에서 위치 정보 취득을 지원하지 않습니다.");
    }

    try {
        const data = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                timeout: 5000,
                enableHighAccuracy: accurate,
            });
        });

        return data.coords;
    } catch (e) {
        if (accurate) {
            return getCurrentLocation(false, timeout);
        }

        if (e instanceof Object && "code" in e) {
            switch (e.code) {
                case 3: // e.TIMEOUT:
                    throw new Error("위치 정보를 가져오는데 시간이 너무 오래 걸렸습니다.");

                case 1: // e.PERMISSION_DENIED:
                    throw new Error("위치 정보 취득 권한이 없습니다. 권한 설정을 확인해주세요.");

                case 2: // e.POSITION_UNAVAILABLE:
                    throw new Error("위치 정보를 가져오는데 실패했습니다.");

                default:
                    throw new Error("알 수 없는 오류가 발생했습니다.");
            }
        } else {
            throw new Error("알 수 없는 오류가 발생했습니다.");
        }
    }
}
