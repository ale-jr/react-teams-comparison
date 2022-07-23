import styled from 'styled-components'


export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};

    height: 100%;

    p{
        font-size: ${({theme})=>theme.typography.size.xl};
    }

`