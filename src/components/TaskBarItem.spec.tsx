import { render, screen } from "@testing-library/react";

import { TaskBarItem } from "@components/TaskBarItem";
import { Wrapper } from "@components/__test__/Wrapper";

describe("<TaskBarItem />", () => {
    it("should render TaskBarItem component properly", () => {
        render(<TaskBarItem>Root</TaskBarItem>, {
            wrapper: Wrapper,
        });

        const root = screen.getByText("Root");
        expect(root).toBeInTheDocument();
    });
});
