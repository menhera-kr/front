import { render, screen } from "@testing-library/react";

import { Wrapper } from "@components/__test__/Wrapper";
import { Button } from "@components/Button";

describe("<Button />", () => {
    it("should render Button component properly", () => {
        render(<Button>Button</Button>, { wrapper: Wrapper });

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});
