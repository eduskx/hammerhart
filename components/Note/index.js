import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Note = ({ project }) => {
  const [currentNote, setCurrentNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const textareaFocus = useRef(null);

  if (!project.notes) {
    project.notes = [];
  }

  function handleInputChange(event) {
    setCurrentNote(event.target.value);
    project.notes[0] = event.target.value;
  }

  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  useEffect(() => {
    if (isEditing && textareaFocus.current) {
      textareaFocus.current.focus();
    }
  }, [isEditing]);

  return (
    <StyledNotesWrapper>
      <StyledTitleButtonWrapper>
        <h2>Notes</h2>
        <button onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
      </StyledTitleButtonWrapper>
      {isEditing ? (
        <textarea
          ref={textareaFocus}
          value={currentNote}
          onChange={handleInputChange}
          rows="4"
          cols="50"
        />
      ) : (
        <div>
          {project.notes[0] &&
            project.notes[0]
              .split("\n")
              .map((line, index) => (
                <StyledNotesText key={index}>{line}</StyledNotesText>
              ))}
        </div>
      )}
    </StyledNotesWrapper>
  );
};

export default Note;

const StyledNotesWrapper = styled.div`
width: 90%;
`;

const StyledTitleButtonWrapper = styled.div`
  display: flex;
  width: 90%;
`;

const StyledNotesText = styled.p`
  text-align: start;
  min-width: 90%;

  color: #ffffff;
  @media screen and (min-width: 640px) {
    list-style-position: inside;
    padding: 0;
    text-align: start;
  }
`;
