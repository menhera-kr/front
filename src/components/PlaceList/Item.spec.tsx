import { render, screen } from "@testing-library/react";
import { PlaceListItem } from "@components/PlaceList/Item";
import { Wrapper } from "@components/__test__/Wrapper";

const MOCK_PLACE = {
    기관명: "__MOCKED_NAME__",
    주소: {
        area1: "서울특별시",
        area2: "강남구",
        area3: "역삼동",
        경도: "127.0317674",
        위도: "37.4923612",
    },
    distance: 0,
    기관구분: "test",
    홈페이지: "",
};

describe("<PlaceListItem />", () => {
    it("should render PlaceListItem component correctly", () => {
        render(<PlaceListItem place={MOCK_PLACE} />, { wrapper: Wrapper });

        const root = screen.getByTestId("place-list-item");
        expect(root).toBeInTheDocument();
    });

    it("should format distance under a kilometer correctly", () => {
        render(
            <PlaceListItem
                place={{
                    ...MOCK_PLACE,
                    distance: 100.52,
                }}
            />,
            { wrapper: Wrapper },
        );

        const distance = screen.getByTestId("distance");
        expect(distance).toHaveTextContent("101m");
    });

    it("should format distance over a kilometer correctly", () => {
        render(
            <PlaceListItem
                place={{
                    ...MOCK_PLACE,
                    distance: 1000.52,
                }}
            />,
            { wrapper: Wrapper },
        );

        const distance = screen.getByTestId("distance");
        expect(distance).toHaveTextContent("1km");
    });
});
