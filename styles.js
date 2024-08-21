import { createGlobalStyle } from "styled-components";
import { Grandstander, Rubik } from "next/font/google";

export const grandstander = Grandstander({
  subsets: ["latin"],
  display: "swap",
});
export const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: ${rubik.style.fontFamily};
    font-weight: 500;
  }


  body {
    font-family: ${rubik.style.fontFamily};
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${grandstander.style.fontFamily};
    word-break: break-word;
    line-height: 1.6rem;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
    margin:  0;
  }
 p, ul, ol, a  {
    margin: 0;
    padding: 0;
    word-break: break-word;
    line-height: 1.4rem;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    font-family: ${grandstander.style.fontFamily};
  }

 
  
  :root{

    /* Colors */
    --color-primary-1: #F9F5EB;
    --color-primary-2: #536F5F;
    --color-primary-3: #324339;


    --color-secondary-1: #F9F5EBCC;
    --color-secondary-2: #a6b2a56b;
    --color-secondary-3: #88A29379;
    
    --color-beginner: #67AC5B;
    --color-intermediate: #F7C244;
    --color-advanced: #ED6237;

    --color-bookmark: #ff6f61;

   /*  Font Colors */
   --color-font-1:#DDDDDD;
   --color-font-2:#696057;
   --color-font-3:#403A34;
   --color-font-light: #F5EEDC;

    /* Shadows */
    --box-shadow-1: 2px -2px 4px 0px rgba(0,0,0,0.4);
    --box-shadow-2: 4px 4px 4px 0px rgba(0,0,0,0.4);
    --inner-shadow-1: inset -4px 4px 4px 0px rgba(0,0,0,0.4);
    --inner-shadow-2: inset 0px -4px 4px 0px rgba(0,0,0,0.4);
    }
`;
