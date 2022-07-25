import styled from "styled-components";


export const TableContainer = styled.div`
    overflow: auto;

    padding: ${({ theme }) => theme.spacing.sm};

    background-color: ${({ theme }) => theme.colors.neutral["0"]};
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