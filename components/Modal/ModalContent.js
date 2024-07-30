import styled from "styled-components";

import { useRouter } from "next/router";

export default function ModalContent({
  onClose,
  id,
  newProjects,
  setNewProjects,
}) {
  const router = useRouter();

  const onDelete = (id) => {
    setNewProjects(newProjects.filter((project) => project.id !== id));
    router.push("/");
  };

  return (
    <div>
      <ModalContentContainer>
        <ModalText>Are you sure you want to delete this project?</ModalText>
        <ButtonContainer>
          <ModalButton onClick={() => onDelete(id)}>Delete</ModalButton>
          <ModalButton onClick={onClose}>Close</ModalButton>
        </ButtonContainer>
      </ModalContentContainer>
    </div>
  );
}

const ModalContentContainer = styled.div`
  background-color: yellow;
  position: absolute;
  top: 32rem;
  justify-self: center;
  margin: 2rem 2rem;
  border: 0.15rem solid black;
  border-radius: 1rem;
  background-color: lightgray;
  width: fit-content;
  padding: 4rem;
`;

const ModalText = styled.p`
  padding: 1rem;
`;

const ModalButton = styled.button`
  border-radius: 0.5rem;
  border-radius: 0.3rem;
  border: 0.1rem solid black;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  :hover {
    background-color: gray;
  }
`;
