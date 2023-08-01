import styled from "@emotion/styled";

export const Root = styled.div`
    width: 1px;
    height: 100%;

    margin: 0;
    padding: 0;

    box-sizing: border-box;

    border-width: 2px;
    border-style: solid;
    border-top-color: #fff;
    border-left-color: #fff;
    border-bottom-color: ${({ theme }) => theme.palette.primary.main};
    border-right-color: ${({ theme }) => theme.palette.primary.main};
`;
