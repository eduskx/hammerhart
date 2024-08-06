import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "@/components/Modal/ModalContent";
import styled from "styled-components";

export default function Modal({ onDelete }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContainer>
      <ButtonContainer>
        <ModalButton onClick={() => setShowModal(true)}>Delete</ModalButton>
        {showModal &&
          createPortal(
            <ModalContent
              onClose={() => setShowModal(false)}
              onDelete={onDelete}
            />,
            document.body
          )}
      </ButtonContainer>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
  position: absolute;
`;

const ButtonContainer = styled.div`
  width: 20rem;
  text-align: right;
  :hover {
    background-color: gray;
  }
`;

const ModalButton = styled.button`
  border-radius: 0.3rem;
  border: 0.1rem solid black;
  background-color: lightgray;
  padding: 0.3rem;
  margin: 1rem;
`;
