import React from "react";
import { render, screen } from "@testing-library/react";

import { PlaceList } from "@components/PlaceList";
import { Wrapper } from "@components/__test__/Wrapper";

describe("<PlaceList />", () => {
    it("should render PlaceList component correctly", () => {
        render(<PlaceList count={0} places={[]} />);

        const root = screen.getByTestId("place-list");
        expect(root).toBeInTheDocument();
    });

    it("should render given places", () => {
        render(
            <PlaceList
                count={1}
                places={[
                    {
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
                    },
                ]}
            />,
            { wrapper: Wrapper },
        );

        const place = screen.getByText("__MOCKED_NAME__");
        expect(place).toBeInTheDocument();
    });

    it("should render skeleton when places prop is not provided", () => {
        const { container } = render(<PlaceList count={5} />, { wrapper: Wrapper });

        const skeleton = container.querySelectorAll('[data-testid="place-list-item"]');
        expect(skeleton.length).toBe(5);
    });
});
