import { render, screen } from "@testing-library/react";

import { Window } from "@components/Window";
import { Wrapper } from "@components/__test__/Wrapper";

describe("<Window />", () => {
    it("should render Window component properly", () => {
        render(<Window title="Title">Root</Window>, {
            wrapper: Wrapper,
        });

        const root = screen.getByText("Root");
        expect(root).toBeInTheDocument();
    });

    it("should render Window component with title", () => {
        render(<Window title="Title">Root</Window>, {
            wrapper: Wrapper,
        });

        const title = screen.getByText("Title");
        expect(title).toBeInTheDocument();
    });

    it("should be able to render with maximum width", () => {
        render(
            <Window title="Title" maxWidth="md">
                Root
            </Window>,
            { wrapper: Wrapper },
        );

        const root = screen.getByTestId("window");
        expect(root).toBeInTheDocument();
        expect(root).toHaveStyle({
            margin: "0 auto",
        });
    });

    it("should call onClose prop callback when close button clicked", () => {
        const onClose = jest.fn();

        render(
            <Window title="Title" onClose={onClose}>
                Root
            </Window>,
            { wrapper: Wrapper },
        );

        const closeButton = screen.getByTestId("close");
        closeButton.click();

        expect(onClose).toHaveBeenCalled();
    });
});
