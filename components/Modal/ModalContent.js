import projects from "@/lib/projects";
import styled from "styled-components";

export default function ModalContent({ onClose, onDelete }) {
  const onDelete(project.id) {
    const newList = projects.filter((project) => project.id !== id);
  }
  return (
    <div>
      <ModalContainer>
        <ModalText>Are you sure about Deleting the project?</ModalText>
        <button onClick={() => onDelete()}>Delete</button>
        <button onClick={onClose}>Close</button>
      </ModalContainer>
    </div>
  );
}

const ModalContainer = styled.div`
  background-color: yellow;
`;

const ModalText = styled.p`
  border: 2px solid black;
  border-radius: 20px;
  background-color: lightgray;
  width: fit-content;
  padding: 2rem;
`;
