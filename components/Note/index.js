import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { SlNote } from "react-icons/sl";
import { TfiCheck } from "react-icons/tfi";

const Note = ({ project }) => {
  const router = useRouter();
  const { id } = router.query;

  const [currentNote, setCurrentNote] = useLocalStorageState(`note-${id}`, "");
  const [isEditMode, setIsEditMode] = useState(false);
  const textareaFocus = useRef(null);

  useEffect(() => {
    if (isEditMode && textareaFocus.current) {
      textareaFocus.current.focus();
    }
  }, [isEditMode]);

  const handleInputChange = (event) => {
    setCurrentNote(event.target.value);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <StyledNotesWrapper>
      <StyledTitleButtonWrapper>
        <StyledNotesTitle>Notes</StyledNotesTitle>
        <StyledButton onClick={toggleEditMode}>
          {isEditMode ? <TfiCheck /> : <SlNote />}
        </StyledButton>
      </StyledTitleButtonWrapper>
      {isEditMode ? (
        <StyledTextarea
          ref={textareaFocus}
          value={currentNote}
          onChange={handleInputChange}
          rows="4"
          cols="50"
        />
      ) : (
        <StyledNotesTextField>
          {currentNote ||
            ((project.notes && project.notes[0]) || "")
              .split("\n")
              .map((line, index) => (
                <StyledNotesText key={index}>{line}</StyledNotesText>
              ))}
        </StyledNotesTextField>
      )}
    </StyledNotesWrapper>
  );
};

export default Note;
const StyledTextarea = styled.textarea`
  all: unset;
  margin-top: 1rem;
  width: 100%;
  color: rgba(58, 58, 58, 1);
  resize: none;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  &:focus,
  &:hover {
    outline: 1px solid white;
  }
`;

const StyledNotesWrapper = styled.div`
  width: 90%;
  word-break: break-all;
`;
const StyledTitleButtonWrapper = styled.div`
  border-radius: 2px;
  display: flex;
  padding-left: 0.5rem;
  align-items: center;
  height: 25px;
  width: 100%;
  color: rgba(58, 58, 58, 1);
  background: rgba(255, 255, 255, 0.5);
`;
const StyledNotesTitle = styled.p`
  padding-right: 1rem;
`;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.5);
  }
`;

const StyledNotesText = styled.p`
  text-align: start;
  width: 90%;
  white-space: pre-wrap;
`;
const StyledNotesTextField = styled.div`
  padding: 0.5rem 0 0.5rem 0.5rem;
  white-space: pre-wrap;
  width: 100%;
`;
