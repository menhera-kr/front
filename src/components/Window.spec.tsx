import { render, screen } from "@testing-library/react";

import { Window } from "@components/Window";
import { Wrapper } from "@components/__test__/Wrapper";
import { createMatchMedia } from "@components/__test__/media";

describe("<Window />", () => {
    beforeAll(() => {
        window.matchMedia = createMatchMedia(1920);
    });

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
});
