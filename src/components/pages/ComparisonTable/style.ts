import styled from "styled-components";

export const PageContainer = styled.div`
        //Position and Layout


    //Display and visibility


    //Clipping


    //Animation

    
    //Box model (From outside in)
    

    //Background


    //Typography


    //Pseudo-classes and pseudo-elements

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