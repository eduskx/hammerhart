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

  const [toggleFormModal, setToggleFormModal] = useState(false);

  function handleUpdateProject(updatedProject) {
    setNewProjects(
      newProjects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  }

  function handleToggleForm() {
    setToggleFormModal(!toggleFormModal);
  }

  return (
    <>
      <GlobalStyle />
      <div className={saira.className}>
        <Component
          {...pageProps}
          projects={newProjects}
          onUpdateProject={handleUpdateProject}
          setNewProjects={setNewProjects}
          toggleFormModal={toggleFormModal}
          onToggleForm={handleToggleForm}
        />
      </div>
    </>
  );
}
