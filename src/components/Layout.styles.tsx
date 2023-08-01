import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const GlobalStyles = css`
    html,
    body {
        margin: 0;
        padding: 0;
    }
`;

export const Root = styled.div`
    margin: 0;
    padding: 0;

    position: relative;
`;

export const Main = styled.div`
    height: 100lvh;

    margin: 0 auto;
    padding: 0 !important;

    background: #f7defc url("/assets/pattern.png") repeat center;
`;
