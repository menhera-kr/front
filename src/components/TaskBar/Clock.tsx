import React from "react";
import dayjs from "dayjs";

import { TaskBarPanel } from "@components/TaskBar/Panel";

export function TaskBarClock() {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    return <TaskBarPanel>{dayjs(time).format("HH:mm A")}</TaskBarPanel>;
}
