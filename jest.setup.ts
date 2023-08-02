import "@testing-library/jest-dom/extend-expect";

jest.mock("nanoid", () => {
    return { nanoid: () => Math.random().toString() };
});
