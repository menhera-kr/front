import styled from "@emotion/styled";

export const Root = styled.div`
    height: ${({ theme }) => theme.spacing(5)};

    margin: 0;
    padding: ${({ theme }) => theme.spacing(0.25)};

    box-sizing: border-box;
    position: relative;

    clip-path: polygon(
        0px calc(100% - 8px),
        4px calc(100% - 8px),
        4px calc(100% - 4px),
        8px calc(100% - 4px),
        8px 100%,
        calc(100% - 8px) 100%,
        calc(100% - 8px) calc(100% - 4px),
        calc(100% - 4px) calc(100% - 4px),
        calc(100% - 4px) calc(100% - 8px),
        100% calc(100% - 8px),
        100% 8px,
        calc(100% - 4px) 8px,
        calc(100% - 4px) 4px,
        calc(100% - 8px) 4px,
        calc(100% - 8px) 0px,
        8px 0px,
        8px 4px,
        4px 4px,
        4px 8px,
        0px 8px
    );

    background: ${({ theme }) => theme.palette.primary.main};

    &:hover {
        background: ${({ theme }) => theme.palette.primary.dark};
    }

    &:focus-within {
        background: ${({ theme }) => theme.palette.primary.light};
    }
`;

export const Control = styled.input`
    width: 100%;
    height: 100%;

    margin: 0;
    padding: ${({ theme }) => theme.spacing(0, 2)};
    border: 0;

    display: block;
    box-sizing: border-box;

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 1rem;

    clip-path: polygon(
        0px calc(100% - 8px),
        4px calc(100% - 8px),
        4px calc(100% - 4px),
        8px calc(100% - 4px),
        8px 100%,
        calc(100% - 8px) 100%,
        calc(100% - 8px) calc(100% - 4px),
        calc(100% - 4px) calc(100% - 4px),
        calc(100% - 4px) calc(100% - 8px),
        100% calc(100% - 8px),
        100% 8px,
        calc(100% - 4px) 8px,
        calc(100% - 4px) 4px,
        calc(100% - 8px) 4px,
        calc(100% - 8px) 0px,
        8px 0px,
        8px 4px,
        4px 4px,
        4px 8px,
        0px 8px
    );

    outline: none;
`;
