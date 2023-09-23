import styled from "@emotion/styled";

export type RootProps = {
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
};

export const Root = styled.div<RootProps>`
    width: ${({ theme, maxWidth }) => (maxWidth ? theme.breakpoints.values[maxWidth] : "none")}px;
    max-width: calc(100% - ${({ theme }) => theme.spacing(1)});

    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(0.5)};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};

    display: flex;
    flex-direction: column;
    flex: 1 1 auto;

    background: #88f5e0;
    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.2);
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

    display: flex;
    align-items: center;
    box-sizing: border-box;

    background-color: #edc9ed;

    user-select: none;

    ${({ theme }) => theme.breakpoints.down("md")} {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        z-index: 10;
    }
`;

export const Icon = styled.div`
    width: ${({ theme }) => theme.spacing(2.25)};
    height: ${({ theme }) => theme.spacing(2.25)};

    background-color: ${({ theme }) => theme.palette.primary.main};
`;
