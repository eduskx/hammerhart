import { useRouter } from "next/router";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { SlNote } from "react-icons/sl";
import { TfiCheck } from "react-icons/tfi";
import { Editor } from "primereact/editor";
import parse from "html-react-parser";

const Note = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  const [currentNote, setCurrentNote] = useLocalStorageState(`note-${id}`, "");
  const [isEditMode, setIsEditMode] = useLocalStorageState(
    `editMode-${id}`,
    false
  );

  const handleTextChange = (event) => {
    setCurrentNote(event.htmlValue);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const customToolbar = (
    <span className="ql-formats">
      <button className="ql-bold" aria-label="bold" />
      <button className="ql-italic" aria-label="italic" />
      <button className="ql-underline" aria-label="underline" />
      <button className="ql-list" aria-label="list" value="ordered" />
      <select className="ql-color" aria-label="color" />
      <select className="ql-background" aria-label="background-color" />
    </span>
  );

  return (
    <StyledNotesWrapper>
      {isEditMode ? (
        <Editor
          value={currentNote}
          onTextChange={(event) => handleTextChange(event)}
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
