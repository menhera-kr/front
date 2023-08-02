import React from "react";

import { render, screen } from "@testing-library/react";

import { TaskBarButton } from "@components/TaskBarButton";
import { Wrapper } from "@components/__test__/Wrapper";

describe("<Button />", () => {
    it("should render Button component properly", () => {
        render(<TaskBarButton>Button</TaskBarButton>, {
            wrapper: Wrapper,
        });

        const item = screen.getByText("Button");
        expect(item).toBeInTheDocument();
    });

    it("should render startIcon prop properly", () => {
        render(<TaskBarButton startIcon={<span>Icon</span>}>Button</TaskBarButton>, {
            wrapper: Wrapper,
        });

        const item = screen.getByText("Icon");
        expect(item).toBeInTheDocument();
    });

    it("should render with 'centered' variant properly", () => {
        render(<TaskBarButton variant="centered">Button</TaskBarButton>, {
            wrapper: Wrapper,
        });

        const item = screen.getByText("Button");
        expect(item).toHaveStyle({ textAlign: "center" });
    });
});
