import styled from "styled-components";

import ModalContent from "./ModalContent";

export default function EditButton({
  onToggleForm,
  isFormOpen,
  projects,
  onUpdateProject,
  onProcessFormData,
}) {
  return (
    <>
      <StyledEditButton type="button" onClick={onToggleForm}>
        Edit
      </StyledEditButton>
      {isFormOpen && (
        <ModalContent
          projects={projects}
          onUpdateProject={onUpdateProject}
          onProcessFormData={onProcessFormData}
          onToggleForm={onToggleForm}
        />
      )}
    </>
  );
}

const StyledEditButton = styled.button`
  text-decoration: none;
  all: unset;
  width: 4rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgba(58, 58, 58, 1);
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  &:focus,
  &:hover {
    outline: 1px solid white;
  }
`;
