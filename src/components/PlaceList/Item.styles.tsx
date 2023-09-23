import styled from "@emotion/styled";

export const Root = styled.div`
    margin: 0;
    padding: ${({ theme }) => theme.spacing(0.5)};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};

    background-color: #e2e3de;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.25);
    transition: ${({ theme }) => theme.transitions.create(["box-shadow", "transform"], { duration: 100 })};

    color: inherit;
    text-decoration: none;

    &:not(:disabled):not([aria-disabled="true"]) {
        &:hover {
            box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.25);
        }

        &:active {
            box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.25);
        }
    }

    p {
        width: 100%;
    }
`;

export const Content = styled.div`
    margin: 0;
    padding: ${({ theme }) => theme.spacing(1)};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};

    background-color: #fff;
`;
