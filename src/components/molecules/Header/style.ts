import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 99;

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  box-shadow: 0px 1px 4px rgba(191, 199, 208, 0.24);
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};

  background-color: ${({ theme }) => theme.colors.neutral["0"]};

  span.grow {
    flex-grow: 1;
  }
`;
