import styled from "@emotion/styled";
import { WindowProps } from "@components/Window";

type RootProps = { maxWidth?: WindowProps["maxWidth"] };

export const Root = styled.div<RootProps>`
    width: 100%;
    max-width: ${({ theme, maxWidth }) => (maxWidth ? `${theme.breakpoints.values[maxWidth]}px` : "none")};

    margin: ${({ maxWidth }) => (maxWidth ? "0 auto" : "none")};
    padding: ${({ theme }) => theme.spacing(0.5)};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};

    display: flex;
    flex-direction: column;
    flex: 1 1 auto;

    background: #88f5e0;
    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.2);
`;

export const FloatRoot = styled(Root)<RootProps>`
    width: auto;
    min-width: 360px;
    max-width: none;

    position: fixed;
    top: 0;
    left: 0;
`;

export const Content = styled.div`
    margin: 0;
    padding: ${({ theme }) => theme.spacing(0.5)};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};

    flex: 1 1 auto;
    position: relative;

    background: white;
`;

export const InnerContent = styled.div`
    padding: ${({ theme }) => theme.spacing(0.5)};

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    overflow: auto;
`;

export const TitleBar = styled.div`
    height: ${({ theme }) => theme.spacing(4)};

    margin: ${({ theme }) => theme.spacing(0, 0, 0.5)};
    padding: ${({ theme }) => theme.spacing(0.5)};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};

    box-sizing: border-box;
    display: flex;
    align-items: center;

    background-color: #edc9ed;

    user-select: none;
`;

export const Icon = styled.div`
    width: ${({ theme }) => theme.spacing(2.25)};
    height: ${({ theme }) => theme.spacing(2.25)};

    background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const CloseButton = styled.button`
    margin: 0;
    padding: 0;
    border: 0;

    display: block;

    background: transparent;
    cursor: pointer;

    outline: none;

    > img {
        display: block;
    }

    &:hover,
    &:focus-visible {
        filter: brightness(2.5);
    }
`;
