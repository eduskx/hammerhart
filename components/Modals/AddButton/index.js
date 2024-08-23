import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import ModalContent from "@/components/Modals/AddButton/ModalContent";

export default function AddButton({
  onAddProject,
  onProcessFormData,
  onToggleForm,
  isFormOpen,
}) {
  return (
    <>
      <StyledAddButton
        type="button"
        $isFormOpen={isFormOpen}
        onClick={onToggleForm}
      >
        Create a Project <IoMdAdd size={28} />
      </StyledAddButton>
      {isFormOpen && (
        <ModalContent
          onAddProject={onAddProject}
          onProcessFormData={onProcessFormData}
          onToggleForm={onToggleForm}
        />
      )}
    </>
  );
}

const StyledAddButton = styled.button`
  all: unset;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 4px;
  width: 180px;
  height: 35px;
  color: var(--color-primary-2);
  background-color: var(--color-primary-1);
  border-radius: 10px;
  box-shadow: var(--box-shadow-2);
  margin-bottom: 50px;
  z-index: 110;
  transition: all ease-in .2s;
  &:focus,
  &:hover {
    color: var(--color-primary-1);
  background: var(--color-primary-2);
  outline-offset: -2px;
  outline: 2px solid var(--color-primary-1);
  transform: scale(1.2);
  }
  -webkit-tap-highlight-color: transparent;
`;
