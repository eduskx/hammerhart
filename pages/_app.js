import GlobalStyle from "@/styles";
import projects from "@/lib/projects.js";
import { Saira } from "next/font/google";
import useLocalStorageState from "use-local-storage-state";

const saira = Saira({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [newProjects, setNewProjects] = useLocalStorageState("newProjects", {
    defaultValue: projects,
  });

  function handleUpdateProject(updatedProject) {
    setNewProjects(
      newProjects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
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
        />
      </div>
    </>
  );
}
