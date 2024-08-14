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
      {isEditMode ? (
        <StyledTextarea
          ref={textareaFocus}
          value={currentNote}
          onChange={handleInputChange}
          rows="5"
          cols="50"
          placeholder="Enter your notes here..."
        />
      ) : (
        <StyledNotesTextField>
          {currentNote || "Enter your notes here..."}
        </StyledNotesTextField>
      )}
      <StyledButton onClick={toggleEditMode}>
        {isEditMode ? <TfiCheck /> : <SlNote />}
      </StyledButton>
    </StyledNotesWrapper>
  );
};
export default Note;
const StyledTextarea = styled.textarea`
  all: unset;
  width: 90%;
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
  display: flex;
  word-break: break-all;
  position: relative;
`;

const StyledButton = styled.button`
  all: unset;
  color: white;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0.3rem;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.5);
  }
`;

const StyledNotesTextField = styled.div`
  white-space: pre-wrap;
  width: 100%;
  color: white;
`;
