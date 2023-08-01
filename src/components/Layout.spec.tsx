import { render } from "@testing-library/react";

import { Layout } from "@components/Layout";
import { Wrapper } from "@components/__test__/Wrapper";

describe("<Layout />", () => {
    it("should render Layout component properly", () => {
        render(<Layout>Root</Layout>, {
            wrapper: Wrapper,
        });
    });
});
