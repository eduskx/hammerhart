import Form from "@/components/Form";
import styled from "styled-components";

export default function ModalContent({
  onToggleForm,
  onAddProject,
  projects,
  onProcessFormData,
}) {
  return (
    <StyledContainer>
      <Form
        onToggleForm={onToggleForm}
        onAddProject={onAddProject}
        projects={projects}
        onProcessFormData={onProcessFormData}
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
