import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import ModalContent from "@/components/Modals/AddButton/ModalContent";

export default function AddButton({
  onAddProject,
  projects,
  onProcessFormData,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleToggleForm() {
    setIsFormOpen(!isFormOpen);
    if (!isFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  return (
    <>
      <StyledAddButton
        type="button"
        $isFormOpen={isFormOpen}
        onClick={handleToggleForm}
      >
        <IoMdAdd size={32} />
      </StyledAddButton>
      {isFormOpen && (
        <ModalContent
          onToggleForm={handleToggleForm}
          onAddProject={onAddProject}
          projects={projects}
          onProcessFormData={onProcessFormData}
        />
      )}
    </>
  );
}

const StyledAddButton = styled.button`
  position: fixed;
  bottom: 10%;
  right: 10%;
  z-index: 100000;
  padding: 0.5rem;
  border: 2px solid white;
  border-radius: 50%;
  background-color: #6f5a51;
  color: white;
  cursor: pointer;
  display: ${({ $isFormOpen }) => ($isFormOpen ? "none" : "inline")};
`;
