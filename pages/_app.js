import GlobalStyle from "@/styles";
import initialProjects from "@/lib/projects.js";
import useLocalStorageState from "use-local-storage-state";
import Layout from "@/components/Layout";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useLocalStorageState("projects", {
    defaultValue: initialProjects,
  });

  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleToggleForm() {
    setIsFormOpen(!isFormOpen);
  }

  useEffect(() => {
    document.body.style.overflow = isFormOpen ? "hidden" : "auto";
  }, [isFormOpen]);

  const [searchInput, setSearchInput] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterOn, setFilterOn] = useState(false);
  const complexities = ["All", "Beginner", "Intermediate", "Advanced"];

  function handleFilterChange(complexity) {
    setActiveFilter(complexity);
  }

  function handleSearch(event) {
    const lowerCasedInput = event.target.value.toLowerCase();
    setSearchInput(lowerCasedInput);
  }

  function handleToggleForm() {
    setIsFormOpen(!isFormOpen);
  }

  function handleToggleDisplayFilter() {
    setFilterOn(!filterOn);
  }

  useEffect(() => {
    document.body.style.overflow = isFormOpen ? "hidden" : "auto";
  }, [isFormOpen]);

  function handleAddProject(newProject) {
    setProjects([newProject, ...projects]);
  }

  function handleDeleteProject(id) {
    localStorage.removeItem(`note-${id}`);
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

  async function handleProcessFormData(
    event,
    projectData,
    id,
    onProjectAction
  ) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newProject = Object.fromEntries(formData);

    // combine durationNumber and durationString into durtaion

    const duration = `${formData.get("durationNumber")} ${formData.get(
      "durationString"
    )}`;
    newProject.duration = duration;

    // convert materials and steps to [{id: "1", description: ""}, ...]
    const materialsArray = formData.getAll("Material");
    const materials = materialsArray.map((material, index) => ({
      id: (index + 1).toString(),
      description: material,
    }));
    newProject.materials = materials;
    delete newProject.Material;

    const stepsArray = formData.getAll("Step");
    const steps = stepsArray.map((step, index) => ({
      id: (index + 1).toString(),
      description: step,
    }));
    newProject.steps = steps;
    delete newProject.Step;

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
    newProject.isFavorite = false;

    onProjectAction(newProject);
    handleToggleForm();
  }

  function handleCheckbox(itemId, projectId, items) {
    setProjects(
      projects.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            [items]: project[items].map((item) => {
              if (item.id === itemId) {
                return {
                  ...item,
                  isChecked: !item.isChecked,
                };
              } else {
                return item;
              }
            }),
          };
        } else {
          return project;
        }
      })
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout onSearch={handleSearch}>
        <Component
          {...pageProps}
          projects={projects}
          onUpdateProject={handleUpdateProject}
          onAddProject={handleAddProject}
          onToggleBookmark={handleToggleBookmark}
          onDeleteProject={handleDeleteProject}
          onProcessFormData={handleProcessFormData}
          onSearch={handleSearch}
          searchInput={searchInput}
          onCheckbox={handleCheckbox}
          onToggleForm={handleToggleForm}
          isFormOpen={isFormOpen}
          complexities={complexities}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          onToggleDisplayFilter={handleToggleDisplayFilter}
          filterOn={filterOn}
        />
      </Layout>
    </>
  );
}
