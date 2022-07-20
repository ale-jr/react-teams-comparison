import styled from 'styled-components'


export const HeaderContainer = styled.header`
    //Position and Layout


    //Display and visibility
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};

    //Clipping


    //Animation

    
    //Box model (From outside in)
    box-shadow: 0px 1px 4px rgba(191, 199, 208, 0.24);
    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};

    //Background


    //Typography


    //Pseudo-classes and pseudo-elements


    span.grow{
        flex-grow: 1;
    }
`