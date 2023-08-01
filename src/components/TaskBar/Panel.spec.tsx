import { render, screen } from "@testing-library/react";

import { TaskBarPanel } from "@components/TaskBar/Panel";
import { Wrapper } from "@components/__test__/Wrapper";

describe("<TaskBarPanel />", () => {
    it("should render TaskBarPanel component properly", () => {
        render(<TaskBarPanel>Root</TaskBarPanel>, {
            wrapper: Wrapper,
        });

        const root = screen.getByText("Root");
        expect(root).toBeInTheDocument();
    });
});
