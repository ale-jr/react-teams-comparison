import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 body{
    font-family: ${({ theme }) => theme.typography.font.body};
    font-size: ${({ theme }) => theme.typography.size.md};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
 }
`

export default GlobalStyle