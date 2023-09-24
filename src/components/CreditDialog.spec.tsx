import { render, screen } from "@testing-library/react";

import { CreditDialog } from "@components/CreditDialog";
import { Wrapper } from "@components/__test__/Wrapper";
import { createMatchMedia } from "@components/__test__/media";

describe("<CreditDialog />", () => {
    beforeAll(() => {
        window.matchMedia = createMatchMedia(1920);
    });

    it("should render Divider component properly", () => {
        render(<CreditDialog open onClose={jest.fn()} />, {
            wrapper: Wrapper,
        });

        const item = screen.getByTestId("credit-dialog-root");
        expect(item).toBeInTheDocument();
    });
});
