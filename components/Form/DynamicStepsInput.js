import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
<<<<<<< HEAD

export default function DynamicStepsInput({ setSteps }) {
  const [objects, setObjects] = useState([{ id: "1", description: "" }]);
=======
>>>>>>> main

export default function DynamicStepsInput({ steps, setSteps }) {
  function handleAddField() {
    setSteps([...steps, { id: `${steps.length + 1}`, description: "" }]);
  }

  function handleRemoveField(indexToRemove) {
    setSteps(
      steps
        .filter((_, index) => index !== indexToRemove)
        .map((step, index) => {
          return { ...step, id: `${index + 1}` };
        })
    );
  }

  function handleChange(index, event) {
    const newSteps = [...steps];
    newSteps[index].description = event.target.value;
    setSteps(newSteps);
  }

  return (
    <>
      <StyledLabel htmlFor={steps}>Add Steps</StyledLabel>
      {steps.map((step, index) => (
        <StyledStepsWrapper key={step.id}>
          <StyledInput
            required
            id={steps}
            value={step.description}
            onChange={(event) => handleChange(index, event)}
            type="text"
          />
<<<<<<< HEAD
          <StyledButton onClick={() => handleRemoveField(object.id)}>
            <FaRegTrashAlt />
          </StyledButton>
=======
          <StyledDeleteButton
            type="button"
            onClick={() => handleRemoveField(index)}
          >
            <FaRegTrashAlt />
          </StyledDeleteButton>
>>>>>>> main
        </StyledStepsWrapper>
      ))}
      <StyledAddButton type="button" onClick={handleAddField}>
        <MdAdd />
      </StyledAddButton>
    </>
  );
}
<<<<<<< HEAD
const StyledStepsWrapper = styled.div`
  width: 100%;
  display: flex;
=======

const StyledLabel = styled.label`
  padding-top: 1rem;
>>>>>>> main
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
<<<<<<< HEAD

=======
>>>>>>> main
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
<<<<<<< HEAD

    &:hover {
      background-color: #e52e2ed4;
      box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
=======
    &:hover {
      background-color: #e52e2ed4;
>>>>>>> main
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
<<<<<<< HEAD

=======
>>>>>>> main
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
<<<<<<< HEAD

=======
>>>>>>> main
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
<<<<<<< HEAD

=======
>>>>>>> main
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
