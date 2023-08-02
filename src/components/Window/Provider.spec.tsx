import React from "react";

import { act, render, screen } from "@testing-library/react";

import { WindowProvider } from "@components/Window/Provider";
import { useWindow } from "@components/Window/context";

import { Wrapper } from "@components/__test__/Wrapper";

describe("<WindowProvider />", () => {
    it("should render WindowProvider component properly", () => {
        render(
            <WindowProvider>
                <div>Root</div>
            </WindowProvider>,
        );

        const root = screen.getByText("Root");
        expect(root).toBeInTheDocument();
    });

    it("should render added windows as children correctly", () => {
        function MockComponent() {
            const window = useWindow();

            React.useEffect(() => {
                window.openWindow(() => {
                    return <div data-testid="Test">test</div>;
                }, "Test");
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, []);

            return null;
        }

        act(() => {
            render(<MockComponent />, { wrapper: Wrapper });
        });
    });

    it("should be able to close added window", () => {
        function MockComponent() {
            const window = useWindow();

            React.useEffect(() => {
                window.openWindow(() => {
                    return <div data-testid="Test">test</div>;
                }, "Test");
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, []);

            return null;
        }

        act(() => {
            render(<MockComponent />, { wrapper: Wrapper });
        });

        const closeButton = screen.getByTestId("close");
        act(() => {
            closeButton.click();
        });

        const test = screen.queryByTestId("Test");
        expect(test).not.toBeInTheDocument();
    });

    it("should be able to set focused window id", () => {
        function MockComponent() {
            const { setFocus, focusedId } = useWindow();

            React.useEffect(() => {
                setFocus("123");
            }, [setFocus]);

            return <div data-testid="test">{focusedId}</div>;
        }

        act(() => {
            render(<MockComponent />, { wrapper: Wrapper });
        });

        const test = screen.getByTestId("test");
        expect(test).toHaveTextContent("123");
    });

    it("should move focus to 'fixed' window id if last window have closed", () => {
        function MockComponent() {
            const { focusedId, openWindow } = useWindow();
            const onClick = () => openWindow(() => null, "test");

            return (
                <div data-testid="test" onClick={onClick}>
                    {focusedId}
                </div>
            );
        }

        act(() => {
            render(<MockComponent />, { wrapper: Wrapper });
        });

        const test = screen.getByTestId("test");
        act(() => {
            test.click();
        });

        const closeButton = screen.getByTestId("close");
        act(() => {
            closeButton.click();
        });

        expect(test).toBeInTheDocument();
        expect(test).toHaveTextContent("fixed");
    });
});
