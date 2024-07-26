import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

export default function DynamicStepsInput({ steps, setSteps }) {
  function handleAddField() {
    setSteps([...steps, { id: `${steps.length + 1}`, description: "" }]);
  }

  function handleRemoveField(idToRemove) {
    setSteps(steps.filter((steps) => steps.id !== idToRemove));
  }

  function handleChange(index, event) {
    const newSteps = [...steps];
    newSteps[index].description = event.target.value;
    setSteps(newSteps);
  }

  // useEffect(() => {
  //   setSteps(steps);
  // }, [steps, setSteps]);

  return (
    <>
      <label htmlFor={steps}>Add Steps</label>
      {steps.map((step, index) => (
        <StyledStepsWrapper key={step.id}>
          <StyledInput
            id={steps}
            value={step.description}
            onChange={(event) => handleChange(index, event)}
            type="text"
          />
          <StyledButton onClick={() => handleRemoveField(steps.id)}>
            <FaRegTrashAlt />
          </StyledButton>
        </StyledStepsWrapper>
      ))}
      <StyledAddButton type="button" onClick={handleAddField}>
        <MdAdd />
      </StyledAddButton>
    </>
  );
}
const StyledStepsWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const StyledButton = styled.button`
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
      box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
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
