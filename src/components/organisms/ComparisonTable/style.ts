import styled from "styled-components";


export const TableContainer = styled.div`

    //Position and Layout


    //Display and visibility


    //Clipping
    overflow: auto;

    //Animation

    
    //Box model (From outside in)
    padding: ${({ theme }) => theme.spacing.sm};

    //Background
    background-color: ${({ theme }) => theme.colors.neutral["0"]};

    //Typography


    //Pseudo-classes and pseudo-elements

`


export const Table = styled.table`
border-spacing: ${({ theme }) => theme.spacing.xs};
border-collapse: separate;
table-layout: fixed;
overflow: auto;
min-width: 100%;

col.wide{
    width: 258px;
}

`