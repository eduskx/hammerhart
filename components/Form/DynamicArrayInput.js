import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

export default function DynamicArrayInput({ label, state, setterFunction }) {
  function handleAddField() {
    setterFunction([...state, ""]);
    console.log(state);
  }

  function handleRemoveField(indexToRemove) {
    setterFunction(state.filter((_, index) => index !== indexToRemove));
  }

  function handleChange(index, event) {
    const newListItems = [...state];
    newListItems[index] = event.target.value;
    setterFunction(newListItems);
  }

  // useEffect(() => {
  //   setterFunction(state);
  // }, [state, setterFunction]);

  return (
    <>
      <label htmlFor={label}>{label}</label>
      {state.map((listItem, index) => (
        <StyledMaterialsWrapper key={index}>
          <StyledInput
            id={label}
            value={listItem}
            onChange={(event) => handleChange(index, event)}
            type="text"
          />
          <StyledButton onClick={() => handleRemoveField(index)}>
            <FaRegTrashAlt />
          </StyledButton>
        </StyledMaterialsWrapper>
      ))}
      <StyledAddButton type="button" onClick={handleAddField}>
        <MdAdd />
      </StyledAddButton>
    </>
  );
}
const StyledMaterialsWrapper = styled.div`
  width: 100%;
  display: flex;
  transition: all 0.3s ease 0s;
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
