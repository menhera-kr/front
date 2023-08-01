import { render, screen } from "@testing-library/react";

import { Divider } from "@components/Divider";
import { Wrapper } from "@components/__test__/Wrapper";

describe("<Divider />", () => {
    it("should render Divider component properly", () => {
        render(<Divider data-testid="root" />, {
            wrapper: Wrapper,
        });

        const item = screen.getByTestId("root");
        expect(item).toBeInTheDocument();
    });
});
