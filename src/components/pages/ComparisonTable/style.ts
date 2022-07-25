import styled from "styled-components";

export const PageContainer = styled.div`
    div.page-header{
        display: flex;
        align-items: center;

        padding-bottom: ${({ theme }) => theme.spacing.lg};

        h1{
            flex-grow: 1;

            color: ${({ theme }) => theme.colors.neutral["600"]};
            font-size: ${({ theme }) => theme.typography.size.lg};
        }
    }
`