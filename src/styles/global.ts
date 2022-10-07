import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    margin: 0 auto;
    background-color: #FFFFFF;
    font-family: 'Roboto', sans-serif;   
    width: 90rem;
  }
  button {
    cursor: pointer;
  }
`
