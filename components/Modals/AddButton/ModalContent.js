import Form from "@/components/Form";
import styled from "styled-components";

export default function ModalContent({
  onAddProject,
  onProcessFormData,
  onToggleForm,
}) {
  return (
    <StyledContainer>
      <Form
        onAddProject={onAddProject}
        onProcessFormData={onProcessFormData}
        onToggleForm={onToggleForm}
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
