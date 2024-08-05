import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.js";
import styled from "styled-components";

export default function Modal({ id, projects, setNewProjects }) {
  const [showModal, setShowModal] = useState(false);
  console.log("Model: ", setNewProjects);

  return (
    <ModalContainer>
      <ModalButton onClick={() => setShowModal(true)}>Delete</ModalButton>
      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => setShowModal(false)}
            id={id}
            newProjects={projects}
            setNewProjects={setNewProjects}
          />,
          document.body
        )}
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
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
