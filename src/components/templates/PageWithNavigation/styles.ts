import styled from "styled-components";

export const PageWithNavigationContainer = styled.div`
  //Position and Layout

  //Display and visibility
  display: flex;
  flex-direction: column;
  height: 100vh;

  //Clipping

  //Animation

  //Box model (From outside in)

  //Background

  //Typography

  //Pseudo-classes and pseudo-elements
`;

export const Content = styled.div`
  //Position and Layout

  //Display and visibility
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  //Clipping

  //Animation

  //Box model (From outside in)
  min-height: 0px;

  //Background

  //Typography

  //Pseudo-classes and pseudo-elements
`;

export const Main = styled.main`
  //Position and Layout

  //Display and visibility
  flex-grow: 1;

  //Clipping
  overflow-y: auto;

  //Animation

  //Box model (From outside in)
  min-height: 0px;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`};

  //Background

  //Typography

  //Pseudo-classes and pseudo-elements
`;
