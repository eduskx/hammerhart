import styled from "styled-components";
import { useRef } from "react";
import DynamicArrayInput from "@/components/Form/DynamicArrayInput";
import DynamicStepsInput from "@/components/Form/DynamicStepsInput";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function Form({
  onToggleForm,
  setNewProjects,
  projects,
  defaultData,
  onSubmit,
  formMaterials,
  setFormMaterials,
  formSteps,
  setFormSteps,
  isEditMode,
  id,
}) {
  let formRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newProject = Object.fromEntries(formData);

    const highestProjectId = projects.reduce(
      (prev, current) => (prev.id > current.id ? prev.id : current.id),
      "0"
    );

    newProject.id = `${Number(highestProjectId) + 1}`;
    newProject.materials = formMaterials;
    newProject.steps = formSteps;

    // swapped ...projects and newProject because we added toReversed() in list mapping
    setNewProjects([...projects, newProject]);

    event.target.reset();
    setFormMaterials([""]);
    setFormSteps([{ id: "1", description: "" }]);

    onToggleForm();
  }

  function handleClearForm() {
    formRef.reset();
    setFormMaterials([""]);
    setFormSteps([{ id: "1", description: "" }]);
  }

  return (
    <StyledForm
      ref={(element) => (formRef = element)}
      onSubmit={onSubmit || handleSubmit}
    >
      <StyledCloseButton type="button" onClick={onToggleForm}>
        <IoMdClose color="darkred" size={28} />
      </StyledCloseButton>

      <label htmlFor="title">Title</label>
      <StyledInput
        required
        id="title"
        name="title"
        type="text"
        defaultValue={defaultData?.title}
        maxLength={50}
      />

      <label htmlFor="imageUrl">Image</label>
      <StyledInput
        id="imageUrl"
        name="imageUrl"
        type="text"
        defaultValue={
          defaultData?.imageUrl ||
          "https://images.unsplash.com/photo-1657434743747-07cbb4ddd5ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      <label htmlFor="description">Description</label>
      <StyledTextarea
        id="description"
        name="description"
        rows={5}
        cols={30}
        defaultValue={defaultData?.description}
      />

      <label htmlFor="duration">Duration</label>
      <StyledInput
        required
        id="duration"
        name="duration"
        type="text"
        defaultValue={defaultData?.duration}
      />

      <StyledDropDownWrapper>
        <label htmlFor="complexity">Complexity: </label>
        <StyledDropdown
          required
          id="complexity"
          name="complexity"
          defaultValue={defaultData?.complexity}
        >
          <option value="">Please select a complexity level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </StyledDropdown>
      </StyledDropDownWrapper>

      <DynamicArrayInput
        label="Add Materials"
        state={formMaterials}
        setterFunction={setFormMaterials}
      />
      <DynamicStepsInput steps={formSteps} setSteps={setFormSteps} />

      <StyledButtonWrapper>
        {!isEditMode && (
          <StyledClearButton type="button" onClick={handleClearForm}>
            Clear
          </StyledClearButton>
        )}
        {isEditMode && (
          <StyledCancelLink href={`/projects/${id}/`}>Cancel</StyledCancelLink>
        )}
        <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
      </StyledButtonWrapper>
    </StyledForm>
  );
}

const StyledTextarea = styled.textarea`
  all: unset;
  width: 100%;
  word-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  resize: none;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  &:focus,
  &:hover {
    outline: 1px solid white;
  }
`;

const StyledForm = styled.form`
  @media screen and (min-width: 640px) {
    color: white;
    display: table;
    margin: 1rem auto 1rem auto;
    width: 450px;
    padding: 2rem;
    background: #a48476;
    box-shadow: 1px 1px 6px 1px #00000072;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-self: center;
  }
  color: white;
  display: table;
  margin: 1rem auto 1rem auto;
  width: 350px;
  padding: 2rem;
  background: #a48476;
  box-shadow: 1px 1px 6px 1px #00000072;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const StyledInput = styled.input`
  all: unset;
  color: rgba(58, 58, 58, 1);
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  &:focus,
  &:hover {
    outline: 1px solid white;
  }
`;

const StyledDropdown = styled.select`
  width: 100%;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  height: 28px;
  border: none;
  color: rgba(58, 58, 58, 1);
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  &:focus,
  &:hover {
    outline: 1px solid white;
  }
`;

const StyledDropDownWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
`;

const StyledClearButton = styled.button`
  all: unset;
  width: 50%;
  height: 2rem;
  display: flex;
  margin-top: 2rem;
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

const StyledSubmitButton = styled.button`
  all: unset;
  width: 50%;
  height: 2rem;
  display: flex;
  margin-top: 2rem;
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
      background-color: #2ee59d;
      color: #fff;
      transform: translateY(-3px);
    }
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledCancelLink = styled(Link)`
  text-decoration: none;
  all: unset;
  width: 50%;
  height: 2rem;
  display: flex;
  margin-top: 2rem;
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

const StyledCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  text-align: right;
`;
