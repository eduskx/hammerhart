import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

export default function DynamicStepsInput({
  steps,
  onAddStepField,
  onRemoveStepField,
  onStepChange,
}) {
  return (
    <>
      <StyledLegend>Add Steps</StyledLegend>
      {steps.map((step, index) => (
        <StyledStepsWrapper key={step.id}>
          <label htmlFor={step.id}></label>
          <StyledInput
            required
            id={step.id}
            value={step.description}
            onChange={(event) => onStepChange(index, event)}
            type="text"
          />
          <StyledDeleteButton
            type="button"
            onClick={() => onRemoveStepField(index)}
          >
            <FaRegTrashAlt />
          </StyledDeleteButton>
        </StyledStepsWrapper>
      ))}
      <StyledAddButton type="button" onClick={onAddStepField}>
        <MdAdd />
      </StyledAddButton>
    </>
  );
}

const StyledLegend = styled.label`
  padding-top: 1rem;
`;

const StyledStepsWrapper = styled.div`
  width: 100%;
  display: flex;
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
