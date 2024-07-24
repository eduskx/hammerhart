import GlobalStyle from "@/styles";
import projects from "@/lib/projects.js";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [newProjects, setNewProjects] = useState(projects);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} projects={projects} />
    </>
  );
}
