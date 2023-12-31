import { render, screen } from "@testing-library/react";
import { PlaceListItem } from "@components/PlaceList/Item";
import { Wrapper } from "@components/__test__/Wrapper";
import { createMatchMedia } from "@components/__test__/media";

const MOCK_PLACE = {
    기관명: "__MOCKED_NAME__",
    주소: {
        area1: "서울특별시",
        area2: "강남구",
        area3: "역삼동",
        경도: "127.0317674",
        위도: "37.4923612",
        distance: 0,
    },
    기관구분: "test",
    홈페이지: "",
};

describe("<PlaceListItem />", () => {
    beforeAll(() => {
        window.matchMedia = createMatchMedia(1920);
    });

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
                    주소: {
                        ...MOCK_PLACE["주소"],
                        distance: 0.101,
                    },
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
                    주소: {
                        ...MOCK_PLACE["주소"],
                        distance: 1,
                    },
                }}
            />,
            { wrapper: Wrapper },
        );

        const distance = screen.getByTestId("distance");
        expect(distance).toHaveTextContent("1km");
    });

    it("should render skeleton when place is not provided", () => {
        const { container } = render(<PlaceListItem />, { wrapper: Wrapper });

        const skeleton = container.querySelector(".MuiSkeleton-root");
        expect(skeleton).toBeInTheDocument();
    });
});
