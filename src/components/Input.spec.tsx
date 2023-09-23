import { render, screen } from "@testing-library/react";

import { Input } from "@components/Input";
import { Wrapper } from "@components/__test__/Wrapper";

describe("<Input />", () => {
    it("should render Input component properly", () => {
        render(<Input />, { wrapper: Wrapper });

        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
    });
});
