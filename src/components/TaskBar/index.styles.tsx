import styled from "@emotion/styled";

export const Root = styled.div`
    height: ${({ theme }) => theme.spacing(6)};

    margin: 0;
    padding: ${({ theme }) => theme.spacing(1, 0.75)};

    display: flex;
    box-sizing: border-box;
    flex: 0 0 ${({ theme }) => theme.spacing(6)};

    background-color: #f5e0fb;
    box-shadow: 0px -2px 0px #fafff9;
`;
