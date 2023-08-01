import styled from "@emotion/styled";

export const Root = styled.div`
    margin: 0;
    padding: ${({ theme }) => theme.spacing(0, 1)};

    border-width: 2px;
    border-style: solid;
    border-top-color: ${({ theme }) => theme.palette.primary.main};
    border-left-color: ${({ theme }) => theme.palette.primary.main};
    border-bottom-color: #fff;
    border-right-color: #fff;

    position: relative;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.palette.primary.main};

    background: transparent;
    user-select: none;

    img {
        display: block;
    }
`;
