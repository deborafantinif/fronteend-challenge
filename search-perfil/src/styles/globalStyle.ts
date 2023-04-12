import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body, input, button {
    font-family: "Exo 2", sans-serif;
  }

  body {
    background-color: #FAFAFA;
  }
`;