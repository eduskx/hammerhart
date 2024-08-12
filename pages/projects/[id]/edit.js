import { useRouter } from "next/router";
import Form from "@/components/Form";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Edit({
  projects,
  onUpdateProject,
  onAddMaterialField,
  onRemoveMaterialField,
  onMaterialChange,
  onAddStepField,
  onRemoveStepField,
  onStepChange,
}) {
  const [formMaterials, setFormMaterials] = useState([""]);

  const [formSteps, setFormSteps] = useState([{ id: "1", description: "" }]);

  const router = useRouter();
  const { id } = router.query;

  const projectData = projects.find((project) => project.id === id);

  useEffect(() => {
    if (projectData) {
      setFormMaterials(projectData.materials);
      setFormSteps(projectData.steps);
    }
  }, [projects]);

  function editProject(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newProject = Object.fromEntries(formData);
    newProject.id = id;
    newProject.materials = formMaterials;
    newProject.steps = formSteps;
    onUpdateProject(newProject);
    router.push(`/projects/${id}`);
  }

  return (
    <>
      <StyledHeader>{`Edit "${projectData?.title}"`}</StyledHeader>
      <Form
        onSubmit={editProject}
        formMaterials={formMaterials}
        setFormMaterials={setFormMaterials}
        formSteps={formSteps}
        setFormSteps={setFormSteps}
        defaultData={projectData}
        isEditMode={true}
        id={id}
        onAddMaterialField={onAddMaterialField}
        onRemoveMaterialField={onRemoveMaterialField}
        onMaterialChange={onMaterialChange}
        onAddStepField={onAddStepField}
        onRemoveStepField={onRemoveStepField}
        onStepChange={onStepChange}
      />
    </>
  );
}

const StyledHeader = styled.h2`
  text-align: center;
  margin-top: 1rem;
  color: white;
`;
