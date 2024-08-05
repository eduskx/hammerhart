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
    <ModalContainer>
      <ModalContentContainer>
        <TextContainer>
          <ModalText>Are you sure you want to delete this project?</ModalText>
        </TextContainer>
        <ButtonContainer>
          <ModalButton onClick={() => onDelete(id)}>Delete</ModalButton>
          <ModalButton onClick={onClose}>Close</ModalButton>
        </ButtonContainer>
      </ModalContentContainer>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
`;

const ModalContentContainer = styled.div`
  position: absolute;
  margin-top: 0rem;
  margin-bottom: 20rem;
  margin-left: 8rem;
  margin-right: 3rem;
  border: 0.15rem solid black;
  border-radius: 1rem;
  background-color: lightgray;
  padding: 1rem;
  width: 25rem;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ModalText = styled.p`
  display: flex;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 1.5rem;
  gap: 1rem;
  justify-content: center;
  :hover {
    background-color: gray;
  }
`;

const ModalButton = styled.button`
  display: flex;
  border-radius: 0.5rem;
  border-radius: 0.3rem;
  border: 0.1rem solid black;
  width: fit-content;
`;
