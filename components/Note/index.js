import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { SlNote } from "react-icons/sl";
import { TfiCheck } from "react-icons/tfi";
import { Editor } from "primereact/editor";
import parse from "html-react-parser";

const Note = ({ project }) => {
  const router = useRouter();
  const { id } = router.query;

  const [currentNote, setCurrentNote] = useLocalStorageState(`note-${id}`, "");
  const [isEditMode, setIsEditMode] = useLocalStorageState(
    `editMode-${id}`,
    false
  );
  const textareaFocus = useRef(null);

  useEffect(() => {
    if (isEditMode && textareaFocus.current) {
      textareaFocus.current.focus();
    }
  }, [isEditMode]);

  const handleTextChange = (event) => {
    setCurrentNote(event.htmlValue);
    console.log(event.textValue);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const customToolbar = (
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-list" value="ordered" />
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
  );

  return (
    <StyledNotesWrapper>
      {isEditMode ? (
        <Editor
          value={currentNote}
          onTextChange={(e) => handleTextChange(e)}
          style={{ width: "550px", height: "320px" }}
          headerTemplate={customToolbar}
        />
      ) : (
        <StyledNotesTextField>
          {(currentNote && parse(currentNote)) || "Enter your notes here..."}
        </StyledNotesTextField>
      )}
      <StyledButton onClick={toggleEditMode}>
        {isEditMode ? <TfiCheck /> : <SlNote />}
      </StyledButton>
    </StyledNotesWrapper>
  );
};
export default Note;

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
  padding-left: 20px;
`;
