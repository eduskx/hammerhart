import EditPage from "@/pages/projects/[id]/edit";
import styled from "styled-components";

export default function ModalContent({
  projects,
  onUpdateProject,
  onProcessFormData,
  onToggleForm,
}) {
  return (
    <StyledContainer>
      <EditPage
        projects={projects}
        onUpdateProject={onUpdateProject}
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
