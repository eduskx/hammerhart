import { createGlobalStyle } from "styled-components";
import { Grandstander } from "next/font/google";

const grandstander = Grandstander({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }


  body {
    margin: 0;
    background: rgb(44, 150, 164);
    background-attachment: fixed;
    background-color: #584849;
    font-family: ${grandstander.style.fontFamily};
  }

  h1, h2, h3, h4, h5, h6, p, ul, ol {
    margin: 0;
    padding: 0;
    max-width: 100%;
    word-break: break-all;
    line-height: 1.4rem;
  }
`;
