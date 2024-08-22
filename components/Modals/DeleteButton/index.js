import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "@/components/Modals/DeleteButton/ModalContent";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

export default function DeleteButton({ onDelete }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <StyledDeleteButton onClick={() => setShowModal(true)}>
        <FaRegTrashAlt />
      </StyledDeleteButton>
      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => setShowModal(false)}
            onDelete={onDelete}
          />,
          document.body
        )}
    </>
  );
}

export const StyledDeleteButton = styled.button`
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
  
  &:hover {
    color: var(--color-primary-1);
  background: var(--color-alert);
  outline-offset: -2px;
  outline: 2px solid var(--color-primary-1);
  transform: scale(1.2);
  }
`;
