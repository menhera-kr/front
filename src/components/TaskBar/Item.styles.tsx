import styled from "@emotion/styled";

export const Root = styled.div`
    width: ${({ theme }) => theme.spacing(2)};
    height: ${({ theme }) => theme.spacing(2)};

    margin: 0;
    padding: 0;

    display: block;

    background: ${({ theme }) => theme.palette.primary.main};
`;
