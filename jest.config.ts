import nextJest from "next/jest";
import { Config } from "jest";

const createJestConfig = nextJest({
    dir: "./",
});

const config: Config = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    collectCoverageFrom: [
        "./src/**/*.{ts,tsx}",
        "!./src/**/__tests__/**/*.{ts,tsx}",
        "!./src/**/*.styles.{ts,tsx}",
        "!./src/pages/**/*.{ts,tsx}",
    ],
};

export default createJestConfig(config);
