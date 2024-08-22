import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

export default function DynamicInputFields({
  label,
  inputFields,
  onAddField,
  onRemoveField,
}) {
  return (
    <>
      {inputFields.map((field, index) => (
        <StyledWrapper key={field.id}>
          <label htmlFor={field.id}></label>
          <StyledDynamicInput
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
`;

const StyledDynamicInput = styled.input`
  min-height: 35px;
  width: 100%;
  background-color: var(--color-primary-1);
  color: var(--color-primary-2);
  border: 2px solid var(--color-primary-2);
  padding: 8px;
  border-radius: 10px;
  margin-bottom: 8px;
  &:focus {
    outline-offset: -3px;
    outline: 2px solid var(--color-primary-2);
  }
  &::placeholder {
    color: var(--color-primary-2-light);
    opacity: 1; /* Firefox */
  }
  &::-ms-input-placeholder {
    /* Edge 12 -18 */
    color: var(--color-primary-2-light);
  }
`;

const StyledAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary-2);
  color: var(--color-primary-1);
  width: 45px;
  height: 35px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    &:hover {
      outline-offset: -3px;
      outline: 2px solid var(--color-primary-2);
      &:hover {
        background-color: var(--color-primary-1);
        color: var(--color-primary-2);
      }
    }
  }
`;

const StyledDeleteButton = styled(StyledAddButton)`
  margin-top: 0;
  margin-left: 8px;
`;
