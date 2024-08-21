import styled from "styled-components";
import { useState, useRef } from "react";
import DynamicInputFields from "./DynamicInputFields";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { nanoid } from "nanoid";

export default function Form({
  onToggleForm,
  defaultData,
  onEditSubmit,
  onAddProject,
  onProcessFormData,
  isEditMode,
}) {
  let formRef = useRef(null);

  const [imagePreview, setImagePreview] = useState(null);
  const [characterCounter, setCharacterCounter] = useState(
    250 - defaultData?.description.length || 250
  );

  const [materialFields, setMaterialFields] = useState(
    defaultData?.materials || [{ id: nanoid() }]
  );
  const [stepFields, setStepFields] = useState(
    defaultData?.steps || [{ id: nanoid() }]
  );

  function handleAddField(setFields) {
    const newField = { id: nanoid() };
    setFields((prevFields) => [...prevFields, newField]);
  }

  function handleRemoveField(setFields, idToRemove) {
    setFields((prevFields) =>
      prevFields.filter((field) => field.id !== idToRemove)
    );
  }

  function handleChangeImage(event) {
    setImagePreview(event.target.files[0]);
  }

  function handleClearForm() {
    if (formRef.current) {
      formRef.current.reset();

      // we need this extra logic to clear all defaultValues in the EditPage
      const formInputs = formRef.current.elements;
      formInputs.title.value = "";
      formInputs.imageUrl.value = "";
      formInputs.description.value = "";
      formInputs.duration.value = "";
      formInputs.complexity.value = "";
    }

    setMaterialFields([{ id: nanoid() }]);
    setStepFields([{ id: nanoid() }]);
    setImagePreview(null);
    setCharacterCounter(250);
  }

  async function handleSubmit(event) {
    await onProcessFormData(event, null, null, onAddProject);
    handleClearForm();
  }

  function handleChangeCharactersLeft(event) {
    setCharacterCounter(event.target.maxLength - event.target.value.length);
  }

  return (
    <StyledForm ref={formRef} onSubmit={onEditSubmit || handleSubmit}>
      {/* Header section */}
      <StyledHeaderContainer>
        <StyledCloseButton type="button" onClick={onToggleForm}>
          <IoMdClose color="#F9F5EBCC" size={32} />
        </StyledCloseButton>

        {isEditMode ? (
          <StyledHeader>Edit project</StyledHeader>
        ) : (
          <StyledHeader>Create a project</StyledHeader>
        )}
      </StyledHeaderContainer>

      {/* Main section */}
      <StyledMainContainer>
        <label htmlFor="title"></label>
        <StyledTextInput
          required
          id="title"
          name="title"
          type="text"
          placeholder="Project title"
          defaultValue={defaultData?.title}
          maxLength={50}
        />

        {/* Image Upload */}
        <StyledImagePreviewWrapper>
          <StyledImageUploadLabel htmlFor="imageUrl">
            <Image src="/upload.svg" alt="upload_icon" width={20} height={20} />
            <span>Upload Image</span>
          </StyledImageUploadLabel>
          <StyledImageUploadInput
            id="imageUrl"
            name="imageUrl"
            type="file"
            accept="image/*"
            onChange={handleChangeImage}
          />
          {imagePreview && (
            <StyledImagePreview
              src={URL.createObjectURL(imagePreview)}
              alt="Preview of uploaded image"
              width={100}
              height={150}
            ></StyledImagePreview>
          )}
        </StyledImagePreviewWrapper>

        <label htmlFor="duration">Duration</label>
        <StyledTextInput
          required
          id="duration"
          name="duration"
          type="text"
          defaultValue={defaultData?.duration}
        />

        <StyledDropDownWrapper>
          <label htmlFor="complexity"></label>
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

        <StyledHeader>Materials</StyledHeader>
        <DynamicInputFields
          label="Material"
          inputFields={materialFields}
          onAddField={() => handleAddField(setMaterialFields)}
          onRemoveField={(idToRemove) =>
            handleRemoveField(setMaterialFields, idToRemove)
          }
        />

        <StyledHeader>Steps</StyledHeader>
        <DynamicInputFields
          label="Step"
          inputFields={stepFields}
          onAddField={() => handleAddField(setStepFields)}
          onRemoveField={(idToRemove) =>
            handleRemoveField(setStepFields, idToRemove)
          }
        />

        <DescriptionCounterWrapper>
          <label htmlFor="description"></label>
          <DescriptionCounter>{`${characterCounter} characters left`}</DescriptionCounter>
        </DescriptionCounterWrapper>
        <StyledTextarea
          id="description"
          name="description"
          placeholder="Description"
          rows={5}
          cols={30}
          maxLength={250}
          onChange={handleChangeCharactersLeft}
          defaultValue={defaultData?.description}
        />
      </StyledMainContainer>

      {/* Footer section */}
      <StyledFooterContainer>
        <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
      </StyledFooterContainer>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  @media screen and (min-width: 640px) {
  }
  color: var(--color-font-light);
  background: var(--color-primary-2);
  border-radius: 30px 30px 0 0;
  width: 350px;
  height: 90vh;
  box-shadow: 1px 1px 6px 1px #00000072;
  display: flex;
  flex-direction: column;
  z-index: 150;
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translate(calc(50vw - 50%));
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  padding: 24px 16px 16px 16px;
  border-radius: 30px 30px 0 0;
  background: var(--color-primary-2);
  border-bottom: 1px solid white;
`;

const StyledHeader = styled.h2`
  color: var(--color-font-light);
  margin: 0;
  width: 100%;
  text-align: center;
`;

const StyledCloseButton = styled.div`
  cursor: pointer;
  position: fixed;
  right: 0;
  top: 8px;
  padding-right: 16px;
`;

const StyledMainContainer = styled.main`
  height: 80%;
  padding: 16px;
  background: #536f5f;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const StyledTextInput = styled.input`
  background-color: var(--color-secondary-3);
  color: var(--color-font-light);
  border: none;
  padding: 8px;
  border-radius: 10px;
  &:focus,
  &:hover {
    outline: 1px solid white;
  }
  &::placeholder {
    color: var(--color-font-light);
    opacity: 1; /* Firefox */
  }
  &::-ms-input-placeholder {
    /* Edge 12 -18 */
    color: var(--color-font-light);
  }
`;

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

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  background: var(--color-primary-2);
  border-top: 1px solid white;
`;

const StyledSubmitButton = styled.button`
  background-color: var(--color-secondary-3);
  color: var(--color-font-light);
  width: 33%;
  padding: 16px;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  &:focus,
  &:hover {
    outline: 1px solid var(--color-primary-1);
    &:hover {
      background-color: var(--color-primary-1);
      color: var(--color-primary-2);
    }
  }
`;

// ////////////////////////////////////////////////////////////

const DescriptionCounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DescriptionCounter = styled.span`
  display: inline-block;
  color: ${(prop) => (prop.children === "0 characters left" ? "red" : "white")};
  animation: ${(props) =>
    props.children === "0 characters left" ? "shake 0.5s 2" : null};

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

const StyledImagePreviewWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  justify-content: space-between;
  margin: 1rem 0;
`;

const StyledImagePreview = styled(Image)`
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  width: 50%;
`;

const StyledImageUploadInput = styled.input`
  display: none;
`;

const StyledImageUploadLabel = styled.label`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.1rem;
  color: #000;
  background: rgba(255, 255, 255, 0.5);
  user-select: none;
  cursor: pointer;
  border-radius: 2px;
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

export { StyledTextInput };
