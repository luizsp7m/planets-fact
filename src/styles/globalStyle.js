import { createGlobalStyle } from 'styled-components';

import backgroundImage from '../assets/background-stars.svg';

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
    height: 100%;
    min-height: 100vh;

    background: #070722;
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
  }

  @media(max-width: 905px) {
    font-size: 56.25%;
  }

  @media(max-width: 705px) {
    font-size: 50%;
  }
`

export default GlobalStyle;