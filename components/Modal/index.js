import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import { newProjects } from "@/pages/_app.js";

export default function Modal({ id, projects, newProjects, setNewProjects }) {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  function handleDelete(id) {
    setNewProjects(newProjects.filter((project) => project.id !== id));
    router.push("/");
  }

  return (
    <ModalContainer>
      <ButtonContainer>
        <ModalButton onClick={() => setShowModal(true)}>Delete</ModalButton>
        {showModal &&
          createPortal(
            <ModalContent
              onClose={() => setShowModal(false)}
              id={id}
              newProjects={projects}
              setNewProjects={setNewProjects}
              onDelete={handleDelete}
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
