import styled from 'styled-components'


const BaseCell = styled.th`
    //Position and Layout


    //Display and visibility


    //Clipping


    //Animation

    
    //Box model (From outside in)
    
    padding: ${({ theme }) => theme.spacing.sm};


    //Background
    

    //Typography
    

    //Pseudo-classes and pseudo-elements


    button.sort-indicator{

        padding-left: ${({ theme }) => theme.spacing.xs};

        color: ${({ theme }) => theme.colors.primary.default};


    }
`

export const Row = styled.tr`
vertical-align: bottom;
`

export const HorizontalCell = styled(BaseCell)`

    //Position and Layout


    //Display and visibility
    

    //Clipping


    //Animation

    
    //Box model (From outside in)


    //Background


    //Typography
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-align: start;
    white-space: nowrap;

    //Pseudo-classes and pseudo-elements

    border: 1px solid ${({ theme }) => theme.colors.neutral["200"]};

    background-color: ${({ theme }) => theme.colors.neutral["0"]};

`

export const VerticalCell = styled(BaseCell)`

    //Position and Layout


    //Display and visibility


    //Clipping


    //Animation

    
    //Box model (From outside in)


    //Background
    background-color: ${({ theme }) => theme.colors.neutral["50"]};

    //Typography


    //Pseudo-classes and pseudo-elements


    span.cell-content{

        display: flex;
        justify-content: center;
        align-items: center;

        writing-mode: vertical-rl;
        white-space: nowrap;
        transform: rotate(180deg);


        width: 100%;
    }

    span.cell-label{
        padding-top: ${({ theme }) => theme.spacing.xs};

        color: ${({ theme }) => theme.colors.neutral["500"]};
        font-weight: ${({ theme }) => theme.typography.weight.semibold};
    }

    svg.cell-icon{
        transform: rotate(180deg);

        color: ${({ theme }) => theme.colors.neutral["300"]};
    }
`