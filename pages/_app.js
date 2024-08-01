import GlobalStyle from "@/styles";
import projects from "@/lib/projects.js";
import { Saira } from "next/font/google";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

const saira = Saira({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [newProjects, setNewProjects] = useLocalStorageState("newProjects", {
    defaultValue: projects,
  });
  const [materials, setMaterials] = useState([""]);
  const [steps, setSteps] = useState([{ id: "1", description: "" }]);

  return (
    <>
      <GlobalStyle />
      <div className={saira.className}>
        <Component
          {...pageProps}
          projects={newProjects}
          setNewProjects={setNewProjects}
          materials={materials}
          setMaterials={setMaterials}
          steps={steps}
          setSteps={setSteps}
        />
      </div>
    </>
  );
}
