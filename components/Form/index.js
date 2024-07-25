import styled from "styled-components";
import { useState } from "react";
import DynamicArrayInput from "@/components/Form/DynamicArrayInput";
import DynamicStepsInput from "@/components/Form/DynamicStepsInput";

export default function Form({ setNewProjects, projects }) {
  const [materials, setMaterials] = useState([]);
  const [steps, setSteps] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newProject = Object.fromEntries(formData);
    newProject.id = `${projects.length + 1}`;
    newProject.materials = materials;
    newProject.steps = steps;

    setNewProjects([newProject, ...projects]);

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input required id="title" name="title" type="text" />

      <label htmlFor="imageUrl">Image</label>
      <input
        id="imageUrl"
        name="imageUrl"
        type="text"
        defaultValue="https://images.unsplash.com/photo-1721843431268-b8e380c6892f?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <label htmlFor="description">Description</label>
      <StyledTextarea id="description" name="description" rows={5} cols={30} />

      <label htmlFor="duration">Duration</label>
      <input required id="duration" name="duration" type="test" />

      <label htmlFor="complexity">Complexity</label>
      <select required id="complexity" name="complexity">
        <option value="">Please select a complexity level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <p>Add Materials</p>
      <DynamicArrayInput setterFunction={setMaterials} />

      <p>Add Steps</p>
      <DynamicStepsInput setSteps={setSteps} />

      <button type="submit">Submit</button>
    </form>
  );
}

const StyledTextarea = styled.textarea`
  resize: none;
`;
