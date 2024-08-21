import styled, { css } from "styled-components";
import { useState, useRef } from "react";
import DynamicInputFields from "./DynamicInputFields";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { nanoid } from "nanoid";
import { IoMdImages } from "react-icons/io";

export default function Form({
  onToggleForm,
  defaultData,
  onEditSubmit,
  onAddProject,
  onProcessFormData,
  isEditMode,
}) {
  let formRef = useRef(null);

  const $secondDesign = false;
  const $thirdDesign = false;

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
      <StyledMainContainer $secondDesign={$secondDesign}>
        <label htmlFor="title"></label>
        <StyledTextInput
          required
          id="title"
          name="title"
          type="text"
          placeholder="Project title"
          defaultValue={defaultData?.title}
          maxLength={50}
          $thirdDesign={$thirdDesign}
        />

        {/* Image Upload */}

        <StyledImageContainer $thirdDesign={$thirdDesign}>
          <StyledImageLabel
            htmlFor="imageUrl"
            $imageUploaded={imagePreview ? true : false}
          >
            <IoMdImages size={32} />
          </StyledImageLabel>

          <StyledImageUploadInput
            id="imageUrl"
            name="imageUrl"
            type="file"
            accept="image/*"
            onChange={handleChangeImage}
          />
          {imagePreview && (
            <StyledPreviewImage
              alt="preview image"
              src={URL.createObjectURL(imagePreview)}
              width={0}
              height={0}
            />
          )}
        </StyledImageContainer>

        <label htmlFor="duration"></label>
        <StyledTextInput
          required
          id="duration"
          name="duration"
          type="text"
          placeholder="Duration"
          defaultValue={defaultData?.duration}
          $thirdDesign={$thirdDesign}
        />

        <label htmlFor="complexity"></label>
        <StyledDropdown
          required
          id="complexity"
          name="complexity"
          defaultValue={defaultData?.complexity}
          $thirdDesign={$thirdDesign}
        >
          <StyledOption $thirdDesign={$thirdDesign} value="">
            Please select a complexity level
          </StyledOption>
          <StyledOption $thirdDesign={$thirdDesign} value="Beginner">
            Beginner
          </StyledOption>
          <StyledOption $thirdDesign={$thirdDesign} value="Intermediate">
            Intermediate
          </StyledOption>
          <StyledOption $thirdDesign={$thirdDesign} value="Advanced">
            Advanced
          </StyledOption>
        </StyledDropdown>

        <StyledDynamicInputWrapper>
          <StyledTitle $thirdDesign={$thirdDesign}>Materials</StyledTitle>
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
          <StyledTitle>Steps</StyledTitle>
          <DynamicInputFields
            label="Step"
            inputFields={stepFields}
            onAddField={() => handleAddField(setStepFields)}
            onRemoveField={(idToRemove) =>
              handleRemoveField(setStepFields, idToRemove)
            }
          />
        </StyledDynamicInputWrapper>

        <DescriptionWrapper>
          <label htmlFor="description"></label>
          <StyledTextarea
            id="description"
            name="description"
            placeholder="Description"
            rows={7}
            cols={30}
            maxLength={250}
            onChange={handleChangeCharactersLeft}
            defaultValue={defaultData?.description}
            $thirdDesign={$thirdDesign}
          />
          <StyledDescriptionCounter>{`${characterCounter} characters left`}</StyledDescriptionCounter>
        </DescriptionWrapper>
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
    width: 640px;
  }
  color: var(--color-font-light);
  border-radius: 30px 30px 0 0;
  width: 100vw;
  height: 90%;
  display: flex;
  flex-direction: column;
  z-index: 150;
  overflow: hidden;
  position: relative;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 16px 16px 16px;
  background: var(--color-primary-2);
  height: 80px;
  box-shadow: var(--box-shadow-2);
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
  padding: 16px;
  background: var(--color-primary-1);
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  ${(props) =>
    props.$secondDesign &&
    css`
      background-color: var(--color-primary-3);
    `}
