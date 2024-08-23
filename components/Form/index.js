import styled, { css } from "styled-components";
import { useState, useRef, useEffect } from "react";
import DynamicInputFields from "./DynamicInputFields";
import { IoMdClose, IoMdImages } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
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

  // useEffect(() => {
  //   if (defaultData?.imageUrl) {
  //     setImagePreview(defaultData.imageUrl);
  //   }
  // }, [defaultData]);

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
    console.log("handleChange", imagePreview);
  }

  function handleClearForm() {
    if (formRef.current) {
      formRef.current.reset();

      // we need this extra logic to clear all defaultValues in the EditPage
      const formInputs = formRef.current.elements;
      formInputs.title.value = "";
      formInputs.imageUrl.value = "";
      formInputs.description.value = "";
      formInputs.durationNumber.value = "";
      formInputs.durationString.value = "";
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
        {isEditMode ? (
          <StyledHeader>Edit project</StyledHeader>
        ) : (
          <StyledHeader>Create a project</StyledHeader>
        )}

        <StyledCloseButton type="button" onClick={onToggleForm}>
          <IoMdClose color="#F9F5EBCC" size={32} />
        </StyledCloseButton>
      </StyledHeaderContainer>

      {/* Main section */}
      <StyledMainContainer>
        <StyledLabel htmlFor="title">Project Title *</StyledLabel>
        <StyledTextInput
          required
          id="title"
          name="title"
          type="text"
          placeholder="Enter project title..."
          defaultValue={defaultData?.title}
          maxLength={50}
        />

        {/* Image Upload */}
        <StyledImageInputWrapper>
          <StyledTitle>Upload Image</StyledTitle>
          <StyledImageContainer
            $imageUploaded={
              imagePreview || defaultData?.imageUrl ? true : false
            }
          >
            <StyledImageLabel htmlFor="imageUrl">
              <IoMdImages size={32} />
            </StyledImageLabel>

            <StyledImageUploadInput
              id="imageUrl"
              name="imageUrl"
              type="file"
              accept="image/*"
              onChange={handleChangeImage}
            />

            {!imagePreview && isEditMode && defaultData?.imageUrl && (
              <StyledPreviewImage
                alt="preview image"
                src={defaultData.imageUrl}
                width={0}
                height={0}
                unoptimized={true}
              />
            )}
            {imagePreview && (
              <StyledPreviewImage
                alt="preview image"
                src={URL.createObjectURL(imagePreview)}
                width={0}
                height={0}
                unoptimized={true}
              />
            )}
          </StyledImageContainer>
        </StyledImageInputWrapper>

        <StyledDurationWrapper>
          <StyledLabel htmlFor="durationNumber">Duration *</StyledLabel>
          <div style={{ height: "fit-content" }}>
            <StyledDurationInput
              required
              id="durationNumber"
              name="durationNumber"
              type="number"
              placeholder="99"
              defaultValue={defaultData?.durationNumber}
            />
            <StyledDurationDropdown
              required
              id="durationString"
              name="durationString"
              defaultValue={defaultData?.durationString}
            >
              <StyledOption value="">Please select a duration</StyledOption>
              <StyledOption value="minutes">Minutes</StyledOption>
              <StyledOption value="hours">Hours</StyledOption>
              <StyledOption value="days">Days</StyledOption>
            </StyledDurationDropdown>
          </div>
        </StyledDurationWrapper>

        <StyledComplexityWrapper>
          <StyledLabel htmlFor="complexity">Complexity *</StyledLabel>
          <StyledDropdown
            required
            id="complexity"
            name="complexity"
            defaultValue={defaultData?.complexity}
          >
            <StyledOption value="">
              Please select a complexity level
            </StyledOption>
            <StyledOption value="Beginner">Beginner</StyledOption>
            <StyledOption value="Intermediate">Intermediate</StyledOption>
            <StyledOption value="Advanced">Advanced</StyledOption>
          </StyledDropdown>
        </StyledComplexityWrapper>

        <DescriptionWrapper>
          <StyledDescriptionLabel htmlFor="description">
            Description
          </StyledDescriptionLabel>
          <StyledDescriptionCounter>{`${characterCounter} characters left`}</StyledDescriptionCounter>
          <StyledTextarea
            id="description"
            name="description"
            placeholder="Enter description..."
            rows={7}
            cols={30}
            maxLength={250}
            onChange={handleChangeCharactersLeft}
            defaultValue={defaultData?.description}
          />
        </DescriptionWrapper>

        <StyledDynamicInputWrapper>
          <StyledTitle>
            {materialFields.length === 0 ? "Materials" : "Materials *"}
          </StyledTitle>
          <DynamicInputFields
            label="Material"
            inputFields={materialFields}
            onAddField={() => handleAddField(setMaterialFields)}
            onRemoveField={(idToRemove) =>
              handleRemoveField(setMaterialFields, idToRemove)
            }
          />
        </StyledDynamicInputWrapper>

        <StyledDynamicInputWrapper>
          <StyledTitle>
            {stepFields.length === 0 ? "Steps" : "Steps *"}
          </StyledTitle>
          <DynamicInputFields
            label="Step"
            inputFields={stepFields}
            onAddField={() => handleAddField(setStepFields)}
            onRemoveField={(idToRemove) =>
              handleRemoveField(setStepFields, idToRemove)
            }
          />
        </StyledDynamicInputWrapper>
      </StyledMainContainer>

      {/* Footer section */}
      <StyledFooterContainer>
        <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
      </StyledFooterContainer>
    </StyledForm>
  );
}



