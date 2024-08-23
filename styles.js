import { createGlobalStyle } from "styled-components";
import { Grandstander, Rubik } from "next/font/google";

const grandstander = Grandstander({
  subsets: ["latin"],
  display: "swap",
});
const rubik = Rubik({
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
    background-color: var(--color-primary-1);
  }

  h1, h2, h3, h4, h5, h6,.Collapsible__trigger,.Collapsible__contentInner  {
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
 
  
  :root{

    /* Colors */
    --color-primary-1: #F9F5EB;
    --color-primary-2: #536F5F;
    --color-primary-2-light: #536f5f80;
    --color-primary-3: #324339;


    --color-secondary-1: #F9F5EBCC;
    --color-secondary-2: #75837481;
    --color-secondary-3: #696057;
    
    --color-beginner: #67AC5B;
    --color-intermediate: #F7C244;
    --color-advanced: #ED6237;

    --color-alert: #ff6f61;

  
   
   --color-font-light: #F5EEDC;


    /* Shadows */
    --box-shadow-1: 0px -4px 4px 0px rgba(0,0,0,0.4);
    --box-shadow-2: 0px 4px 4px 0px rgba(0,0,0,0.4);
    --box-shadow-form-1: 0px 2px 2px 1px rgba(0,0,0,0.4);
    --box-shadow-form-2: 0px -2px 2px 1px rgba(0,0,0,0.4);
    --inner-shadow-1: inset -4px 4px 4px 0px rgba(0,0,0,0.4);
    --inner-shadow-2: inset 0px -4px 4px 0px rgba(0,0,0,0.4);
    }
`;
