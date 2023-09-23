import mediaQuery from "css-mediaquery";

export function createMatchMedia(width: number) {
    return (query: string) =>
        ({
            matches: mediaQuery.match(query, { width }),
            addListener: () => {},
            removeListener: () => {},
        }) as any;
}
