import { render, screen } from "@testing-library/react";

import { TaskBar } from "@components/TaskBar";
import { Wrapper } from "@components/__test__/Wrapper";

describe("<TaskBar />", () => {
    it("should render TaskBar component properly", () => {
        render(<TaskBar />, {
            wrapper: Wrapper,
        });

        const root = screen.getByTestId("taskbar");
        expect(root).toBeInTheDocument();
    });
});
