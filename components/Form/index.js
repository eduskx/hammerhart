import styled from "styled-components";
import { useState, useRef } from "react";
import DynamicInputFields from "./DynamicInputFields";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { nanoid } from "nanoid";
import { Editor } from "primereact/editor";

export default function Form({
  onToggleForm,
  defaultData,
  onEditSubmit,
  onAddProject,
  onProcessFormData,
}) {
  let formRef = useRef(null);

  const [value, setValue] = useState("");
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
    setCharacterCounter(250 - event.target.value.length);
  }

  function handleChangeLimitCharacter(event) {
    const text = document.createElement("div");
    text.innerHTML = event.htmlValue || "";

    if (text.innerText.length <= 250) {
      setValue(text.innerText);
      setCharacterCounter(250 - text.innerText.length);
    } else {
      text.innerText = text.innerText.substring(0, 250);
      setValue(text.innerText);
      setCharacterCounter(250 - text.innerText.length);
    }
  }

  // const customToolbar = (
  //   <span className="ql-formats">
  //     <button className="ql-bold" />
  //     <button className="ql-italic" />
  //     <button className="ql-underline" /> */
  //     <button className="ql-list" value="ordered" />
  //     <button className="ql-list" value="bullet" />
  //     <button className="ql-link" />
  //   </span>
  // );

  return (
    <StyledForm ref={formRef} onSubmit={onEditSubmit || handleSubmit}>
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

      <DescriptionCounterWrapper>
        <label htmlFor="description">Description</label>
        <DescriptionCounter>{`${characterCounter} characters left`}</DescriptionCounter>
      </DescriptionCounterWrapper>
      <StyledTextarea
        id="description"
        name="description"
        rows={5}
        cols={30}
        maxLength={250}
        onChange={handleChangeCharactersLeft}
        defaultValue={defaultData?.description}
      />
      <Editor
        value={value}
        onTextChange={(e) => handleChangeLimitCharacter(e)}
        maxLength={250}
        style={{ height: "320px" }}
        // headerTemplate={customToolbar}
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
        inputFields={materialFields}
        onAddField={() => handleAddField(setMaterialFields)}
        onRemoveField={(idToRemove) =>
          handleRemoveField(setMaterialFields, idToRemove)
        }
      />
      <DynamicInputFields
        label="Steps"
        inputFields={stepFields}
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
