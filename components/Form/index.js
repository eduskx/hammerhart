import styled from "styled-components";
import DynamicInputForm from "./DynamicInputForm";

export default function Form() {
  function handleSubmitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newProjectData = Object.fromEntries(formData);
    console.log(newProjectData);
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="title">Title</label>
      <input required id="title" name="title" type="text" />

      <label htmlFor="imageUrl">Image</label>
      <input required id="imageUrl" name="imageUrl" type="text" />

      <label htmlFor="description">Description</label>
      <StyledTextarea id="description" name="description" rows={5} cols={30} />
      <label htmlFor="duration">Duration</label>
      <input required id="duration" name="duration" type="text" />

      <label htmlFor="complexity">Complexity</label>
      <select required id="complexity" name="complexity">
        <option value="">Please select a complexity level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <DynamicInputForm listType="materials" />
      <DynamicInputForm listType="steps" />
      <button type="submit">Submit</button>
    </form>
  );
}

const StyledTextarea = styled.textarea`
  resize: none;
`;
