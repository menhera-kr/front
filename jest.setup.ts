import "@testing-library/jest-dom/extend-expect";
import ResizeObserver from "resize-observer-polyfill";

export function mergeRefs<T = any>(refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>): React.RefCallback<T> {
    return value => {
        refs.forEach(ref => {
            if (typeof ref === "function") {
                ref(value);
            } else if (ref != null) {
                (ref as React.MutableRefObject<T | null>).current = value;
            }
        });
    };
}

global.ResizeObserver = ResizeObserver;

jest.mock("nanoid", () => {
    return { nanoid: () => Math.random().toString() };
});

jest.mock("react-merge-refs", () => {
    return {
        mergeRefs,
    };
});
