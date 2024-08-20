import { useRouter } from "next/router";
import Form from "@/components/Form";

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
      {projectData && (
        <Form
          defaultData={projectData}
          onEditSubmit={handleEditSubmit}
          onToggleForm={onToggleForm}
          isEditMode={true}
        />
      )}
    </>
  );
}
