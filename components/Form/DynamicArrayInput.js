import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

export default function DynamicArrayInput({
  label,
  materials,
  onAddMaterialField,
  onRemoveMaterialField,
  onMaterialChange,
}) {
  return (
    <>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      {materials.map((element, index) => (
        <StyledMaterialsWrapper key={index}>
          <StyledInput
            required
            id={label}
            value={element}
            onChange={(event) => onMaterialChange(index, event)}
            type="text"
          />
          <StyledDeleteButton
            type="button"
            onClick={() => onRemoveMaterialField(index)}
          >
            <FaRegTrashAlt />
          </StyledDeleteButton>
        </StyledMaterialsWrapper>
      ))}
      <StyledAddButton type="button" onClick={onAddMaterialField}>
        <MdAdd />
      </StyledAddButton>
    </>
  );
}

const StyledLabel = styled.label`
  padding-top: 1rem;
`;

const StyledMaterialsWrapper = styled.div`
  width: 100%;
  display: flex;
  transition: all 0.3s ease 0s;
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
const StyledInput = styled.input`
  all: unset;
  width: 100%;

  color: rgba(58, 58, 58, 1);
  margin-bottom: 0.5rem;
  margin-right: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  &:focus,
  &:hover {
    outline: 1px solid white;
  }
`;
