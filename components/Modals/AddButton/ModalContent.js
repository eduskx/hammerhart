import Form from "@/components/Form";

export default function ModalContent({
  onClose,
  projects,
  setNewProjects,
  formMaterials,
  setFormMaterials,
  formSteps,
  setFormSteps,
}) {
  return (
    <Form
      projects={projects}
      setNewProjects={setNewProjects}
      formMaterials={formMaterials}
      setFormMaterials={setFormMaterials}
      formSteps={formSteps}
      setFormSteps={setFormSteps}
    />
  );
}
