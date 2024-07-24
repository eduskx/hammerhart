import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  
  body {
    margin: 0;
    font-family: system-ui;

  }

  h2, h1, p {
    margin: 0;
    padding: 0;
  }
`;
