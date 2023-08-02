import React from "react";
import { useWindow, WindowContext } from "@components/Window/context";
import { render } from "@testing-library/react";

describe("useWindow()", () => {
    it("should throw an error if used outside of a <WindowProvider />", () => {
        const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

        function MockComponent() {
            useWindow();
            return null;
        }

        expect(() => {
            render(<MockComponent />);
        }).toThrowError("useWindow must be used within a <WindowProvider />");

        consoleSpy.mockRestore();
    });

    it("should return the context value", () => {
        function MockComponent() {
            const context = useWindow();
            React.useEffect(() => {
                context.openWindow(() => null, "Title");
            }, [context]);

            return null;
        }

        const openWindow = jest.fn();

        render(
            <WindowContext.Provider value={{ openWindow, focusedId: null, setFocus: jest.fn() }}>
                <MockComponent />
            </WindowContext.Provider>,
        );

        expect(openWindow).toHaveBeenCalled();
    });
});
