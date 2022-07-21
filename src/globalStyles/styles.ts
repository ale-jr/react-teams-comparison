import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 body{
    font-family: ${({ theme }) => theme.typography.font.body};
    font-size: ${({ theme }) => theme.typography.size.md};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    
    background-color: ${({ theme }) => theme.colors.neutral['50']};
 }

 /* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: blue transparent;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.primary.default};
  border-radius: 20px;
  border: 3px solid transparent;
}
`

export default GlobalStyle