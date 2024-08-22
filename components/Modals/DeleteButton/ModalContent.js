import styled from "styled-components";

export default function ModalContent({ onClose, onDelete }) {
  return (
    <StyledModalContentContainer>
      <StyledConfirmationText>
        Are you sure you want to delete this project?
      </StyledConfirmationText>
      <StyledButtonsContainer>
        <StyledButton type="button" onClick={onClose}>
          Cancel
        </StyledButton>
        <StyledButton type="button" onClick={onDelete}>
          Delete
        </StyledButton>
      </StyledButtonsContainer>
    </StyledModalContentContainer>
  );
}

const StyledModalContentContainer = styled.div`
  border-radius: 10px;
  width: fit-content;
  text-align: center;
  background-color: #564647;
  padding: 2rem 4rem;
  margin: auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 50%;
`;

const StyledConfirmationText = styled.p`
  color: white;
  font-size: 18px;
  padding-bottom: 1rem;
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const StyledButton = styled.button`
  font-size: 16px;
  cursor: pointer;
  border: none;
  width: 4rem;
  height: 2rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  &:focus,
  &:hover {
    outline: 1px solid white;
  }
`;
