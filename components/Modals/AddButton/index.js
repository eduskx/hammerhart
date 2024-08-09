import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "@/components/Modals/AddButton/ModalContent";

export default function AddButton({
  onToggleForm,
  toggleFormModal,
  projects,
  setNewProjects,
  formMaterials,
  setFormMaterials,
  formSteps,
  setFormSteps,
}) {
  // const [showFormModal, setShowFormModal] = useState(false);

  return (
    <>
      <StyledAddButton type="button" onClick={onToggleForm}>
        <IoMdAdd size={32} />
      </StyledAddButton>
      {toggleFormModal &&
        createPortal(
          <ModalContent
            onToggleForm={onToggleForm}
            projects={projects}
            setNewProjects={setNewProjects}
            formMaterials={formMaterials}
            setFormMaterials={setFormMaterials}
            formSteps={formSteps}
            setFormSteps={setFormSteps}
          />,
          document.body
        )}
    </>
  );
}

const StyledAddButton = styled.button`
  position: fixed;
  bottom: 5%;
  right: 10%;
  z-index: 10;
  padding: 0.5rem;
  border: 2px solid white;
  border-radius: 50%;
  background-color: #6f5a51;
  color: white;
  cursor: pointer;
`;