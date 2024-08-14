import GlobalStyle from "@/styles";
import initialProjects from "@/lib/projects.js";
import useLocalStorageState from "use-local-storage-state";
import Layout from "@/components/Layout";
import { nanoid } from "nanoid";

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
    console.log("handleUpdate wird ausgeführt", updatedProject);
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

  async function handleProcessFormData(
    event,
    projectData,
    id,
    onProjectAction
  ) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newProject = Object.fromEntries(formData);

    // convert materials to ["", "", "", ...]
    const materialsArray = formData.getAll("Materials");
    const materials = materialsArray.map((material, index) => ({
      id: (index + 1).toString(),
      description: material,
    }));
    newProject.materials = materials;
    delete newProject.Materials;

    // convert steps to [{id: "1", description: ""}, ...]
    const stepsArray = formData.getAll("Steps");
    const steps = stepsArray.map((step, index) => ({
      id: (index + 1).toString(),
      description: step,
    }));
    newProject.steps = steps;
    delete newProject.Steps;

    // for image upload
    if (projectData?.imageUrl) {
      formData.append("currentImageUrl", projectData.imageUrl);
    }
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const { url } = await response.json();

    newProject.id = id || nanoid();
    newProject.imageUrl = url;

    onProjectAction(newProject);
  }

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
        onProcessFormData={handleProcessFormData}
      />
    </Layout>
  );
}
