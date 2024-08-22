import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ModalContent from "@/components/Modals/DeleteButton/ModalContent";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

export default function DeleteButton({
  onDelete,
  isDeleteOpen,
  onToggleDeleteModal,
}) {
  // const [isModalOpen, setisModalOpen] = useState(false);
  // useEffect(() => {
  //   document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  // }, [isModalOpen]);

  // function handleToggleModal() {
  //   setisModalOpen(!isModalOpen);
  // }

  return (
    <>
      <StyledDeleteButton onClick={onToggleDeleteModal}>
        <FaRegTrashAlt />
      </StyledDeleteButton>
      {isDeleteOpen &&
        createPortal(
          <ModalContent
            onDelete={onDelete}
            isDeleteOpen={isDeleteOpen}
            onToggleDeleteModal={onToggleDeleteModal}
          />,
          document.body
        )}
    </>
  );
}

export const StyledDeleteButton = styled.button`
  all: unset;
  width: 4rem;
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
