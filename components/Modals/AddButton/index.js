import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "@/components/Modals/AddButton/ModalContent";

export default function AddButton({
  onToggleForm,
  toggleFormModal,
  projects,
  onAddProject,
  onAddMaterialField,
  onRemoveMaterialField,
  onMaterialChange,
  onAddStepField,
  onRemoveStepField,
  onStepChange,
  formMaterials,
  formSteps,
  onClearDynamicFields,
}) {
  // const [showFormModal, setShowFormModal] = useState(false);

  return (
    <>
      <StyledAddButton type="button" onClick={onToggleForm}>
        <IoMdAdd size={32} />
      </StyledAddButton>
      {toggleFormModal && (
        <ModalContent
          onToggleForm={onToggleForm}
          onAddProject={onAddProject}
          projects={projects}
          formMaterials={formMaterials}
          formSteps={formSteps}
          onClearDynamicFields={onClearDynamicFields}
          onAddMaterialField={onAddMaterialField}
          onRemoveMaterialField={onRemoveMaterialField}
          onMaterialChange={onMaterialChange}
          onAddStepField={onAddStepField}
          onRemoveStepField={onRemoveStepField}
          onStepChange={onStepChange}
        />
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
