import GlobalStyle from "@/styles";
import projects from "@/lib/projects.js";
import { useState } from "react";
import { Saira } from "next/font/google";
import useLocalStorageState from "use-local-storage-state";

const saira = Saira({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  // const [newProjects, setNewProjects] = useState(projects);
  const [newProjects, setNewProjects] = useLocalStorageState("newProjects", {
    defaultValue: projects,
  });

  return (
    <>
      <GlobalStyle />
      <div className={saira.className}>
        <Component
          {...pageProps}
          projects={newProjects}
          setNewProjects={setNewProjects}
        />
      </div>
    </>
  );
}
