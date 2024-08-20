import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";
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
  gap: 4px;
  width: 180px;
  height: 35px;
  color: var(--color-primary-2);
  background-color: var(--color-primary-1);
  border-radius: 10px;
  box-shadow: var(--box-shadow-2);
  margin-bottom: 50px;
  z-index: 110;
`;
