import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    
  }
:root{
  --Beginner: #3ecd5e
  --Intermediate: #f9b234;
  --Advanced:#e44002;

}

  
  body {
    margin: 0;
    font-family: system-ui;
    

  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
`;
