import styled from "styled-components";

export default function ModalContent({ onDelete, onToggleDeleteModal }) {
  return (
    <StyledContainer>
      <StyledContentWrapper>
        <StyledConfirmationText>
          Are you sure you want to delete this project?
        </StyledConfirmationText>
        <StyledButtonWrapper>
          <StyledButton type="button" onClick={onToggleDeleteModal}>
            No
          </StyledButton>
          <StyledButton type="button" onClick={onDelete}>
            Yes
          </StyledButton>
        </StyledButtonWrapper>
      </StyledContentWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: hsl(0, 0%, 0%, 60%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 32px;
`;

const StyledConfirmationText = styled.h2`
  width: 80%;
  text-align: center;
  color: var(--color-primary-1);
`;

const StyledContentWrapper = styled.div`
  background-color: var(--color-primary-3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 32px;
  padding: 64px 0;
`;

const StyledButton = styled.button`
  border: none;
  color: var(--color-primary-1);
  background-color: var(--color-secondary-2);
  border-radius: 10px;
  padding: 8px 32px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: var(--color-primary-2);
    background-color: var(--color-primary-1);
    outline-offset: -3px;
    outline: 2px solid var(--color-primary-1);
  }
`;
