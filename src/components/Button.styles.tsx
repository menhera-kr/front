import styled from "@emotion/styled";

export const Root = styled.button`
    margin: 0;
    padding: ${({ theme }) => theme.spacing(0.5, 1)};
    border-width: 2px;
    border-style: solid;
    border-top-color: #fff;
    border-left-color: #fff;
    border-bottom-color: ${({ theme }) => theme.palette.primary.main};
    border-right-color: ${({ theme }) => theme.palette.primary.main};

    position: relative;

    display: flex;
    align-items: center;

    background: #f5e0fb;
    user-select: none;

    cursor: pointer;

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

    &:disabled {
        opacity: 0.5;
        border-color: #f5e0fb;

        pointer-events: none;
        filter: grayscale(1);
    }
`;
