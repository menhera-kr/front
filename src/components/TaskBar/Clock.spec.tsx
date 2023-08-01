import React from "react";
import { render } from "@testing-library/react";

import { TaskBarClock } from "@components/TaskBar/Clock";
import { Wrapper } from "@components/__test__/Wrapper";
import dayjs from "dayjs";

describe("<TaskbarClock />", () => {
    it("should render TaskbarClock component properly", () => {
        const mockedTime = new Date("2021-01-01T00:00:00.000Z");
        jest.useFakeTimers().setSystemTime(mockedTime);

        const { container } = render(<TaskBarClock />, {
            wrapper: Wrapper,
        });

        const root = container.firstChild;
        expect(root).toHaveTextContent(dayjs(mockedTime).format("HH:mm A"));
    });
});