const StyledForm = styled.form`
  color: var(--color-primary-2);
  border-radius: 30px;
  height: 90%;
  display: flex;
  flex-direction: column;
  z-index: 150;
  overflow: hidden;
  position: absolute;
  width: 95vw;
  max-width: 500px;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 16px 16px 16px;
  background: var(--color-primary-2);
  height: 80px;
  box-shadow: var(--box-shadow-form-1);
  z-index: 2;
`;

const StyledHeader = styled.h2`
  color: var(--color-font-light);
  margin: 0;
  width: 100%;
  text-align: center;
`;

const StyledCloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 8px;
  padding-right: 16px;
`;

const StyledMainContainer = styled.main`
  height: 100%;
  padding: 16px 48px;
  background: var(--color-primary-1);
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const StyledTextInput = styled.input`
  min-height: 35px;
  width: 100%;
  background-color: var(--color-primary-1);
  color: var(--color-primary-2);
  border: 2px solid var(--color-primary-2);
  padding: 8px;
  border-radius: 10px;
  margin-bottom: 24px;
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

const StyledImageInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: var(--color-primary-1);
  color: var(--color-primary-2);
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed var(--color-primary-2);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.$imageUploaded &&
    css`
      border: 3px solid var(--color-primary-2);
    `}
`;

const StyledDeleteImageButton = styled.button`
  background-color: var(--color-primary-2);
  color: var(--color-primary-1);
  border-radius: 10px;
  z-index: 0;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 4px;
  &:hover {
    color: var(--color-font-2);
    background-color: var(--color-secondary-1);
    outline-offset: -3px;
    outline: 2px solid var(--color-primary-2);
  }
`;

const StyledImageLabel = styled.label`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 10px;
  background-color: var(--color-primary-2);
  color: var(--color-primary-1);
  &:hover {
    background-color: var(--color-primary-1);
    color: var(--color-primary-2);
    border: 2px solid var(--color-primary-2);
  }
`;

const StyledImageUploadInput = styled.input`
  display: none;
`;

const StyledPreviewImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledDurationWrapper = styled.div`
  margin-bottom: 26px;
`;

const StyledDurationInput = styled(StyledTextInput)`
  width: 15%;
  text-align: center;
  height: 37px;
  margin-bottom: 0;
  border-radius: 10px 0 0 10px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledDropdown = styled.select`
  align-self: flex-start;
  padding: 8px;
  width: fit-content;
  color: var(--color-primary-2);
  background: var(--color-primary-1);
  border-radius: 10px;
  border: 2px solid var(--color-primary-2);
  &:focus {
    outline-offset: -3px;
    outline: 2px solid var(--color-primary-2);
  }
`;

const StyledDurationDropdown = styled(StyledDropdown)`
  border-radius: 0 10px 10px 0;
`;

const StyledComplexityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const StyledOption = styled.option`
  background-color: var(--color-primary-1);
  color: var(--color-primary-2);
`;

const StyledTitle = styled.h3`
  width: 100%;
  color: var(--color-primary-2);
  font-size: 18px;
`;

const StyledImageNote = styled(StyledTitle)`
  text-align: center;
  margin-top: -80px;
`;

const StyledLabel = styled(StyledTitle)``;

const StyledDescriptionLabel = styled(StyledLabel)`
  width: 50%;
`;

const StyledDynamicInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  border: none;
  background-color: var(--color-primary-1);
  color: var(--color-primary-2);
  word-wrap: break-word;
  resize: none;
  border-radius: 10px;
  border: 2px solid var(--color-primary-2);
  padding: 8px;
  &:focus {
    outline-offset: -3px;
    outline: 2px solid var(--color-primary-2);
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
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

const StyledDescriptionCounter = styled.p`
  width: 50%;
  text-align: right;
  font-size: 14px;
  color: ${(prop) =>
    prop.children === "0 characters left"
      ? "var(--color-primary-2-light)"
      : "var(--color-primary-2)"};
  animation: ${(props) =>
    props.children === "0 characters left" ? "shake 0.5s" : null};
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

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  background: var(--color-primary-2);
  z-index: 2;
  box-shadow: var(--box-shadow-form-2);
  height: 80px;
`;

const StyledSubmitButton = styled.button`
  background-color: var(--color-secondary-2);
  color: var(--color-font-light);
  width: 33%;
  padding: 13px 16px 15px 16px;
  border: none;
  border-radius: 20px;
  font-size: 1.3rem;
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
