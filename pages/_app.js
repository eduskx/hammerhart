import GlobalStyle from "@/styles";
import initialProjects from "@/lib/projects.js";
import useLocalStorageState from "use-local-storage-state";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useLocalStorageState("projects", {
    defaultValue: initialProjects,
  });

  const [formMaterials, setFormMaterials] = useLocalStorageState("materials", {
    defaultValue: [""],
  });

  const [formSteps, setFormSteps] = useLocalStorageState("steps", {
    defaultValue: [{ id: "1", description: "" }],
  });

  const [toggleFormModal, setToggleFormModal] = useState(false);

  function handleAddProject(newProject) {
    setProjects([newProject, ...projects]);
  }

  function handleDeleteProject(id, router) {
    setProjects(projects.filter((project) => project.id !== id));
    router.push("/");
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

  // functions for materials list

  function handleAddMaterialField() {
    setFormMaterials([...formMaterials, ""]);
  }

  function handleRemoveMaterialField(indexToRemove) {
    setFormMaterials(
      formMaterials.filter((_, index) => index !== indexToRemove)
    );
  }

  function handleMaterialChange(index, event) {
    const newMaterials = [...formMaterials];
    newMaterials[index] = event.target.value;
    setFormMaterials(newMaterials);
  }

  // functions for dynamic steps input fields

  function handleAddStepField() {
    setFormSteps([
      ...formSteps,
      { id: `${formSteps.length + 1}`, description: "" },
    ]);
  }

  function handleRemoveStepField(indexToRemove) {
    setFormSteps(
      formSteps
        .filter((_, index) => index !== indexToRemove)
        .map((step, index) => {
          return { ...step, id: `${index + 1}` };
        })
    );
  }

  function handleStepChange(index, event) {
    const newSteps = [...formSteps];
    newSteps[index].description = event.target.value;
    setFormSteps(newSteps);
  }

  // other functions

  function handleClearDynamicFields() {
    setFormMaterials([""]);
    setFormSteps([{ id: "1", description: "" }]);
  }

  function handleUpdateDynamicFields(projectData) {
    useEffect(() => {
      if (projectData) {
        setFormMaterials(projectData.materials);
        setFormSteps(projectData.steps);
      }
    }, projects);
  }

  function handleToggleForm() {
    setToggleFormModal(!toggleFormModal);
    handleClearDynamicFields();
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        projects={projects}
        onUpdateProject={handleUpdateProject}
        onAddProject={handleAddProject}
        onBookmark={handleToggleBookmark}
        onDeleteProject={handleDeleteProject}
        toggleFormModal={toggleFormModal}
        onToggleForm={handleToggleForm}
        onAddMaterialField={handleAddMaterialField}
        onRemoveMaterialField={handleRemoveMaterialField}
        onMaterialChange={handleMaterialChange}
        onAddStepField={handleAddStepField}
        onRemoveStepField={handleRemoveStepField}
        onStepChange={handleStepChange}
        formMaterials={formMaterials}
        formSteps={formSteps}
        onClearDynamicFields={handleClearDynamicFields}
        onUpdateDynamicFields={handleUpdateDynamicFields}
      />
    </Layout>
  );
}
