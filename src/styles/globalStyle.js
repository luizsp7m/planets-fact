import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body, input, button {
    font-family: 'Spartan', sans-serif;
  }

  body {
    position: relative;
  }

  @media(max-width: 905px) {
    font-size: 56.25%;
  }

  @media(max-width: 705px) {
    font-size: 50%;
  }
`

export default GlobalStyle;