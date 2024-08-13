import GlobalStyle from "@/styles";
import initialProjects from "@/lib/projects.js";
import useLocalStorageState from "use-local-storage-state";
import Layout from "@/components/Layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useLocalStorageState("projects", {
    defaultValue: initialProjects,
  });

  function handleAddProject(newProject) {
    setProjects([newProject, ...projects]);
  }

  function handleDeleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  function handleUpdateProject(updatedProject) {
    setProjects(
      projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  }

  function handleToggleBookmark(id) {
    setProjects(
      projects.map((project) =>
        project.id === id
          ? { ...project, isFavorite: !project.isFavorite }
          : project
      )
    );
  }

  // other functions

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        projects={projects}
        onUpdateProject={handleUpdateProject}
        onAddProject={handleAddProject}
        onToggleBookmark={handleToggleBookmark}
        onDeleteProject={handleDeleteProject}
      />
    </Layout>
  );
}
