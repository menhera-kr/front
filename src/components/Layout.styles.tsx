import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const GlobalStyles = css`
    html,
    body {
        margin: 0;
        padding: 0;
    }

    ::-moz-selection {
        color: black;
        background: #f4cbf7;
    }

    ::selection {
        color: black;
        background: #f4cbf7;
    }
`;

export const Root = styled.div`
    height: 100lvh;

    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    position: relative;

    ${({ theme }) => theme.breakpoints.down("md")} {
        height: 100svh;
    }
`;

export const Main = styled.div`
    padding: ${({ theme }) => theme.spacing(2)};

    display: flex;
    flex-direction: column;
    flex: 1 1 auto;

    position: relative;

    background: #f7defc url("/assets/pattern.png") repeat center;

    ${({ theme }) => theme.breakpoints.down("md")} {
        padding: ${({ theme }) => theme.spacing(0)};

        background: #fff;
    }
`;