`;

const StyledTextInput = styled.input`
  min-height: 35px;
  width: 80%;
  background-color: var(--color-primary-1);
  color: var(--color-primary-2);
  border: 2px solid var(--color-primary-2);
  padding: 8px;
  border-radius: 10px;
  &:focus {
    border: 3px solid var(--color-primary-2);
  }
  &::placeholder {
    color: var(--color-font-2);
    opacity: 1; /* Firefox */
  }
  &::-ms-input-placeholder {
    /* Edge 12 -18 */
    color: var(--color-font-2);
  }
  ${(props) =>
    props.$thirdDesign &&
    css`
      background-color: var(--color-primary-2);
      color: var(--color-primary-1);
      &::placeholder {
        color: var(--color-font-1);
        opacity: 1; /* Firefox */
      }
      &::-ms-input-placeholder {
        /* Edge 12 -18 */
        color: var(--color-font-1);
      }
    `}
`;

const StyledImageContainer = styled.div`
  width: 60%;
  height: 200px;
  background: var(--color-primary-1);
  color: var(--color-primary-2);
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-primary-2);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  &:focus,
  &:hover {
    border: 2px dashed var(--color-primary-2);
  }
  ${(props) =>
    props.$thirdDesign &&
    css`
      background-color: var(--color-primary-2);
      color: var(--color-primary-1);
      &::placeholder {
        color: var(--color-font-1);
        opacity: 1; /* Firefox */
      }
      &::-ms-input-placeholder {
        /* Edge 12 -18 */
        color: var(--color-font-1);
      }
    `}
`;

const StyledImageLabel = styled.label`
  position: absolute;
  cursor: pointer;
  ${(props) =>
    props.$imageUploaded &&
    css`
      background-color: var(--color-secondary-1);
      color: var(--color-primary-2);
      padding: 4px;
      border-radius: 10px;
    `}
`;

const StyledImageUploadInput = styled.input`
  display: none;
`;

const StyledPreviewImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledDropdown = styled.select`
  margin: 16px 0;
  padding: 8px;
  width: fit-content;
  border: none;
  color: var(--color-primary-2);
  background: var(--color-primary-1);
  border-radius: 10px;
  border: 2px solid var(--color-primary-2);
  &:focus {
    border: 3px solid var(--color-primary-2);
  }
  ${(props) =>
    props.$thirdDesign &&
    css`
      background-color: var(--color-primary-2);
      color: var(--color-primary-1);
      &::placeholder {
        color: var(--color-font-1);
        opacity: 1; /* Firefox */
      }
      &::-ms-input-placeholder {
        /* Edge 12 -18 */
        color: var(--color-font-1);
      }
    `}
`;

const StyledOption = styled.option`
  background-color: var(--color-primary-1);
  color: var(--color-primary-2);
  ${(props) =>
    props.$thirdDesign &&
    css`
      background-color: var(--color-primary-2);
      color: var(--color-primary-1);
      &::placeholder {
        color: var(--color-font-1);
        opacity: 1; /* Firefox */
      }
      &::-ms-input-placeholder {
        /* Edge 12 -18 */
        color: var(--color-font-1);
      }
    `}
`;

const StyledTitle = styled.h3`
  color: var(--color-primary-2);
  font-size: 20px;
  padding-bottom: 8px;
`;

const StyledDynamicInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTextarea = styled.textarea`
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
    border: 3px solid var(--color-primary-2);
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &::placeholder {
    color: var(--color-font-2);
    opacity: 1; /* Firefox */
  }
  &::-ms-input-placeholder {
    /* Edge 12 -18 */
    color: var(--color-font-2);
  }
  ${(props) =>
    props.$thirdDesign &&
    css`
      background-color: var(--color-primary-2);
      color: var(--color-primary-1);
      &::placeholder {
        color: var(--color-font-1);
        opacity: 1; /* Firefox */
      }
      &::-ms-input-placeholder {
        /* Edge 12 -18 */
        color: var(--color-font-1);
      }
    `}
`;

const StyledDescriptionCounter = styled.p`
  color: ${(prop) =>
    prop.children === "0 characters left"
      ? "var(--color-font-1)"
      : "var(--color-primary-1)"};
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
  box-shadow: var(--box-shadow-1);
  height: 80px;
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

const StyledImagePreviewWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  justify-content: space-between;
  margin: 1rem 0;
`;

export { StyledTextInput };
