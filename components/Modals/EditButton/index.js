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
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  cursor: pointer;
  color: var(--color-primary-2);
  background: var(--color-primary-1);
  border-radius: 10px;
  box-shadow: var(--box-shadow-2);
  transition: all ease-in .2s;
  &:focus,
  &:hover {
    color: var(--color-primary-1);
  background: var(--color-primary-2);
  outline-offset: -2px;
  outline: 2px solid var(--color-primary-1);
  transform: scale(1.2);

  }
`;
