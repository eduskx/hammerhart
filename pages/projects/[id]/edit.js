import { useRouter } from "next/router";
import Form from "@/components/Form";
import styled from "styled-components";

export default function EditPage({
  projects,
  onUpdateProject,
  onProcessFormData,
  onToggleForm,
}) {
  const router = useRouter();
  const { id } = router.query;

  const projectData = projects.find((project) => project.id === id);

  async function handleEditSubmit(event) {
    await onProcessFormData(event, projectData, id, onUpdateProject);
    router.push(`/projects/${id}`);
  }

  return (
    <>
      <StyledHeader>{`Edit project`}</StyledHeader>
      {projectData && (
        <Form defaultData={projectData} onEditSubmit={handleEditSubmit} />
      )}
    </>
  );
}

const StyledHeader = styled.h2`
  text-align: center;
  margin-top: 1rem;
  color: white;
`;
