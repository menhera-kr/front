import styled from "@emotion/styled";

export const Root = styled.div`
    height: ${({ theme }) => theme.spacing(6)};

    margin: 0;
    padding: ${({ theme }) => theme.spacing(1, 0.75)};

    display: flex;
    box-sizing: border-box;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    background-color: #f5e0fb;
    box-shadow: 0px -2px 0px #fafff9;
`;
