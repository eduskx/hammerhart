import { useRouter } from "next/router";
import Form from "@/components/Form";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function EditPage({
  projects,
  onUpdateProject,
  onAddMaterialField,
  onRemoveMaterialField,
  onMaterialChange,
  onAddStepField,
  onRemoveStepField,
  onStepChange,
  formMaterials,
  formSteps,
  onUpdateDynamicFields,
  onClearDynamicFields,
  onToggleForm,
}) {
  const router = useRouter();
  const { id } = router.query;

  const projectData = projects.find((project) => project.id === id);

  onUpdateDynamicFields(projectData);

  async function editProject(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newProject = Object.fromEntries(formData);

    if (projectData.imageUrl) {
      formData.append("currentImageUrl", projectData.imageUrl);
    }

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const { url } = await response.json();

    newProject.id = id;
    newProject.materials = formMaterials;
    newProject.steps = formSteps;
    newProject.imageUrl = url;

    onUpdateProject(newProject);

    router.push(`/projects/${id}`);
  }

  return (
    <>
      <StyledHeader>{`Edit project`}</StyledHeader>
      <Form
        onToggleForm={onToggleForm}
        onSubmit={editProject}
        formMaterials={formMaterials}
        formSteps={formSteps}
        defaultData={projectData}
        isEditMode={true}
        id={id}
        onAddMaterialField={onAddMaterialField}
        onRemoveMaterialField={onRemoveMaterialField}
        onMaterialChange={onMaterialChange}
        onAddStepField={onAddStepField}
        onRemoveStepField={onRemoveStepField}
        onStepChange={onStepChange}
        onClearDynamicFields={onClearDynamicFields}
      />
    </>
  );
}

const StyledHeader = styled.h2`
  text-align: center;
  margin-top: 1rem;
  color: white;
`;
