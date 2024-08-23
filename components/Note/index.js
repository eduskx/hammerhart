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
        <StyledEditor
          value={currentNote}
          onTextChange={(event) => handleTextChange(event)}
          headerTemplate={customToolbar}
        />
      ) : (
        <StyledNotesTextField>
          {(currentNote && parse(currentNote)) || "..."}
        </StyledNotesTextField>
      )}
      <StyledButton onClick={toggleEditMode}>
        {isEditMode ? <TfiCheck /> : <SlNote />}
      </StyledButton>
    </StyledNotesWrapper>
  );
};
export default Note;


const StyledEditor = styled(Editor)`
width: 100%;
height: 100%;

p{
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-primary-2);
}
.ql-container.ql-snow {
  border-radius: 0 0 10px 10px;
  background-color: var( --color-secondary-2);
}
.ql-toolbar.ql-snow{
  border-radius: 10px 10px 0 0;
  background-color: var( --color-secondary-2);
}
`;

const StyledNotesWrapper = styled.div`
  display: flex;
  word-break: break-all;
  position: relative;
  width: 100%;
  max-height: 200px;
  

  
`;

const StyledButton = styled.button`
  all: unset;
  color: var(--color-primary-2);
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 5px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.5);
  }
`;

const StyledNotesTextField = styled.div`
  white-space: pre-wrap;
  width: 100%;
  min-height: 100px;
  color: var(--color-primay-2
    );
  padding:10px;
  background-color: var( --color-secondary-2);
  border-radius: 10px;

  p{
    font-weight: 400;
  }
`;
