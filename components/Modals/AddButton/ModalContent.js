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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: hsl(0, 0%, 0%, 80%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
