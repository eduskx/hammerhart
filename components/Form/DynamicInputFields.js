import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { StyledTextInput } from ".";

export default function DynamicInputFields({
  label,
  inputFields,
  onAddField,
  onRemoveField,
}) {
  return (
    <>
      {inputFields.map((field, index) => (
        <StyledMaterialsWrapper key={field.id}>
          <label htmlFor={field.id}></label>
          <StyledTextInput
            required
            id={field.id}
            type="text"
            name={`${label}`}
            placeholder={`${label} ${index + 1}`}
            defaultValue={field?.description || ""}
          />
          <StyledDeleteButton
            type="button"
            onClick={() => onRemoveField(field.id || index)}
          >
            <FaRegTrashAlt />
          </StyledDeleteButton>
        </StyledMaterialsWrapper>
      ))}
      <StyledAddButton type="button" onClick={onAddField}>
        <MdAdd />
      </StyledAddButton>
    </>
  );
}

const StyledTitle = styled.p`
  padding-top: 1rem;
`;

const StyledMaterialsWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 8px;
`;

const StyledDeleteButton = styled.button`
  all: unset;
  width: 3rem;
  height: 2rem;
  display: flex;
  margin: 0;

  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgba(58, 58, 58, 1);
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  &:focus,
  &:hover {
    outline: 1px solid white;

    &:hover {
      background-color: #e52e2ed4;
      color: #fff;
      transform: translateY(-3px);
    }
  }
`;
const StyledAddButton = styled.button`
  all: unset;
  width: 100%;
  height: 2rem;
  display: flex;
  margin: 0;

  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgba(58, 58, 58, 1);
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  &:focus,
  &:hover {
    outline: 1px solid white;

    &:hover {
      background-color: #2e8de5d4;
      box-shadow: 0px 15px 20px rgba(6, 45, 61, 0.4);
      color: #fff;
      transform: translateY(-3px);
    }
  }
`;
