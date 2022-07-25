import styled, { css } from "styled-components";
import { getCellValueColor } from "./getCellValueColor";
interface RowProps {
  type: "team" | "average" | "benchmark";
}

const benchmarkRowCss = css`
  td {
    background-color: ${({ theme }) => theme.colors.neutral["200"]};
    border: 1px solid ${({ theme }) => theme.colors.neutral["200"]};
  }

  td:first-child {
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
  }
`;

const averageRowCss = css`
  td:first-child {
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
  }
`;

export const Row = styled.tr<RowProps>`
  td {
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};

    color: ${({ theme }) => theme.colors.neutral["600"]};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    text-align: center;
  }

  td:first-child {
    border: 1px solid ${({ theme }) => theme.colors.neutral["200"]};

    font-weight: ${({ theme }) => theme.typography.weight.regular};
    text-align: start;
  }

  ${({ type }) => type === "average" && averageRowCss}
  ${({ type }) => type === "benchmark" && benchmarkRowCss}
`;

interface CellProps {
  value?: number;
}

export const Cell = styled.td<CellProps>`
  background-color: ${getCellValueColor};
  border: 1px solid ${getCellValueColor};
`;
