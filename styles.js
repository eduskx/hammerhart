import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`




  *,
  *::before,
  *::after {
    box-sizing: border-box;
    
  }

  
  body {
    margin: 0;
    font-family: Saira;
    background: rgb(44, 150, 164);

/* background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%); */



    background-attachment: fixed;
    background-color: #584849;

  }
  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
`;
