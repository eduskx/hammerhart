import Form from "@/components/Form";
import styled from "styled-components";

export default function ModalContent({
  onToggleForm,
  projects,
  setNewProjects,
  formMaterials,
  setFormMaterials,
  formSteps,
  setFormSteps,
}) {
  return (
    <StyledContainer>
      <Form
        onToggleForm={onToggleForm}
        projects={projects}
        setNewProjects={setNewProjects}
        formMaterials={formMaterials}
        setFormMaterials={setFormMaterials}
        formSteps={formSteps}
        setFormSteps={setFormSteps}
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
  z-index: 100;
  background-color: hsl(0, 0%, 0%, 60%);
`;
