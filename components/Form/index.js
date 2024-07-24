import styled from "styled-components";
import DynamicInputForm from "./DynamicInputForm";
import { useState } from "react";

export default function Form() {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input required id="title" name="title" type="text" />

      <label htmlFor="imageUrl">Image</label>
      <input required id="imageUrl" name="imageUrl" type="text" />

      <label htmlFor="description">Description</label>
      <StyledTextarea id="description" name="description" rows={5} cols={30} />

      <label htmlFor="complexity">Complexity</label>
      <select required id="complexity" name="complexity">
        <option disabled>Please select a complexity level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <DynamicInputForm listType="materials" />
      <DynamicInputForm listType="steps" />
    </form>
  );
}

const StyledTextarea = styled.textarea`
  resize: none;
`;
