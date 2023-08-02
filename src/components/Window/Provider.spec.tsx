import React from "react";

import { act, render, screen } from "@testing-library/react";

import { WindowProvider } from "@components/Window/Provider";
import { useWindow } from "@components/Window/context";
import { Wrapper } from "@components/__test__/Wrapper";

jest.mock("nanoid", () => {
    return { nanoid: () => "123" };
});

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
            render(
                <WindowProvider>
                    <MockComponent />
                </WindowProvider>,
                { wrapper: Wrapper },
            );
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
            render(
                <WindowProvider>
                    <MockComponent />
                </WindowProvider>,
                { wrapper: Wrapper },
            );
        });

        const closeButton = screen.getByTestId("close");
        act(() => {
            closeButton.click();
        });

        const test = screen.queryByTestId("Test");
        expect(test).not.toBeInTheDocument();
    });
});
