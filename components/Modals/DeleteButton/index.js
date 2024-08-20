import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "@/components/Modals/DeleteButton/ModalContent";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Modal({ onDelete }) {
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
  all: unset;
  width: 3rem;
  height: 2rem;
  display: flex;
  margin: 0;

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

    &:hover {
      background-color: #e52e2ed4;
      color: #fff;
      transform: translateY(-3px);
    }
  }
`;