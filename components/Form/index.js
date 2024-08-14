import styled from "styled-components";
import { useState, useRef } from "react";
import DynamicInputFields from "./DynamicInputFields";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { nanoid } from "nanoid";

export default function Form({
  onToggleForm,
  onAddProject,
  defaultData,
  onEditSubmit,
}) {
  let formRef = useRef(null);

  const [materialFields, setMaterialFields] = useState([
    { id: nanoid(), description: "" },
  ]);
  const [stepFields, setStepFields] = useState([
    { id: nanoid(), description: "" },
  ]);

  function handleAddField(setFields) {
    console.log("add ich wurde ausgeführt");
    const newField = { id: nanoid() };
    setFields((prevFields) => [...prevFields, newField]);
  }

  function handleRemoveField(setFields, idToRemove) {
    console.log("delete ich wurde ausgeführt");
    setFields((prevFields) =>
      prevFields.filter((field) => field.id !== idToRemove)
    );
  }

  function handleClearForm() {
    formRef.reset();
    // we need this extra logic to clear all defaultValues in the EditPage
    const formInputs = formRef.elements;
    formInputs.title.value = "";
    formInputs.imageUrl.value = "";
    formInputs.description.value = "";
    formInputs.duration.value = "";
    formInputs.complexity.value = "";

    setMaterialFields([{ id: nanoid() }]);
    setStepFields([{ id: nanoid() }]);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newProject = Object.fromEntries(formData);

    // convert materials to ["", "", "", ...]
    newProject.materials = formData.getAll("Materials");
    delete newProject.Materials;
    // newProject.materials = Object.keys(newProject)
    //   .filter((key) => key.startsWith("Materials"))
    //   .map((key) => newProject[key]);
    // setDefaultDataTest(newProject);

    // convert steps to [{id: "1", description: ""}, ...]
    const stepsArray = formData.getAll("Steps");
    const steps = stepsArray.map((step, index) => ({
      id: (index + 1).toString(),
      description: step,
    }));
    newProject.steps = steps;
    // delete newProject.Steps;

    // for image
    const response = await fetch("api/upload", {
      method: "POST",
      body: formData,
    });
    const { url } = await response.json();

    newProject.id = nanoid();
    newProject.imageUrl = url;

    onAddProject(newProject);

    handleClearForm();
  }

  return (
    <StyledForm
      ref={(element) => (formRef = element)}
      onSubmit={onEditSubmit || handleSubmit}
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

      <StyledImageUploadLabel htmlFor="imageUrl">
        <Image src="/upload.svg" alt="upload_icon" width={20} height={20} />
        <span>Upload Image</span>
      </StyledImageUploadLabel>
      <StyledImageUploadInput
        id="imageUrl"
        name="imageUrl"
        type="file"
        accept="image/*"
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

      <DynamicInputFields
        label="Materials"
        inputFields={
          defaultData?.materials.length > 0
            ? defaultData.materials
            : materialFields
        }
        onAddField={() => handleAddField(setMaterialFields)}
        onRemoveField={(idToRemove) =>
          handleRemoveField(setMaterialFields, idToRemove)
        }
      />
      <DynamicInputFields
        label="Steps"
        inputFields={
          defaultData?.steps.length > 0 ? defaultData.steps : stepFields
        }
        onAddField={() => handleAddField(setStepFields)}
        onRemoveField={(idToRemove) =>
          handleRemoveField(setStepFields, idToRemove)
        }
      />

      <StyledButtonWrapper>
        <StyledClearButton type="button" onClick={handleClearForm}>
          Clear
        </StyledClearButton>
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

const StyledImageUploadInput = styled.input`
  display: none;
`;

const StyledImageUploadLabel = styled.label`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  color: #000;
  background: rgba(255, 255, 255, 0.5);
  text-align: center;
  padding: 15px 40px;
  user-select: none;
  cursor: pointer;
  border-radius: 2px;
  margin: 1rem 0;
  &:hover {
    outline: 1px solid white;
  }
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
