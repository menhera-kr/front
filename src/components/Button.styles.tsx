import styled from "@emotion/styled";

export const Root = styled.button`
    margin: 0;
    padding: ${({ theme }) => theme.spacing(0, 0.5)};

    border-width: 2px;
    border-style: solid;
    border-top-color: #fff;
    border-left-color: #fff;
    border-bottom-color: ${({ theme }) => theme.palette.primary.main};
    border-right-color: ${({ theme }) => theme.palette.primary.main};

    position: relative;

    display: flex;
    align-items: center;

    background: transparent;
    user-select: none;

    cursor: pointer;

    img {
        display: block;
    }

    &:focus-visible {
        outline: none;

        &:before {
            content: "";

            border: 2px dotted ${({ theme }) => theme.palette.primary.main};

            position: absolute;
            top: 2px;
            left: 2px;
            right: 2px;
            bottom: 2px;

            pointer-events: none;
        }
    }

    &:active,
    &[aria-pressed="true"] {
        border-top-color: ${({ theme }) => theme.palette.primary.main};
        border-left-color: ${({ theme }) => theme.palette.primary.main};
        border-bottom-color: #fff;
        border-right-color: #fff;
    }

    &[aria-pressed="true"] {
        color: ${({ theme }) => theme.palette.primary.dark};
    }
`;
