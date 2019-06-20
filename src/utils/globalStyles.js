import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  a {
    color: #111111;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: #a742f4;
    }
  }
`

export default GlobalStyle
