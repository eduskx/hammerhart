import { createGlobalStyle } from "styled-components";
import { Grandstander, Rubik } from "next/font/google";

const grandstander = Grandstander({
  subsets: ["latin"],
});
const rubik = Rubik({
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: ${rubik.style.fontFamily};
  }


  body {
    font-family: ${rubik.style.fontFamily};
    margin: 0;
    padding-top: 80px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${grandstander.style.fontFamily};
    word-break: break-word;
    line-height: 1.4rem;
    -webkit-tap-highlight-color: transparent;
  }
 p, ul, ol, a {
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

    --color-secondary-1: #F9F5EBCC;
    --color-secondary-2: #A6B2A5;
    
    --color-beginner: #338D39;
    --color-intermediate: #E3D44B;
    --color-advanced: #D85757;

    /* Shadows */
    --box-shadow-1: 2px -2px 4px 0px rgba(0,0,0,0.4);
    --box-shadow-2: 0px 4px 4px 0px rgba(0,0,0,0.4)
    --inner-Shadow-1: inset 0px 2px 2px 0px rgba(0,0,0,0.4);
    --inner-shadow-2: inset 0px 4px 4px 0px rgba(0,0,0,0.4);
    }
`;
