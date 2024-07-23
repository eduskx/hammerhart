import GlobalStyle from "@/styles";
import projects from "@/lib/projects.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} projects={projects} />
    </>
  );
}
