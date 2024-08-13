import Form from "@/components/Form";
import styled from "styled-components";

export default function ModalContent({
  onToggleForm,
  projects,
  onAddProject,
  onAddMaterialField,
  onRemoveMaterialField,
  onMaterialChange,
  onAddStepField,
  onRemoveStepField,
  onStepChange,
  formMaterials,
  formSteps,
  onClearDynamicFields,
}) {
  return (
    <StyledContainer>
      <Form
        onToggleForm={onToggleForm}
        onAddProject={onAddProject}
        projects={projects}
        formMaterials={formMaterials}
        formSteps={formSteps}
        onClearDynamicFields={onClearDynamicFields}
        onAddMaterialField={onAddMaterialField}
        onRemoveMaterialField={onRemoveMaterialField}
        onMaterialChange={onMaterialChange}
        onAddStepField={onAddStepField}
        onRemoveStepField={onRemoveStepField}
        onStepChange={onStepChange}
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1000;
  background-color: hsl(0, 0%, 0%, 60%);
  overflow-y: auto;
  padding: 4rem 0;
`;
