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
  const $thirdDesign = false;
  return (
    <>
      {inputFields.map((field, index) => (
        <StyledWrapper key={field.id}>
          <label htmlFor={field.id}></label>
          <StyledTextInput
            required
            id={field.id}
            type="text"
            name={`${label}`}
            placeholder={`${label} ${index + 1}`}
            defaultValue={field?.description || ""}
            $thirdDesign={$thirdDesign}
          />
          <StyledDeleteButton
            type="button"
            onClick={() => onRemoveField(field.id || index)}
          >
            <FaRegTrashAlt size={20} />
          </StyledDeleteButton>
        </StyledWrapper>
      ))}
      <StyledAddButton type="button" onClick={onAddField}>
        <MdAdd size={22} />
      </StyledAddButton>
    </>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
`;

const StyledAddButton = styled.button`
  background-color: var(--color-primary-2);
  color: var(--color-primary-1);
  width: fit-content;
  padding: 0 8px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  &:focus,
  &:hover {
    outline: 2px solid var(--color-primary-2);
    &:hover {
      background-color: var(--color-primary-1);
      color: var(--color-primary-2);
    }
  }
`;

const StyledDeleteButton = styled(StyledAddButton)`
  margin-left: 8px;
  padding: 4px 12px;
  width: fit-content;
  border-radius: 10px;
  &:focus,
  &:hover {
    outline: 1px solid var(--color-advanced);
    &:hover {
      background-color: var(--color-advanced);
      color: var(--color-primary-1);
    }
  }
`;
