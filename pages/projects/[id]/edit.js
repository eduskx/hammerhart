import { useRouter } from "next/router";
import Form from "@/components/Form";
import styled from "styled-components";

export default function EditPage({ projects, onUpdateProject }) {
  const router = useRouter();
  const { id } = router.query;

  const projectData = projects.find((project) => project.id === id);

  // async function editProject(event) {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);

  //   const newProject = Object.fromEntries(formData);

  //   if (projectData.imageUrl) {
  //     formData.append("currentImageUrl", projectData.imageUrl);
  //   }

  //   const response = await fetch("/api/upload", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const { url } = await response.json();

  //   newProject.id = id;
  //   newProject.materials = formMaterials;
  //   newProject.steps = formSteps;
  //   newProject.imageUrl = url;

  //   onUpdateProject(newProject);

  //   router.push(`/projects/${id}`);
  // }

  return (
    <>
      <StyledHeader>{`Edit project`}</StyledHeader>
      <Form onSubmit defaultData={projectData} />
    </>
  );
}

const StyledHeader = styled.h2`
  text-align: center;
  margin-top: 1rem;
  color: white;
`;
