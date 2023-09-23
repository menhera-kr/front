import { render } from "@testing-library/react";
import { PinIcon } from "@components/PinIcon";

describe("<PinIcon />", () => {
    it("should render PinIcon component correctly", () => {
        const { container } = render(<PinIcon />);

        const root = container.querySelector("svg");
        expect(root).toBeInTheDocument();
    });
});
