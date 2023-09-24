import styled from "@emotion/styled";

export const Profile = styled.div`
    width: ${({ theme }) => theme.spacing(12)};
    height: ${({ theme }) => theme.spacing(12)};

    margin: 0 auto ${({ theme }) => theme.spacing(1)};
    border-radius: 50%;

    display: block;

    background-size: cover;
    background-position: center;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0;

    ${({ theme }) => theme.breakpoints.down("md")} {
        &:not(:last-of-type) {
            margin-bottom: ${({ theme }) => theme.spacing(4)};
        }

        flex-basis: 100%;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
        flex-basis: 50%;
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const IconLink = styled.a`
    display: block;

    outline: none;

    > svg {
        width: ${({ theme }) => theme.spacing(3)};
        height: ${({ theme }) => theme.spacing(3)};

        display: block;

        color: ${({ theme }) => theme.palette.primary.main};
    }

    &:hover,
    &:focus-visible {
        > svg {
            color: ${({ theme }) => theme.palette.secondary.main};
        }
    }
`;
