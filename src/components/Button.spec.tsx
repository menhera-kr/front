import React from "react";

import { render, screen } from "@testing-library/react";

import { Button } from "@components/Button";
import { Wrapper } from "@components/__test__/Wrapper";

describe("<Button />", () => {
    it("should render Button component properly", () => {
        render(<Button>Button</Button>, {
            wrapper: Wrapper,
        });

        const item = screen.getByText("Button");
        expect(item).toBeInTheDocument();
    });

    it("should render startIcon prop properly", () => {
        render(<Button startIcon={<span>Icon</span>}>Button</Button>, {
            wrapper: Wrapper,
        });

        const item = screen.getByText("Icon");
        expect(item).toBeInTheDocument();
    });

    it("should render with 'centered' variant properly", () => {
        render(<Button variant="centered">Button</Button>, {
            wrapper: Wrapper,
        });

        const item = screen.getByText("Button");
        expect(item).toHaveStyle({ textAlign: "center" });
    });
});
