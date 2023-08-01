import { render, screen } from "@testing-library/react";

import { TaskBarDivider } from "@components/TaskBar/Divider";
import { Wrapper } from "@components/__test__/Wrapper";

describe("<TaskBarDivider />", () => {
    it("should render TaskBarDivider component properly", () => {
        render(<TaskBarDivider data-testid="root" />, {
            wrapper: Wrapper,
        });

        const item = screen.getByTestId("root");
        expect(item).toBeInTheDocument();
    });
});
