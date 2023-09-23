import { render, screen } from "@testing-library/react";
import { DitheredBackground } from "@components/DitheredBackground";
import { Wrapper } from "@components/__test__/Wrapper";

describe("<DitheredBackground />", () => {
    it("should render DitheredBackground component properly", () => {
        render(<DitheredBackground />, { wrapper: Wrapper });

        const root = screen.getByTestId("dithered-background");
        expect(root).toBeInTheDocument();
    });
});
